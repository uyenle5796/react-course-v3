import axios from "axios";

// Axios custom instance

export const customFetch = axios.create({
  baseUrl: "https://strapi-store-server.onrender.com/api",
});
