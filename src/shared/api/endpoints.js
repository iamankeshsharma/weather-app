import { HttpClient } from "./httpClient";
import { imageEnv, weatherEnv } from "@/shared/config";

export class Weather extends HttpClient {
  constructor() {
    super(weatherEnv.BASE_URL, weatherEnv.timeout);
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
