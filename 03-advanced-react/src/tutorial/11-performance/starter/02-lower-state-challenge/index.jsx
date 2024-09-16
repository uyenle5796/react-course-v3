import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Form from "./Form";

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      {/* Move form to a separate component to avoid unnecessary re-renders */}
      <Form people={people} />
      <List people={people} />
    </section>
  );
};

export default LowerStateChallenge;
