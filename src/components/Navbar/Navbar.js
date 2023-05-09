import React from 'react';
import './Navbar.css';

const Navbar = ({ onAddAudioSource }) => {
  const handleAddAudioSource = () => {
    // You can customize this function to handle adding audio sources
    // For example, you can show a modal to select audio files and their initial position
    const audioFile = '/assets/audio/sample1.mp3';
    const position = { x: 0, y: 0, z: 0 };
    onAddAudioSource(audioFile, position);
  };

  return (
    <div className="Navbar">
      <h1>My Audio App</h1>
      <button onClick={handleAddAudioSource}>Add Audio Source</button>
    </div>
  );
};

export default Navbar;
