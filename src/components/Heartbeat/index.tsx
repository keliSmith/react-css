import React from 'react';
import styles from './index.less';

const Heartbeat = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrap}>
        <p>I Love you</p>
        <div className={styles['box-left']}></div>
        <div className={styles['box-right']}></div>
      </div>
      <div>
        <p>如果季节更替，树叶落地，银色满际</p>
        <p>没能走回原地，我再做个梦给你</p>
        <p>梦见我们相遇，没有话题，满眼笑意</p>
        <p>真的再见到你，再次拥抱你在怀里</p>
      </div>
    </div>
  )
};

export default Heartbeat;
