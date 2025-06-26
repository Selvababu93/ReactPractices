import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <div>
      {data && data.length ? (
        <ol>
          {data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
};

export default Suggestions;
