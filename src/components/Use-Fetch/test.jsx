import React from "react";
import useFetch from ".";
import { PiKey } from "react-icons/pi";
import "./styles.css";

const UseFetchHookTest = () => {
  const { data, fetchError, loading } = useFetch(
    "https://dummyjson.com/products?limit=10",
    {}
  );

  return (
    <div className="useFetch-container">
      <h1>UseFetchHook Demo</h1>
      {loading && <h2>Loading...</h2>}
      {fetchError && <p>Error Occcured : {fetchError}</p>}
      {data
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
};

export default UseFetchHookTest;
