import React, { useEffect, useState, useMemo } from 'react';

import { Select } from 'antd'
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
} from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';
import { particleConfMap, particleConfOpt } from './util';

import styles from './index.less';

const ParticleDemo = () => {
  const [init, setInit] = useState(false);
  const [curKey, setCurKey] = useState(particleConfOpt[0].value);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(container);
  };

  const options = useMemo(() => particleConfMap[curKey], [curKey]);

  if (init) {
    return (
      <div className={styles.container}>
        <Particles
          className={styles.particle}
          id='tsparticles'
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className={styles.select}>
          <Select
            popupClassName={styles.selectPopup}
            defaultValue={curKey}
            style={{
              width: 120,
            }}
            onChange={(value) => setCurKey(value)}
            options={particleConfOpt}
          />
        </div>
      </div>
    );
  }

  return <></>;
};


export default ParticleDemo;
