import React, { useRef, useEffect } from 'react';

const AudioSource = ({ position, audioFile }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const source = audioContext.createBufferSource();

    fetch(audioFile)
      .then((response) => response.arrayBuffer())
      .then((data) => audioContext.decodeAudioData(data))
      .then((buffer) => {
        source.buffer = buffer;
        source.loop = true;
        source.connect(audioContext.destination);
        source.start();
      })
      .catch((error) => console.error('Error loading audio file:', error));

    return () => {
      source.stop();
      source.disconnect();
      audioContext.close();
    };
  }, [audioRef, audioFile]);

  return (
    <div
      ref={audioRef}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: position.z,
      }}
    ></div>
  );
};

export default AudioSource;
