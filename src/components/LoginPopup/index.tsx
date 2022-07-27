import React, { useState } from  'react';
import styles from './index.less';
import classNames from 'classnames';

export const LoginPopup = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.content}>
      <a className={styles.button} onClick={() => setVisible(true)}>Subscribe Us</a>
      <div
        className={classNames(styles.popup, {
          [styles.activePopup]: visible
        })}
      >
        <div>WO SHI POPUP</div>
        <p onClick={() => setVisible(false)}>关闭</p>
      </div>
    </div>
  )
};
