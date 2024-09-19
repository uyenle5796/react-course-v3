import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(), // persist cart data in browser
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      // add new item
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      // update cart totals
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      // calculate tax and order total
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      // Convert the current state to a JSON string and store it in the browser's local storage under the key 'cart'
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.filter((item) => item.cartID !== cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state); // re-evaluate tax and order total
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((item) => item.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
