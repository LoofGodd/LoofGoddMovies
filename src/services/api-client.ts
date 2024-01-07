import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
}
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5c7f6457db70f4fb1f84817100bc1850",
    append_to_response: "videos",
  },
});

class Service<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  get = () => axiosInstance.get<T>(this.endpoint).then((res) => res.data);
}
export default Service;
