import React, { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setLoading(false);
      setFetchError(false);
    } catch (error) {
      console.log(error.message);
      setFetchError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, fetchError, loading };
};

export default useFetch;
