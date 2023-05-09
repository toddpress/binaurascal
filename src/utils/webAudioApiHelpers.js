export const createAudioContext = () => {
  return new (window.AudioContext || window.webkitAudioContext)();
};

export const loadAudioBuffer = async (audioContext, url) => {
  const response = await fetch(url);
  const data = await response.arrayBuffer();
  const buffer = await audioContext.decodeAudioData(data);
  return buffer;
};

// Add more utility functions for working with Web Audio API as needed
