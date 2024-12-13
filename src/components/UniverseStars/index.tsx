import React, { useEffect } from 'react';
import { initUniverse, initMeteorRain } from './util'
import styles from './index.less';

const UniverseStars = () => {
  // const universeCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // const universeCanvas = universeCanvasRef.current
    // if (universeCanvas === null)  return;
    // const universeCtx = universeCanvas.getContext('2d')
    // initUniverse();
    initMeteorRain();
    window.onresize = () => {
      // initUniverse();
      initMeteorRain();
    }
  }, []);

  return (
    <div className={styles.container}>
      <canvas id='universeCanvas'></canvas>
      <canvas id='meteorRainCanvas'></canvas>
    </div>
  );
};


export default UniverseStars;
