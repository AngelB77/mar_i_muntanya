import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/", // Cambia esta URL por la de tu API
});

export default instance;
