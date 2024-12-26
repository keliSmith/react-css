import React, { useEffect, useRef } from 'react';
import { writeContent, drawHeart, showTime } from './utils';
import classNames from 'classnames';
import avatar from '@/assets/imgs/avatar.png';

import styles from './index.less';

const HeartScene = () => {
  const flag = useRef(true);
  useEffect(() => {
    if (flag.current === true) {
      flag.current = false;
      drawHeart();
      writeContent(0);
      setTimeout(() => {
        showTime()
      }, 40 * 1000)
    }
  }, [])
  return (
    <div className={styles.content}>
      {/* 标题 */}
      <div id='header' className={styles.header}>
        <p id='title'>I Love You Forever</p>
      </div>

      {/* 打字效果 */}
      <div id='myContent' className={styles.myContent}>
        <span id='blink'>_</span>
      </div>

      {/* 照片墙 */}
      <div className={styles.roundabout}>
        <div className={styles.wrapper}>
          <div className={classNames(styles.wrap, styles['in-front'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.wrap, styles['in-back'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.wrap, styles['in-left'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.wrap, styles['in-right'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.wrap, styles['in-top'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.wrap, styles['in-bottom'])}>
            <img src={avatar} alt='加载失败' />
          </div>

          <div className={classNames(styles.out, styles['out-front'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.out, styles['out-back'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.out, styles['out-left'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.out, styles['out-right'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.out, styles['out-top'])}>
            <img src={avatar} alt='加载失败' />
          </div>
          <div className={classNames(styles.out, styles['out-bottom'])}>
            <img src={avatar} alt='加载失败' />
          </div>
        </div>
      </div>

      {/* 爱心背景 */}
      <div id='bg' className={styles.heart}>
        <canvas id='garden' width='1440' height='738'></canvas>
      </div>

      {/* 恋爱时间 */}
      <div id='time' className={styles.time}>
        <span id='show'></span>
      </div>
    </div>
  )
};

export default HeartScene;
