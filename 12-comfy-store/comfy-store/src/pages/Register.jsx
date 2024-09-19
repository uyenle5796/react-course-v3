import { FormInput, SubmitButton } from "../components";
import { Form, redirect, Link } from "react-router-dom";
// import { customFetch } from "../utils";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    // const response = await customFetch.post("/auth/local/register", data);
    const res = await axios.post(
      "https://strapi-store-server.onrender.com/api/auth/local/register",
      data
    );
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    return null;
  }
};

export default function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 py-8 px-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitButton text="register" />
        </div>

        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
}
