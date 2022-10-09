import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 15000,
});

export const getTodoApi = () => api.get("/todos");
