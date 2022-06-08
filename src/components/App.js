import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListing] = useState([]);
  const [filterdItems, setFilteredItems] = useState("");
  const [sorted, setSorted] = useState(false);

  function handleFetchedListings(listingsArray) {
    setListing(listingsArray);
  }

  function handleSearchSubmit(searchInput) {
    setFilteredItems(searchInput);
  }

  const filteredItems = listings.filter((listing) =>
    listing.description.toLowerCase().includes(filterdItems.toLowerCase())
  );

  function handleDelete(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListing(updatedListings);
  }

function handleSort(val){
  setSorted(val)
}

if (sorted) {
  filteredItems.sort((a,b) => (a.location > b.location)? 1: -1)
}
  
  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit} sorted={sorted} onSortClick={handleSort}/>
      <ListingsContainer
        onFetchedListings={handleFetchedListings}
        listings={filteredItems}
        onDeleteButton={handleDelete}
      />
    </div>
  );
}

export default App;
