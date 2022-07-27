import React, { useState } from 'react';
import styles from './index.less';
import {
  AppleOutlined,
  DingdingOutlined,
  TwitterOutlined,
  CodepenCircleOutlined,
  SketchOutlined,
  AmazonOutlined,
  DropboxOutlined
} from '@ant-design/icons';
import classNames from 'classnames';
import avatar from '@/assets/avatar.png';

const AvatarInfo = () => {
  const [visible, setVisible] = useState(false);
  const handleClickAvatar = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.action}>
        <div className={styles.profile} onClick={handleClickAvatar}>
          <img src={avatar} alt='加载失败' />
        </div>
        <div className={classNames(styles.menu, { [styles.active]: visible })}>
          <h3>Smone Famous<br/><span>Websit Designer</span></h3>
          <ul>
            <li><AppleOutlined/><span>AppleOutlined</span></li>
            <li><DingdingOutlined/><span>DingdingOutlined</span></li>
            <li><TwitterOutlined/><span>TwitterOutlined</span></li>
            <li><CodepenCircleOutlined /><span>CodepenCircleOutlined</span></li>
            <li><SketchOutlined/><span>SketchOutlined</span></li>
            <li><AmazonOutlined/><span>AmazonOutlined</span></li>
            <li><DropboxOutlined/><span>DropboxOutlined</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AvatarInfo;
