<script>
  import { convertTime } from '$lib/convertTime.js';
  export let totalPlaytime = 0;
</script>

<p>You have wasted {convertTime(totalPlaytime)} on games in the last 2 weeks.<br>
  {#if totalPlaytime > 1680}
      That is {(totalPlaytime/(60*14)).toFixed(1)} hours a day! Shame on you!
  {:else if totalPlaytime > 840}
      Hmm... I see, you tried to abstain from games, but failed anyway!
  {:else}
      You were a good boy. But waste is a waste. Do better.
  {/if}
</p>