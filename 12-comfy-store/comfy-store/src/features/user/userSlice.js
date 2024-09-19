import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(), //  persist theme data in browser
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt }; // add the jwt token to 'token'
      state.user = user; // update state user data
      localStorage.setItem("user", JSON.stringify(user));
      // user data looks like this:
      //   {
      //     "user": {
      //       "id": 5402,
      //       "username": "bumblebee",
      //       "email": "hi@bumblebee.com",
      //       "provider": "local",
      //       "confirmed": true,
      //       "blocked": false,
      //       "token" : '<token here>',
      //       "createdAt": "2024-09-19T09:42:57.048Z",
      //       "updatedAt": "2024-09-19T09:42:57.048Z"
      //     }
      //   }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    toggleTheme: (state) => {
      console.log("toggle theme");
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
  extraReducers: (builder) => {},
});

export const { login, logout, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
