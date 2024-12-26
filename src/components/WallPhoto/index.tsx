import React, { useEffect, useState } from 'react';
import { Select } from 'antd'

import classNames from 'classnames';
import BJ1 from './images/BJ-1.jpg';
import BJ2 from './images/BJ-2.jpg';
import BJ3 from './images/BJ-3.jpg';
import BJ4 from './images/BJ-4.jpg';
import BJ5 from './images/BJ-5.jpg';
import BJ6 from './images/BJ-6.jpg';
import { mirrorPhoto3D } from './utils'
import styles from './index.less';

const RotePhoto = () => {
  return (
    <div className={styles.rotePhoto}>
      <div className={styles.wrapper}>
        <img src={BJ1} alt='加载失败' />
        <img src={BJ2} alt='加载失败' />
        <img src={BJ3} alt='加载失败' />
        <img src={BJ4} alt='加载失败' />
        <img src={BJ5} alt='加载失败' />
        <img src={BJ6} alt='加载失败' />
      </div>
    </div>
  )
}
const CubePhoto = () => {
  return (
    <div className={styles.cubePhoto}>
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
const MirrorPhoto = () => {
  useEffect(() => {
    const container = document.getElementById('mirrorPhoto') as HTMLElement
    mirrorPhoto3D(container, {
      isAutoPlay: true, // 是否自动轮播
      interTime: 1000, // 轮播时间,单位:ms
      rotateX: -20, // 初始沿x轴翻转角度,单位:deg
      rotateY: 0 // 初始沿y轴翻转角度,单位:deg
    })
  }, [])
  return (
    <div id='mirrorPhoto' className={styles.mirrorPhoto}>
      <div className={styles.wrapper}>
        <img src={BJ1} alt='加载失败' />
        <img src={BJ2} alt='加载失败' />
        <img src={BJ3} alt='加载失败' />
        <img src={BJ4} alt='加载失败' />
        <img src={BJ5} alt='加载失败' />
        <img src={BJ6} alt='加载失败' />
      </div>
    </div>
  )
}

const WallPhoto = () => {
  const modeOpts = [
    {
      label: '立方体',
      value: 'CubePhoto',
      component: <CubePhoto />,
    },
    {
      label: '旋转',
      value: 'RotePhoto',
      component: <RotePhoto />,
    },
    {
      label: '镜面',
      value: 'MirrorPhoto',
      component: <MirrorPhoto />,
    },
  ]
  const [mode, setMode] = useState(modeOpts[0].value)
  const curPhotoModeCp = modeOpts.find(item => item.value === mode)?.component
  return (
    <div className={styles.container}>
      { curPhotoModeCp }
      <div className={styles.select}>
        <Select
          popupClassName={styles.selectPopup}
          defaultValue={mode}
          style={{
            width: 120,
          }}
          onChange={(value) => setMode(value)}
          options={modeOpts}
        />
      </div>
    </div>
  )
}

export default WallPhoto;
