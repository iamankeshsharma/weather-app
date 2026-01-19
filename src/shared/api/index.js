import { Weather, Geolocation, Image } from "./endpoints";
export { HttpClient } from "./httpClient";

export function fetchWeather(latitude, longitude) {
  const weather = new Weather();
  return weather.fetch(latitude, longitude);
}

export function fetchCoordinates(location) {
  const geoLocation = new Geolocation();
  return geoLocation.fetch(location);
}

export function forecast(latitude, longitude) {
  const weather = new Weather();
  return weather.forecast(latitude, longitude);
}

export function fetchImage(description) {
  const image = new Image();
  return image.fetch(description);
}
