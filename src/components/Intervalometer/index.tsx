import React, { useState, useEffect, ReactNode } from 'react';
import styles from './index.less';

interface Iprops {
  /** 是否开始定时器 */
  isRuning: boolean;
  children?: ReactNode;
}
const Intervalometer:React.FC<Iprops> = ({ isRuning, children }) => {
  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    let timer:any;
    if (isRuning) {
      timer = setTimeout(() => {
        setNum(num + 1);
      }, 500);
    }
    return () => { clearTimeout(timer) };
  }, [num, isRuning]);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.num}>{num}</div>
        {children}
      </div>
    </div>
  )
}

export default Intervalometer;
