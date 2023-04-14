import React from "react";

function ToyCard({ toy, onDeleteToy, onLike }) {
  const { id, name, image, likes } = toy

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => onDeleteToy(id))
  }

  function handleLikeClick() {
    const likedToy = {
      ...toy,
      likes: toy.likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likedToy)
    })
      .then(response => response.json())
      .then(data => onLike(data))
  }

  return (
    <div className="card" id={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
