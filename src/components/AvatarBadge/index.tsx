import React from 'react';
import styles from './index.less';

const AvatarBadge = () => {
  const text = 'Muhammd Irhad - Creative UX/UI Designer -';
  const renderChars = text.split('').map((chart, i) => (
    <span
      key={i}
      style={{ transform:`rotate(${i * 8.8}deg)` }}
    >
      {chart}
    </span>
  ));

  return (
    <div className={styles.content}>
      <div className={styles.circle}>
        <div className={styles.logo}></div>
        <div className={styles.text}>
          {renderChars}
        </div>
      </div>
    </div>
  )
};

export default AvatarBadge;
