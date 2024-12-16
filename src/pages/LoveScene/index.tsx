import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import UniverseStars from '@/components/UniverseStars'

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
]

function LoveScene() {
  // const renderMenus = routerConfit.map(router =>
  //   <li key={router.id}>
  //     <NavLink
  //       to={router.path}
  //       className={({ isActive }) =>
  //         isActive ? styles.active : ''
  //       }
  //     >
  //       {router.name}
  //     </NavLink>
  //   </li>
  // );

  return (
    <div className={styles.container}>
      <UniverseStars></UniverseStars>
    </div>
  );
}

export default LoveScene;
