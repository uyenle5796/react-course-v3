import { useGetTasks } from "./customHooks";
import SingleItem from "./SingleItem";
import axios from "axios";

const Items = () => {
  const { isLoading, data, isError, error } = useGetTasks();

  if (isLoading) {
    return (
      <p style={{ textAlign: "center", marginTop: "1rem", color: "gray" }}>
        Please wait...
      </p>
    );
  }
  if (isError) {
    return (
      <p style={{ textAlign: "center", marginTop: "1rem", color: "red" }}>
        {error?.message}
      </p>
    );
  }

  return (
    <div className="items">
      {data.taskList?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
