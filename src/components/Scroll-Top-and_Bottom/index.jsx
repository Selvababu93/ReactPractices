import React, { useRef } from "react";
import useFetch from "../Use-Fetch";
import "./styles.css";

const ScrollToTopAndBottom = () => {
  const { data, fetchError, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ScrollToTopAndBottom-container">
      <h1>ScrollToTopAndBottom Demo</h1>
      <button onClick={handleScrollBottom}>Scroll to Bottom</button>
      {data
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
      <button onClick={handleScrollTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ScrollToTopAndBottom;
