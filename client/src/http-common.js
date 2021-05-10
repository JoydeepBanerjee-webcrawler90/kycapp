import axios from "axios";
import Config from "./config";

const URL = Config().API_BASEURL;
const TOKEN = localStorage.getItem('access_token');

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
    "x-access-token": TOKEN
  }
});