import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onLike }) {
  return (
    <div id="toy-collection">{toys.map(
      (toy) => {
        // console.log(toy)
        return  (
          <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onLike={onLike} />
        )
      }
    )}</div>
  );
}

export default ToyContainer;
