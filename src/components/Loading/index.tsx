import React from 'react';
import styles from './index.less';

export const Loading = () => {
  const renderPoints = () => {
    const pointArr = new Array(20).fill(1);
    return pointArr.map((_item, index) => (
      <span
        key={index}
        data-i={index + 1}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={{ '--i': index + 1 }}
      >
      </span>
    ))
  };
  return (
    <div className={styles.content}>
      <div className={styles.loader}>
        {renderPoints()}
      </div>
    </div>
  )
};
