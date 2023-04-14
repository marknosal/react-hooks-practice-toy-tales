import React, { useState } from "react";

function ToyForm({ onAddNewToy }) {
  const [newToyInfo, setNewToyInfo] = useState({
    name: '',
    image: '',
  })

  function handleSubmit(event) {
    event.preventDefault()

    const newToy = {
      ...newToyInfo,
      likes: 0,
    }

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newToy)
    })
      .then(response => response.json())
      .then(data => onAddNewToy(data))


    setNewToyInfo({
      name: '',
      image: '',
    })

  }

  function handleChange(event) {
    setNewToyInfo({
      ...newToyInfo,
      [event.target.name] : event.target.value,
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          value={newToyInfo.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          value={newToyInfo.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
