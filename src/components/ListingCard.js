import React, { useState } from "react";

function ListingCard({ listing, onDeleteButton }) {
  const { description, image, location, id } = listing;

  const [favorite, setFavorite] = useState(false);

function handleDelete(){
  fetch(`http://localhost:6001/listings/${id}`,{
    method: 'DELETE'
  }).then(onDeleteButton(id))
}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={() => setFavorite(!favorite)}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={() => setFavorite(!favorite)}
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
