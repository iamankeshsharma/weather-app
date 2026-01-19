import { HttpClient } from "./httpClient";
import { imageEnv, weatherEnv } from "@/shared/config";

export class Weather extends HttpClient {
  constructor() {
    super(weatherEnv.BASE_URL, weatherEnv.timeout);
  }

  forecast(latitude, longitude) {
    return this.get("/data/2.5/forecast", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        lat: latitude,
        lon: longitude,
        appid: weatherEnv.SECRET_KEY,
        units: "metric",
      },
    })
      .then((result) => {
        if (result?.status === 200) return result;
      })
      .catch((err) => console.log(err));
  }

  fetch(latitude, longitude) {
    return this.get("/data/2.5/weather", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        lat: latitude,
        lon: longitude,
        appid: weatherEnv.SECRET_KEY,
        units: "metric",
      },
    })
      .then((result) => {
        if (result?.status === 200) return result;
      })
      .catch((err) => console.log(err));
  }
}

export class Geolocation extends Weather {
  fetch(location) {
    return this.get("/geo/1.0/direct", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        q: location,
        limit: 10,
        appid: weatherEnv.SECRET_KEY,
      },
    })
      .then((result) => {
        if (result?.status === 200) return result;
      })
      .catch((err) => console.log(err));
  }
}

export class Image extends HttpClient {
  constructor() {
    super(imageEnv.BASE_URL, weatherEnv.timeout);
  }

  fetch(description) {
    return this.get("/search/photos", {
      headers: {
        Authorization: `Client-ID ${imageEnv.ACCESS_KEY}`,
      },
      params: {
        query: `${description}`,
        orientation: `landscape`,
      },
    })
      .then((result) => {
        if (result?.status === 200) return result;
      })
      .catch((err) => console.log(err));
  }
}
