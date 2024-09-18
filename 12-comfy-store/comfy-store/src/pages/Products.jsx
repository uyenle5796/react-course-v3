import { customFetch } from "../utils";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import axios from "axios";

export const loader = async ({ request }) => {
  // const res = await customFetch("/products");

  /**
   * takes a URL string from the request.url property
   * creates a URL object from that URL string
   * extracts the query parameters using the searchParams property
   * converts the query parameters into an iterable of key-value pairs using the entries() method
   * spreads these key-value pairs into an array
   * uses Object.fromEntries() to create a new object where the key-value pairs become properties of the object
   */
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const res = await axios.get(
    "https://strapi-store-server.onrender.com/api/products",
    { params }
  );

  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta, params };
};

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
