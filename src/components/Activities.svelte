<script>
  // import {createEventDispatcher} from 'svelte'

  let selected = 1;

  // const dispatch = createEventDispatcher()

  // const onChange = (e) => {
  //   selected = e.currentTarget.value
  //   dispatch('rating-select', selected)
  // }
</script>

<ul class="rating">
  <li>
    <input type="radio" id="num1" name="rating" value="1" checked={selected===1} />
    <label for="num1">Workout</label>
  </li>
  <li>
    <input type="radio" id="num2" name="rating" value="2" checked={selected===2} />
    <label for="num2">Meditation</label>
  </li>
  <li>
    <input type="radio" id="num3" name="rating" value="3" checked={selected===3} />
    <label for="num3">Learning a new skill</label>
  </li>
  <li>
    <input type="radio" id="num4" name="rating" value="4" checked={selected===4} />
    <label for="num4">Reading a book</label>
  </li>
  <li>
    <input type="radio" id="num5" name="rating" value="5" checked={selected===5} />
    <label for="num5">Self improvement</label>
  </li>
</ul>

<style>
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 80px;
    height: 30px;
    padding: 5px;
    text-align: center;
    border-radius: 10%;
    font-size: 1rem;
    border: 1px #eee solid;
    transition: 0.3s;
    list-style-type: none;
    margin: 10px 0;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 30px;
    padding: 5px;
    border-radius: 10%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #208c63;
    color: #fff;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: #208c63;;
    color: #fff;
  }
</style>