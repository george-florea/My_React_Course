import React, { useState } from "react";

const NewToDo = (props) => {
  const [toDo, setToDo] = useState("");
  function submitInList() {
    console.log(toDo);
    let newObj={
      id: props.nextId,
      name: toDo,
      isDone: false
    }
    props.addHandlerFunction(newObj);

  }
  return (
    <div>
      <input value={toDo} onChange={(e) => setToDo(e.target.value)}></input>
      <button onClick={submitInList}>adauga</button>
    </div>
  );
};

export default NewToDo;
