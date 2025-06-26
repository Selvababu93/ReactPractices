import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      setFetchError(null);
      const response = await fetch("https://dummyjson.com/users?limit=100");
      const result = await response.json();
      if (result.users) {
        setUsers(result.users.map((item) => item.firstName));
        setLoading(false);
        console.log(users);
      }
    } catch (error) {
      console.log(error.message);
      setFetchError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  const handleCHange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (event) => {
    console.log(event.target.innerText);
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  };

  console.log(filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data!</h1>
      ) : (
        <input
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleCHange}
        />
      )}
      {showDropDown ? (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      ) : null}
    </div>
  );
};

export default SearchAutoComplete;
