import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AudioWorkspace from './components/AudioWorkspace/AudioWorkspace';

function App() {
  const [audioSources, setAudioSources] = useState([]);

  const addAudioSource = (audioFile, position) => {
    setAudioSources((prevSources) => [
      ...prevSources,
      {
        audioFile,
        position,
      },
    ]);
  };

  return (
    <div className="App">
      <Navbar onAddAudioSource={addAudioSource} />
      <AudioWorkspace audioSources={audioSources} />
    </div>
  );
}

export default App;
