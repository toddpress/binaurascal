import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import AudioSource from '../AudioSource/AudioSource';

const ThreeDimensionalSpace = ({ audioSources }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const controls = new OrbitControls(camera, renderer.domElement);

    const gridHelper = new THREE.GridHelper(100, 100);
    scene.add(gridHelper);

    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      scene.dispose();
      controls.dispose();
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {audioSources.map((source, index) => (
        <AudioSource key={index} position={source.position} audioFile={source.audioFile} />
      ))}
    </div>
  );
};

export default ThreeDimensionalSpace;
