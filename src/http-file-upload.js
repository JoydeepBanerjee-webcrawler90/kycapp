import axios from "axios";
const token = localStorage.getItem('access_token');
export default axios.create({
  baseURL: "http://shyamkycdemo.herokuapp.com:8080/server/api",
  headers: {
    "Content-type": "multipart/form-data",
    "x-access-token":token
  }
});