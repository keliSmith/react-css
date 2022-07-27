import React from 'react';
import avatar from '@/assets/avatar.png';
import styles from './index.less';

const MyCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img src={avatar} alt='加载失败' />
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <h2>Alina Smith<br/><span>Seniar UX/UI Desigin</span></h2>
            <div className={styles.data}>
              <h3>345<br/><span>Posts</span></h3>
              <h3>120k<br/><span>Email</span></h3>
              <h3>520<br/><span>Follower</span></h3>
            </div>
            <div className={styles.actionBtn}>
              <button>Follower</button>
              <button>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MyCard;
