import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const steamtime = writable(null);

if (browser) {
  fetch('http://localhost:5173/api/steamtime.json')
  .then((response) => response.games.reduce((acc, game) => acc + game.playtime_2weeks, 0))
  .then((data) => steamtime.set(data));
};