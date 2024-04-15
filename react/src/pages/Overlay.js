// Overlay.js
import React from 'react';
import '../sass/pages/overlay.scss';

const Overlay = ({ onClose }) => {
  return (
    <div className="overlay">
      <p>This is the overlay content</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Overlay;



