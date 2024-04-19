import dotenv from 'dotenv';

dotenv.config();

const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID1}/`;

export async function load({ fetch }) {
	const res = await fetch(url);
  const resJson = await res.json();
  const totalTime = resJson.response.games.reduce((acc, game ) => acc + game.playtime_2weeks, 0);
  let allGames = resJson.response.games
    .reduce((acc, game) => [
      ...acc,
      {
        name: game.name,
        playtime: game.playtime_2weeks,
        iconURL: `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`
      }
    ], []);
  
  allGames.sort((a, b) => {
    if (a.playtime < b.playtime) {
      return 1;
    } else if (a.playtime > b.playtime) {
      return -1;
    }
    return 0;
  });

  let topFivePlaytime = 0;
  const gamesAndTimes = [];
  for (const item of allGames) {
    if (gamesAndTimes.length === 5) {
      topFivePlaytime = gamesAndTimes.reduce((acc, el) => acc + el.playtime, 0);
      gamesAndTimes.push({ name: 'Other games', playtime: totalTime - topFivePlaytime, iconURL: '/others.jpg' });
      break;
    } else {
      gamesAndTimes.push(item);
    }
  };

  return {
    totalTime,
    gamesAndTimes,
  }
}