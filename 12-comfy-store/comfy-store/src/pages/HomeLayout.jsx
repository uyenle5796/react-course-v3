import { Outlet } from "react-router-dom";
import { Header, NavBar } from "../components";

// This is an outlet component - anything rendered here will be shared across all the children components. Therefore it's useful for shared components like Navbar, sidebar menu or footer.

export default function HomeLayout() {
  return (
    <>
      <Header />
      <NavBar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
}
