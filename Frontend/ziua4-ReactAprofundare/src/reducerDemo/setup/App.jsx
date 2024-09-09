import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [people, setPeople] = useState([]);
  const [showModal, setShowModel] = useState(false);
  const [name, setName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setPeople((prevState) => [
        ...prevState,
        { id: new Date().getTime().toString(), name },
      ]);
      setShowModel(true);
      setName("");
    } else {
      setShowModel(true);
    }
  };

  return (
    <div>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
      {people.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  );
};

export default App;
