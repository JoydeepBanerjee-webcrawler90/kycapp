import axios from "axios";
const token = localStorage.getItem('access_token');

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    "x-access-token":token
  }
});