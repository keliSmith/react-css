import React, { useState, useRef } from 'react';
import { Input } from 'antd';
import type { InputRef } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

// 随机颜色
function Color(){
  const colorAngle = Math.floor(Math.random()*360);
  return 'hsla('+ colorAngle +',100%,50%,1)';
}

export const TypingScale = () => {
  const [textArr, setTextArr] = useState(['']);
  const [input, setInput] = useState(false);
  const [clr, setClr] = useState('red');
  const inputRef = useRef<InputRef>(null);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const letters = value.replace(/[^a-zA-Z]/g,'').split('');
    // if ((/[^\u4e00-\u9fa5]/g).test(value)) {
    //   alert('请输入英文字母');
    // }

    setTextArr(letters);
    setInput(true);
    setClr(Color());
  }

  return (
    <div className={styles.content}>
      <div
        className={styles.input}
        onClick={() => {
            inputRef.current!.focus({
              cursor: 'all',
            });
        }}
      >
        <div>
          <Input ref={inputRef} onChange={handleText} />
        </div>
        {
          textArr.map(item => (
            <span
              key={item}
              style={{ 'color': clr }}
              className={
                classNames({
                  [styles.printAnimate]: input
                })
              }
            >
              {item}
            </span>
          ))
        }
      </div>
    </div>
  )
};
