import React, { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ onFetchedListings, listings, onDeleteButton }) {
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listingsObj) => onFetchedListings(listingsObj));
  }, []);

  const makeListingCards = listings.map((listing) => {
    return (
      <ListingCard
        listing={listing}
        key={listing.id}
        onDeleteButton={onDeleteButton}
      />
    );
  });

  return (
    <main>
      <ul className="cards">{makeListingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
