<script>
  import Nav from "../components/Nav.svelte";
  import Button from "../components/Button.svelte";
  import Activities from "../components/Activities.svelte";
  import Statement from "../components/Statement.svelte";

  export let data;
  // const iconUrl = `http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;

  const convertTime = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}h:${mins.toString().padStart(2, '0')}m`;
  };

  const totalTime = convertTime(data.totalTime);
  let recoupedTime = 0;

  let games = data.gamesAndTimes;
</script>

<Nav></Nav>
<div class='container'>
  <h1>SteamShame</h1>
  <Statement totalPlaytime={data.totalTime} />
  
  <table>
    <thead>
      <tr>
        <th class='gameNameCol'>Game</th>
        <th class='timeCol'>Time</th>
        <th>Ratio</th>
      </tr>
    </thead>
    <tbody>
      {#each games as game}
        <tr>
          <td><img src={game.iconURL} alt/> {game.name}</td>
          <td>{convertTime(game.playtime)}</td>
          <td>{(game.playtime * 100/ data.totalTime).toFixed(1)}%</td>
        </tr>
      {/each}
    </tbody>

  </table>
  <p>Choose an activity below to make up for the wasted time.<br>Recouped so far: {convertTime(recoupedTime)}</p>
  <Activities />

  <Button />
</div>

<style>
  .container {
    text-align: center;
  }

  th, td {
    text-align: left;
  }

  table {  
    margin-right: auto;  
    margin-left: auto;
    border-spacing: 15px 0;
    table-layout: fixed;
    width: 50%;
  }

  .gameNameCol {
    width: 45%;
  }

  .timeCol {
    width: 30%;
  }

  img {
    height: 1em;
    vertical-align: text-bottom;
  }

  @media (max-width: 550px) {
    table {
      width: 100%;
    }
  }
</style>