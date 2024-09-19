import { useState } from "react";
import { useNavigate, redirect, Form, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormInput, SubmitButton } from "../components";
import { login } from "../features/user/userSlice";
import axios from "axios";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const loginData = Object.fromEntries(formData);
    // let returnData;
    // this doens't work for some reason
    // try {
    //   const response = await axios.post(
    //     "https://strapi-store-server.onrender.com/api/auth/local",
    //     data
    //   );
    //   store.dispatch(login(response.data));
    //   return redirect("/");
    // } catch (error) {
    //   const errorMessage =
    //     error?.response?.data?.error?.message ||
    //     "please double check your credentials";
    //   return null;
    // }

    await axios
      .post(
        "https://strapi-store-server.onrender.com/api/auth/local",
        loginData
      )
      .then((res) => {
        store.dispatch(login(res.data));
        // returnData = redirect("/");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage =
          error?.response?.data?.error?.message ||
          "please double check your credentials";
        // returnData = null;
        return null;
      });
    // return returnData;
  };

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loginAsGuest = async () => {
    await axios
      .post("https://strapi-store-server.onrender.com/api/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      })
      .then((res) => {
        setLoading(true);
        dispatch(login(res.data));
        navigate("/");
      })
      .catch((error) => {
        const errorMessage =
          error?.response?.data?.error?.message ||
          "please double check your credentials";
      });
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          placeholder="email@example.com"
          defaultValue="hi@bumblebee.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          placeholder="secret123"
          defaultValue="test123"
        />
        <div className="mt-4">
          <SubmitButton text="login" />
        </div>

        <button
          type="button"
          className="btn btn-secondary btn-block capitalize"
          onClick={loginAsGuest}
        >
          guest user
        </button>
        {loading && (
          <div className="flex items-center justify-center">
            <span className="loading loading-ring loading-lg" />
          </div>
        )}
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}
