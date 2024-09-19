import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";

export default function Cart() {
  const { user } = useSelector((state) => state.user);
  const { numItemsInCart } = useSelector((state) => state.cart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8  lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt-8 capitalize"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 capitalize"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
