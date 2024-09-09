import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
import NewToDo from "./NewToDo";

const initialState = {
  1: {
    id: 1,
    name: "do dishes",
    isDone: false,
  },
  2: {
    id: 2,
    name: "do homework",
    isDone: false,
  },
  3: {
    id: 3,
    name: "learn react",
    isDone: false,
  },
};
const List = () => {
  const [toDoList, setToDoList] = useState(initialState);

  const handleChange = (id) => {
    setToDoList({
      ...toDoList,
      [id]: {
        ...toDoList[id],
        isDone: !toDoList[id].isDone,
      },
    });
  };

  const addHandler = (newObj) => {
    setToDoList({
      
      [newObj.id]: newObj,
      ...toDoList,
    });
  };

  return (
    <div>
      <NewToDo  addHandlerFunction={addHandler} nextId={Object.values(toDoList).length +1} />
      {Object.values(toDoList).map((el) => (
        <ToDoListItem
          key={el.id}
          name={el.name}
          isDone={el.isDone}
          id={el.id}
          changeHandler={handleChange}
        />
      ))}
    </div>
  );
};

export default List;
