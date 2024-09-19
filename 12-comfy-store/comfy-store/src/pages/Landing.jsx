import { Hero } from "../components";
import { customFetch } from "../utils";
import axios from "axios";

export const loader = async () => {
  // const res = await customFetch.get("/products?featured=true");

  const res = await axios.get(
    "https://strapi-store-server.onrender.com/api/products?featured=true"
  );
  const products = res.data.data;
  return { products };
};

export default function Landing() {
  return (
    <>
      <Hero />
    </>
  );
}
