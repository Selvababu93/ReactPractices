import React, { useEffect, useState } from "react";
import "./styles.css";
const CustomScrollIndicator = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const limit = 100;
  const productUrl = `https://dummyjson.com/products?limit=${limit}`;

  const fetchProducts = async (dataUrl) => {
    try {
      setLoading(true);
      const response = await fetch(dataUrl);
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setProducts(result.products);
        setLoading(false);
      }
      //console.log(result.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setFetchError(error.message);
    }
  };

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
    console.log(scrollPercentage);
  };

  useEffect(() => {
    setTimeout(() => fetchProducts(productUrl), 1000);
  }, [limit]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {products && products.length > 0
          ? products.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default CustomScrollIndicator;
