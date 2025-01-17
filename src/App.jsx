import React, { useState } from 'react';
import './App.css'; // Optional styling

function App() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];
  const [bgColor, setBgColor] = useState(colors[0]); // Initial background color
  const [index, setIndex] = useState(0); // Index to track current color
  const [isForward, setIsForward] = useState(true); // Direction toggle

  const changeBackgroundColor = () => {
    let newIndex;
    if (isForward) {
      newIndex = (index + 1) % colors.length; // Forward cycling
    } else {
      newIndex = (index - 1 + colors.length) % colors.length; // Backward cycling
    }
    setIndex(newIndex);
    setBgColor(colors[newIndex]);
  };

  const toggleDirection = () => {
    setIsForward(!isForward); // Toggle the direction
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
        transition: 'background-color 0.5s ease',
      }}
    >
      <button
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          marginBottom: '10px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#000',
          color: '#fff',
        }}
        onClick={changeBackgroundColor}
      >
        Change Background Color
      </button>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#333',
          color: '#fff',
        }}
        onClick={toggleDirection}
      >
        Toggle Direction (Current: {isForward ? 'Forward' : 'Reverse'})
      </button>
    </div>
  );
}

export default App;
