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

/**
 * Array.from({ length: number }, (, index) => { ... }): This part uses the Array.from method to create an array of a specific length, determined by the number parameter
 * The second argument of the Array.from method is a callback function that will be invoked for each element in the array.
 * The underscore () is a placeholder for the current element (which we don't need in this case), and index is the index of the current element.
 */
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1; // plus 1 as amount count must always be at least 1

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
