import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("onMount");
  }, []);

  useEffect(() => {
    console.log("updated");
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
};

export default LifeCycle;
