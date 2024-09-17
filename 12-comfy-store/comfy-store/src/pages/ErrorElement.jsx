import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  return (
    <h4 className="text-center font-bold text-4xl">There was an error...</h4>
  );
}
