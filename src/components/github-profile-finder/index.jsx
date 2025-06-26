import React, { useEffect, useState } from "react";
import User from "./User";
import "./styles.css";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("selvababu93");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const fetchGithubUsername = async () => {
    try {
      setLoading(true);
      setFetchError(null);
      const token = import.meta.env.VITE_GITHUB_TOKEN;

      const response = await fetch(`https://api.github.com/users/${userName}`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });
      const result = await response.json();

      if (result && !result.message?.includes("rate limit")) {
        console.log(result);
        setUserData(result);
      } else {
        throw new Error(result.message);
      }

      setLoading(false);
    } catch (error) {
      console.log("Fetch error:", error.message);
      setFetchError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubUsername();
  }, []);

  const handleSubmit = () => {
    fetchGithubUsername();
  };
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>
        {loading && <div>Loading...</div>}
        {fetchError && <div>Error : {fetchError}</div>}
        {userData && <User userData={userData} />}
      </div>
    </div>
  );
};

export default GithubProfileFinder;
