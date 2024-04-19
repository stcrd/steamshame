<script>
  export let isStarted = false;

  const toggle = () => {
    isStarted = !isStarted;
    
  }
  $: mainBtn = isStarted ? 'Stop' : 'Repent';

</script>

<button on:click={toggle}>{mainBtn}</button>

<style>
  button {
    font-size: 1.5rem;
    background-color: blue;
    border-radius: 5px;
    border-style: none;
    height: 50px;
    width: 100px;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
  }
</style>