import axios from "axios";

const api = axios.create({
  baseURL: "https://cardapio-backend.onrender.com",
  responseType: "json",
});

export default api;
