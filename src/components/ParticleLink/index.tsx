import React, { useEffect, useState, useMemo } from 'react';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import styles from './index.less';

const ParticleLink = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 80,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#FF5A86', '#953AFE', '#FFC326', '#46C0FF'],
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 7,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 85,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        className={styles.container}
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;

  // return (
  //   <div className={styles.container}>
  //     <Particles
  //       id='tsparticles'
  //       particlesLoaded={particlesLoaded}
  //       loaded={particlesLoaded}
  //       options={{
  //         background: {
  //           color: {
  //             value: '#000',
  //           },
  //         },
  //         fullScreen: {
  //           enable: true,
  //           zIndex: 0,
  //         },
  //         fpsLimit: 100,
  //         interactivity: {
  //           events: {
  //             onClick: {
  //               enable: true,
  //               mode: 'push',
  //             },
  //             onHover: {
  //               enable: true,
  //               mode: 'repulse',
  //             },
  //             resize: true,
  //           },
  //           modes: {
  //             push: {
  //               quantity: 5,
  //             },
  //             repulse: {
  //               distance: 200,
  //               duration: 0.4,
  //             },
  //           },
  //         },
  //         particles: {
  //           color: {
  //             value: ['#FF5A86', '#953AFE', '#FFC326', '#46C0FF'],
  //           },
  //           links: {
  //             color: '#ffffff',
  //             distance: 150,
  //             enable: true,
  //             opacity: 0.5,
  //             width: 1,
  //           },
  //           collisions: {
  //             enable: true,
  //           },
  //           move: {
  //             direction: 'none',
  //             enable: true,
  //             outModes: {
  //               default: 'bounce',
  //             },
  //             random: false,
  //             speed: 7,
  //             straight: false,
  //           },
  //           number: {
  //             density: {
  //               enable: true,
  //               area: 800,
  //             },
  //             value: 85,
  //           },
  //           opacity: {
  //             value: 0.5,
  //           },
  //           shape: {
  //             type: 'circle',
  //           },
  //           size: {
  //             value: { min: 1, max: 4 },
  //           },
  //         },
  //         detectRetina: true,
  //       }}
  //     />
  //   </div>
  // );
};


export default ParticleLink;
