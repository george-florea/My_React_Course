import React, { useReducer, useState } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  if (action.type == "NEW_PERSON") {
    return {
      showModal: true,
      modalContent: "added successfully",
      people: [
        ...state.people,
        { id: new Date().getTime().toString(), name: action.payload.name },
      ],
    };
  }
  if (action.type == "ERROR") {
    return {
      ...state,
      showModal: true,
      modalContent: "field required",
    };
  }
};

const initialState = {
  showModal: false,
  modalContent: "hello world",
  people: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "NEW_PERSON", payload: { name } });
      setName("");
    } else {
      dispatch({ type: "ERROR" });
    }
  };

  return (
    <div>
      {state.showModal && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
      {state.people.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  );
};

export default App;
