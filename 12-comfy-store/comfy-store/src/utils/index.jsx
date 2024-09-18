import axios from "axios";

// Axios custom instance

export const customFetch = axios.create({
  baseUrl: "https://strapi-store-server.onrender.com/api",
});

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format((price / 100).toFixed(2));
};
