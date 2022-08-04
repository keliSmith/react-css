import React from 'react';
import styles from './index.less';

const Button = () => {
  return (
    <div className={styles.content}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <a href='#' style={{ '--clr': '#1e9bff' }}>
        <span>Button</span>
        <i></i>
      </a>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <a href='#' style={{ '--clr': '#6eff3e' }}>
        <span>Button</span>
        <i></i>
      </a>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <a href='#' style={{ '--clr': '#ff1867' }}>
        <span>Button</span>
        <i></i>
      </a>
    </div>
  )
};

export default Button;
