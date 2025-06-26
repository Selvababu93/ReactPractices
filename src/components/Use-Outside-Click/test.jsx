import React, { useRef, useState } from "react";
import useOutsideClick from ".";
import "./styles.css";

const UseOnclickOutSideTest = () => {
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="UseOnclickOutSideTest-container">
      {showContent ? (
        <div ref={ref}>
          Content Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Saepe perspiciatis corporis aliquid, officiis quidem rerum eligendi
          laboriosam maiores recusandae cum expedita quaerat pariatur,
          consequatur veritatis fugiat vel earum necessitatibus voluptatibus
          assumenda quos vitae architecto non delectus optio. Quaerat ducimus
          accusantium reiciendis ipsam dolore minus molestias provident quos
          eos, aut tempora.
          <div style={{ color: "red" }}>
            if you click outside of this content this content will hide
          </div>
        </div>
      ) : (
        <button onClick={() => setShowContent(!showContent)}>
          Show Content
        </button>
      )}
    </div>
  );
};

export default UseOnclickOutSideTest;
