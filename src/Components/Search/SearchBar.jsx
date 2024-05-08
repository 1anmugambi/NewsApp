import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    //API to fetch the news on searchTerm
    fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=877963a15492486ca2a85b2c521d2894`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
  };

  const styles = {
    form: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "1rem",
    },
    input: {
      flex: "1",
      padding: "0.5rem",
      fontSize: "1rem",
      borderRadius: "0.55rem"
    },
    button: {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
    },
  };

  return (
    <form onSubmit={handleSearchSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Search for news..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.input}
      />
      <button style={styles.button} type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
