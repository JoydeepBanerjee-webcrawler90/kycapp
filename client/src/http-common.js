import axios from "axios";
import {store} from './store';
import Config from './config';

const token = localStorage.getItem('access_token');

const URL = Config().API_BASEURL;

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
  }
});