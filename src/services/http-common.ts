import axios, { AxiosInstance, AxiosResponse } from "axios";
import { enums } from "@/components/views/utils/helpers/Enums";

const apiClient: AxiosInstance = axios.create({
  baseURL: enums.BASEURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
export { apiClient, AxiosResponse };
