import React from 'react';
import { NavLink } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons'
import styles from './index.less';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <img src='' alt='加载失败' />
          </div>
          <div className={styles.menu}>
            {/* <ul>{renderMenu()}</ul> */}
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
    </div>
  );
}

export default Home;
