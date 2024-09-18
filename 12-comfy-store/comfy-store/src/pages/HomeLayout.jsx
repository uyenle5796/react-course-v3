import { Outlet, useNavigation } from "react-router-dom";
import { Header, NavBar, Loading } from "../components";

// This is an outlet component - anything rendered here will be shared across all the children components. Therefore it's useful for shared components like Navbar, sidebar menu or footer.

export default function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
}
