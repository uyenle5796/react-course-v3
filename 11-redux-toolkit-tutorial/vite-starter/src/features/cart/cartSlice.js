import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

/**
 * Redux slice - a collection of Redux reducer logic and actions for a single feature in your app
 *
 * action: updates the state (add, update, delete, etc)
 * reducer: a function that takes the current state of the store and an action as parameters
 */

// Get cart items from the API
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      console.log("name: ", name);
      console.log("thunkAPI: ", thunkAPI);
      console.log("thunkAPI.getState: ", thunkAPI.getState());
      thunkAPI.dispatch(openModal());
      const res = await axios(
        "https://www.course-api.com/react-useReducer-cart-project"
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Oops, something went wrong!");
    }
  }
);

const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increase: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.amount = item.amount + 1;
    },
    decrease: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.amount = item.amount - 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems.filter((item) => item.id !== itemId);
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = Math.floor(total);
    },
  },
  // Extra reducers to handle 3 phases of the API call: pending, fulfilled and rejected
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { increase, decrease, removeItem, calculateTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
