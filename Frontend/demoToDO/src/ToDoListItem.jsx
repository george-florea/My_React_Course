import React from "react";

const ToDoListItem = ({ name, isDone, id, changeHandler }) => {
  function handleClick() {
    changeHandler(id);
  }

  return (
    <div style={{ border: "1px solid black", margin: "10px 0" }}>
      <h2>{name}</h2>
      <p>{isDone ? "done" : "unfinished"}</p>
      <button onClick={handleClick}>change finished state</button>
    </div>
  );
};

export default ToDoListItem;
