import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onClickLike, onClickDelete }) {

  const toyCards = toys.map(toy => (
    <ToyCard 
      key={toy.id}
      toy={toy}
      onClickLike={onClickLike}
      onClickDelete={onClickDelete}
    />
  ))

  return (
    <div id="toy-collection">{toyCards}</div>
  );

}

export default ToyContainer;
