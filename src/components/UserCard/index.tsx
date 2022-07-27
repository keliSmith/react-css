import React from "react";
import styles from './index.less';
import {
  TwitterOutlined,
  WechatOutlined,
  AlipayCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';

const renderCard = (avatar: string) => (
  <div className={styles.card}>
    <div className={styles.imgBox}>
      <img src={avatar} alt='加载失败' />
    </div>
    <div className={styles.detail}>
      <h2>Keli Wang<br /><span>Study Learn Design</span></h2>
      <ul>
        <li><TwitterOutlined /></li>
        <li><WechatOutlined /></li>
        <li><AlipayCircleOutlined /></li>
        <li><WeiboCircleOutlined /></li>
      </ul>
    </div>
  </div>
)

const UserCard = () => {
  const cards = [
    { avatar: 'https://www.yisou.art/uploads/d772926c51a4e12616255829d4ff8cc3.jpg' },
    { avatar: 'https://www.yisou.art/uploads/f207c7d722a7845b06487d6edf60a7d1.jpg' },
    { avatar: 'https://www.yisou.art/uploads/cd053bf9e132033213b96e4b6d39f255.jpg' },
    { avatar: 'https://www.yisou.art/uploads/606ce6e8c773ad1da8c28f7536e91470.jpg' },
    { avatar: 'https://www.yisou.art/uploads/b883f94b13cb748cd9569f0f478860f0.jpg' },
    { avatar: 'https://www.yisou.art/uploads/2f6c05308c017785a25a7fd6113f0286.jpg' },
  ];
  return (
    <div className={styles.content}>
      { cards.map(item => renderCard(item.avatar)) }
    </div>
  )
};

export default UserCard;
