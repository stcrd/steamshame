<script>
  import { convertTime } from '$lib/convertTime.js';
  export let data;

  const totalTime = convertTime(data.totalTime);

  let games = data.gamesAndTimes;
</script>

<div class='table'>
  <div class='row heading'>
    <div class='cell firstColumn'>Game</div>
    <div class='cell'>Time</div>
    <!-- <div class='cell'>Ratio</div> -->
  </div>
  {#each games as game}
    <div class='row'>
      <div class='cell firstColumn'><img class='gameIcon' src={game.iconURL} alt/>{game.name}</div>
      <div class='cell'>{convertTime(game.playtime)}</div>
      <!-- <div class='cell'>{(game.playtime * 100/ data.totalTime).toFixed(1)}%</div> -->
    </div>
  {/each}
</div>

<style>
  :root {
    --parent-width: 500px;
  }

  .table {
    display: flex;
    flex-flow: column nowrap;
    width: 350px;
  }

  .row {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: baseline;
  }

  .heading {
    font-weight: bold;
  }

  /* .cell {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    box-sizing: border-box;
    overflow: hidden;
  } */

  .gameIcon {
    height: 1em;
  }

</style>