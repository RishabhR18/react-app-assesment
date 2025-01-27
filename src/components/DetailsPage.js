import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import dataJson from "../data.json";

const DetailsPage = () => {
  const { guid } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const selectedCard = dataJson.find((item) => item.guid === guid);
    setData(selectedCard);
  }, [guid]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details-page">
      <h1>{data.title}</h1>
      <p><strong>Company:</strong> {data.company}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>GUID:</strong> {data.guid}</p>
      {/* Add other details as needed */}
      <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
    </div>
  );
};

export default DetailsPage;
