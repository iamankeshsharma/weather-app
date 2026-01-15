import { Weather, Image } from "./endpoints";
export { HttpClient } from "./httpClient";

export function fetchWeather(latitude, longitude) {
  const weather = new Weather();
  return weather.fetch(latitude, longitude);
}

export function fetchImage(description) {
  const image = new Image();
  return image.fetch(description);
}
