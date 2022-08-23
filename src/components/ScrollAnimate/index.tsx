import React from 'react';
import styles from './index.less';

export const ScrollAnimate:React.FC = () => {
  const renderTextList = () => {
    const textArr = new Array(200).fill(
      '很多内容文本很多内容文本很多内容文本很多内容文本很多内容文本很多内容文本很多内容文本很多内容文本很多内容文'
    );

    return textArr.map(item => (
      <div key={item} className={styles.text}>{item}</div>
    ))
  }
  return (
    <div className={styles.content}>
      <div className={styles.header}>头部模块</div>
      <div className={styles.shadow}></div>
      <div className={styles.main}>
        {renderTextList()}
      </div>
    </div>
  )
}
