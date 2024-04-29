export const convertTime = (minutes) => {
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}h:${mins.toString().padStart(2, '0')}m`;
};