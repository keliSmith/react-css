import React, { useEffect, useRef } from 'react';
import { writeContent, drawHeart, showTime } from './utils';
import classNames from 'classnames';
import avatar from '@/assets/imgs/avatar.png';

import styles from './index.less';

const HeartScene = () => {
  const flag = useRef(true);
  const textArr = [
    '我以为我这辈子不会有爱情了<br>',
    '直至你的到来，闯进了我的生活<br>',
    '用你的热情温暖了我冰冷的心，<br>',
    '让我知道恋爱原来是那么美好<br>',
    '真想和你一起慢慢变老.<br>',
    '十几年前我们认识，那是的你我似乎有点生疏<br>',
    '十几年后的我们再次相遇<br>',
    '这就是缘分吧，命运的安排让我再次走在了一起<br>',
    '所以我想我必须珍视这份来之不易的感情<br>',
    '一生守候不是一句简单而苍白的山盟海誓，<br>',
    '而是无数个平淡的日子同舟共济，相濡以沫.<br>',
    '相信右下角的计时器, 将永远继续下去, 直至数据溢出.<br>',
    '<br>',
    '----------------------- Just for You, zhuzhu<br>',
  ]
  useEffect(() => {
    if (flag.current === true) {
      flag.current = false;
      drawHeart();
      writeContent(0, textArr);
      setTimeout(() => {
        showTime()
      }, 40 * 1000)
    }
    return () => {
      writeContent(0, []);
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
