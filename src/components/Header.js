import React from "react";
import Search from "./Search";

function Header({ onSearchSubmit, sorted, onSortClick }) {
  function handleClick() {
    onSortClick(!sorted);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} />
      <button onClick={handleClick}>{sorted ? "Sort!" : "Unsort!"}</button>
    </header>
  );
}

export default Header;
