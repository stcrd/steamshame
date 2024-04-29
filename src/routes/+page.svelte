<script>
  import { convertTime } from '$lib/convertTime.js';
  import Nav from "../components/Nav.svelte";
  import Button from "../components/Button.svelte";
  import Activities from "../components/Activities.svelte";
  import Statement from "../components/Statement.svelte";
	import Games from "../components/Games.svelte";

  export let data;

  const totalTime = convertTime(data.totalTime);
  let recoupedTime = 0;

  let games = data.gamesAndTimes;
</script>

<div class='container'>
  <h1>SteamShame</h1>
  <Nav></Nav>
  <Statement totalPlaytime={data.totalTime} />
  <Games {data}/>
  <p>Choose an activity below to make up for the wasted time.<br>Recouped so far: {convertTime(recoupedTime)}</p>
  <!-- <Activities /> -->
  <Button />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  :global(body) {
    background-color: grey;
  }
</style>