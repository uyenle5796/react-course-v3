import { useState, useEffect } from "react";
import { useEditTask, useDeleteTask } from "./customHooks";

const SingleItem = ({ item }) => {
  const { editTask } = useEditTask();
  const { isLoading, deleteTask } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => {
          editTask({ id: item.id, isDone: !item.isDone });
          console.log(item);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isLoading}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
