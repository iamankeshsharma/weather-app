import axios from "axios";

export class HttpClient {
  constructor(baseUrl, timeout) {
    this.api = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
    });
  }

  get(url, params) {
    return this.api
      .get(url, {
        headers: params.headers,
        params: params.params,
      })
      .then((response) => response);
  }

  post(url, params) {
    return this.api
      .post(url, {
        headers: params.headers,
        params: params.params,
      })
      .then((response) => response);
  }
}
