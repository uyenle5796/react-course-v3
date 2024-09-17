import { Hero } from "../components";
import { customFetch } from "../utils";

export const loader = async () => {
  const res = await customFetch("/products?featured=true");
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
