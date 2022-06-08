import React, { useState } from "react";

function Search({ onSearchSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearchSubmit(search);
    setSearch("")
  }

  const [search, setSearch] = useState("");

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearch(value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
