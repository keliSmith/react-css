import React from 'react';
import { NavLink } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons'
import ParticleLink from '@/components/ParticleLink'
import favicon from '@/assets/favicon.png'
import styles from './index.less';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <img src={favicon} alt='加载失败' />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.personalInfo}>
          <div className={styles.name}>KeLi - 科力</div>
          <div className={styles.job}>前端爱好者</div>
          <div className={styles.actionBtn}>
            <NavLink to='cardList'>
                Get in Touch
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.setting}>
        <SettingOutlined />
      </div>
      <ParticleLink></ParticleLink>
    </div>
  );
}

export default Home;
