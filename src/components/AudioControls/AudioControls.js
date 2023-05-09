import React from 'react';
import './AudioControls.css';

const AudioControls = ({ onPlay, onPause, onStop, onVolumeChange }) => {
  return (
    <div className="AudioControls">
      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onStop}>Stop</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        onChange={(e) => onVolumeChange(e.target.value)}
      />
    </div>
  );
};

export default AudioControls;
