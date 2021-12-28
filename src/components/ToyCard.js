import React from "react";

function ToyCard({ toy, onClickLike, onClickDelete }) {

  const { name, image, likes, id } = toy

  function handleClickLike() {
    const updatedObj = {
      likes: likes + 1
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedObj)
    })
    .then(resp => resp.json())
    .then(onClickLike)
  }

  function handleClickDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(onClickDelete(toy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button 
        className="like-btn"
        onClick={handleClickLike}
      >Like {"<3"}</button>
      <button 
        className="del-btn"
        onClick={handleClickDelete}
      >Donate to GoodWill</button>
    </div>
  );

}

export default ToyCard;
