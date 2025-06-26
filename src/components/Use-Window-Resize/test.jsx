import React from "react";
import useWindowResize from ".";

const UseWindowResizeTest = () => {
  const { width, height } = useWindowResize();
  return (
    <div>
      <h1>UseWindowResize Hook Demo</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
