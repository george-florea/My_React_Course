import React, { useEffect, useState } from "react";

export default function House(props) {
  let [isLightOn, setIsLightOn] = useState(true);

  useEffect(() => {
    console.log("onMount");
  }, []);

  return (
    <div>
      
      <p>The light is {isLightOn ? "on" : "off"}</p>
      <button onClick={() => setIsLightOn((prevState) => !prevState)}>
        Toggle Light
      </button>
    </div>
  );
}

function HouseDoesNotRerender() {
  let isLightOn = true;

  return (
    <div>
      <p>The light is {isLightOn ? "on" : "off"}</p>
      <button
        onClick={() => {
          isLightOn = false;
        }}
      >
        Toggle Light
      </button>
    </div>
  );
}
