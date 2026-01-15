import { HttpClient } from "./httpClient";
import { imageEnv, weatherEnv } from "@/shared/config";

export class Weather extends HttpClient {
  constructor() {
    if (!weatherEnv.BASE_URL) {
      throw new Error(`weather Base Url invalid ${weatherEnv.BASE_URL}`);
    }
    super(weatherEnv?.BASE_URL, weatherEnv.timeout);
  }

  fetch(latitude, longitude) {
    return this.get("/weather", {
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

export class Image extends HttpClient {
  constructor() {
    if (!imageEnv.BASE_URL) {
      throw new Error(`image Base Url invalid ${imageEnv.BASE_URL}`);
    }
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
