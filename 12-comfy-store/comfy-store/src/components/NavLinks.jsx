import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const links = [
    { id: 1, url: "/", text: "home" },
    { id: 2, url: "about", text: "about" },
    { id: 3, url: "products", text: "products" },
    { id: 4, url: "cart", text: "cart" },
    { id: 5, url: "checkout", text: "checkout" },
    { id: 6, url: "orders", text: "orders" },
  ];

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <ul key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </ul>
        );
      })}
    </>
  );
}
