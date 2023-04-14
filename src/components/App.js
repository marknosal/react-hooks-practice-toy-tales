import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(data => setToys(data))
  }, [])

  function handleAddNewToy(newToy) {
    setToys([
      ...toys,
      newToy,
    ])
  }

  function handleDeleteToy(id) {
    const updatedToys = toys.filter(toy => {
      return toy.id !== id ? toy : null
    })
    setToys(updatedToys)
  }

  function handleLike(likedToy) {
    setToys(toys.map(toy => {
      if(toy.id === likedToy.id) {
        return likedToy
      } else {
        return toy
      }
    }))
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={handleAddNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy} onLike={handleLike} />
    </>
  );
}

export default App;
