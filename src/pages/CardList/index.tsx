import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import styles from './index.less';

const routerConfit = [
  {
    id: 1,
    name: 'Card',
    path: 'card',
  },
  {
    id: 2,
    name: 'DigitalClock',
    path: 'digitalClock'
  },
  {
    id: 3,
    name: 'HoverLoad',
    path: 'hoverLoad'
  },
  {
    id: 4,
    name: 'MyCard',
    path: 'myCard'
  },
  {
    id: 5,
    name: 'AvatarInfo',
    path: 'avatarInfo'
  },
  {
    id: 6,
    name: 'CubeCraze',
    path: 'cubeCraze'
  },
  {
    id: 7,
    name: 'FadeInOut',
    path: 'fadeInOut'
  },
  {
    id: 8,
    name: 'Loading',
    path: 'loading'
  },
  {
    id: 9,
    name: 'AvatarBadge',
    path: 'avatarBadge'
  },
  {
    id: 10,
    name: 'Button',
    path: 'button'
  },
  {
    id: 11,
    name: 'Button1',
    path: 'button1'
  },
  {
    id: 12,
    name: 'LoginPopup',
    path: 'loginPopup'
  },
  {
    id: 13,
    name: 'UserCard',
    path: 'userCard'
  },
  {
    id: 14,
    name: 'TypingScale',
    path: 'typingScale'
  },
  {
    id: 15,
    name: 'Progress',
    path: 'progress'
  },
  {
    id: 16,
    name: 'TaiJi',
    path: 'taiJi'
  },
  {
    id: 17,
    name: 'ScrollAnimate',
    path: 'ScrollAnimate'
  },
  {
    id: 18,
    name: 'Intervalometer',
    path: 'Intervalometer'
  },
  {
    id: 19,
    name: 'Heartbeat',
    path: 'Heartbeat'
  },
  {
    id: 20,
    name: 'HeartScene',
    path: 'HeartScene'
  },
  {
    id: 21,
    name: 'WallPhoto',
    path: 'WallPhoto'
  },
]

function CardList() {
  const renderMenus = routerConfit.map(router =>
    <li key={router.id}>
      <NavLink
        to={router.path}
        className={({ isActive }) =>
          isActive ? styles.active : ''
        }
      >
        {router.name}
      </NavLink>
    </li>
  );

  return (
    <div className={styles.cardList}>
      <div className={styles.header}>
        <h3>css动效小课堂</h3>
        <span>
          <NavLink to='/'><HomeOutlined style={{ color: '#000' }} /></NavLink>
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.menu}>
          <ul>{renderMenus}</ul>
        </div>
        <div className={styles.content}><Outlet /></div>
      </div>
    </div>
  );
}

export default CardList;

// https://www.bootstrapmb.com/tag/aiqing
// https://www.17sucai.com/pins/tag/4030.html
