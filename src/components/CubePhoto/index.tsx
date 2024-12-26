import React from 'react';
import classNames from 'classnames';
import BJ1 from './images/BJ-1.jpg';
import BJ2 from './images/BJ-2.jpg';
import BJ3 from './images/BJ-3.jpg';
import BJ4 from './images/BJ-4.jpg';
import BJ5 from './images/BJ-5.jpg';
import BJ6 from './images/BJ-6.jpg';

import styles from './index.less';

const cubePhoto = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={classNames(styles.wrap, styles['in-front'])}>
          <img src={BJ1} alt='加载失败' />
        </div>
        <div className={classNames(styles.wrap, styles['in-back'])}>
          <img src={BJ2} alt='加载失败' />
        </div>
        <div className={classNames(styles.wrap, styles['in-left'])}>
          <img src={BJ3} alt='加载失败' />
        </div>
        <div className={classNames(styles.wrap, styles['in-right'])}>
          <img src={BJ4} alt='加载失败' />
        </div>
        <div className={classNames(styles.wrap, styles['in-top'])}>
          <img src={BJ5} alt='加载失败' />
        </div>
        <div className={classNames(styles.wrap, styles['in-bottom'])}>
          <img src={BJ6} alt='加载失败' />
        </div>

        <div className={classNames(styles.out, styles['out-front'])}>
          <img src={BJ1} alt='加载失败' />
        </div>
        <div className={classNames(styles.out, styles['out-back'])}>
          <img src={BJ2} alt='加载失败' />
        </div>
        <div className={classNames(styles.out, styles['out-left'])}>
          <img src={BJ3} alt='加载失败' />
        </div>
        <div className={classNames(styles.out, styles['out-right'])}>
          <img src={BJ4} alt='加载失败' />
        </div>
        <div className={classNames(styles.out, styles['out-top'])}>
          <img src={BJ5} alt='加载失败' />
        </div>
        <div className={classNames(styles.out, styles['out-bottom'])}>
          <img src={BJ6} alt='加载失败' />
        </div>
      </div>
    </div>
  )
}

export default cubePhoto;
