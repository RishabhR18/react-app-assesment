import './App.css';


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import dataJson from "./data.json";

const App = () => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setData(dataJson);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleOpen = (card) => {
    window.location.href = `/details/${card.guid}`;
  };

  return (
    <div className="grid-container">
      {data.map((card) => (
        <div key={card._id} className="card">
          <div className="favorite-icon">
            <span
              className={favorites.includes(card._id) ? "favorite-active" : "favorite"}
              onClick={() => toggleFavorite(card._id)}
            >★</span>
          </div>
          <h2 className="card-title">{card.title}</h2>
          <p className="card-company">{card.company}</p>
          <div className="card-buttons">
            <button
              className="info-button"
              onClick={() => {
                setSelectedCard(card);
                setShowPopup(true);
              }}
            >Info</button>
            <button
              className="open-button"
              onClick={() => handleOpen(card)}
            >Open</button>
          </div>
        </div>
      ))}

      {showPopup && selectedCard && (
        <div className="popup-overlay">
          <div className="popup">
            <h3 className="popup-title">{selectedCard.title}</h3>
            <p>{selectedCard.description}</p>
            <button
              className="close-button"
              onClick={() => setShowPopup(false)}
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
