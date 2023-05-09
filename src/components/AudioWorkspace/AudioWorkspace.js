import React from 'react';
import './AudioWorkspace.css';
import ThreeDimensionalSpace from '../ThreeDimensionalSpace/ThreeDimensionalSpace';

const AudioWorkspace = ({ audioSources }) => {
  return (
    <div className="AudioWorkspace">
      <ThreeDimensionalSpace audioSources={audioSources} />
    </div>
  );
};

export default AudioWorkspace;
