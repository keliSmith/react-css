import React from 'react';
import styles from './index.less';

const HoverLoad = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span style={{ zIndex: 9, animationDelay: '9s' }}></span>
        <span style={{ zIndex: 8, animationDelay: '8s' }}></span>
        <span style={{ zIndex: 7, animationDelay: '7s' }}></span>
        <span style={{ zIndex: 6, animationDelay: '6s' }}></span>
        <span style={{ zIndex: 5, animationDelay: '5s' }}></span>
        <span style={{ zIndex: 4, animationDelay: '4s' }}></span>
        <span style={{ zIndex: 3, animationDelay: '3s' }}></span>
        <span style={{ zIndex: 2, animationDelay: '2s' }}></span>
        <span style={{ zIndex: 1, animationDelay: '1s' }}></span>
        <span style={{ zIndex: 0, animationDelay: '0s' }}></span>
      </div>
    </div>
  )
}

export default HoverLoad;
