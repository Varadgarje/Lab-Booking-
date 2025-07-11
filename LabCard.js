import React from 'react';

const LabCard = ({ lab, onSelect }) => (
  <div className="lab-card" onClick={onSelect}>
    <h2>{lab.name}</h2>
    <p>{lab.description}</p>
  </div>
);

export default LabCard;