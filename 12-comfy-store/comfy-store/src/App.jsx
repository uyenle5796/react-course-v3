import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// router data loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
// route actions
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
// pages
import {
  HomeLayout,
  Landing,
  Error,
  ErrorElement,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // root page
    errorElement: <Error />,
    // below are nested pages so don't need forward slash as they will inherit from the parent
    children: [
      {
        // the index page which will be displayed at '/'
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader, // provides data to Landing element before it renders
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorElement />,
    action: loginAction(store),
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorElement />,
    action: registerAction,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
