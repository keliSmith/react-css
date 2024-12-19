import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import ParticleLink from '@/components/ParticleLink'
import favicon from '@/assets/imgs/favicon.png'
import place from '@/assets/imgs/place.svg'
import place1 from '@/assets/imgs/place1.svg'
import snakeLight from '@/assets/imgs/snake-Light.svg'
import siteIcon from '@/assets/imgs/siteIcon.svg'
import projectIcon from '@/assets/imgs/projectIcon.svg'
import skillsIcon from '@/assets/imgs/skillsIcon.svg'
import skill from '@/assets/imgs/skill.svg'
import i1 from '@/assets/imgs/i1.png'
import i2 from '@/assets/imgs/i2.png'
import i3 from '@/assets/imgs/i3.png'
import xhs from '@/assets/imgs/xhs.png'
import yuque from '@/assets/imgs/yuque.png'
import github from  '@/assets/imgs/github.png'
import book from '@/assets/imgs/book.png'

import styles from './index.less';

function Home() {
  const hobbies = ['看动漫', '打游戏', '听音乐', '写代码', '骑行', '爬山']
  const timeLines = [
    {
      title: '2024',
      content: '🧱搬砖中...'
    },
    {
      title: '2023',
      content: '🧱 持续工作'
    },
    {
      title: '2022',
      content: '📱 开发移动端'
    },    {
      title: '2021',
      content: '💻 开发PC应用'
    },
    {
      title: '2020',
      content: '🧱 参加工作'
    },
    {
      title: '2019',
      content: '💻 开始学习前端'
    },
    {
      title: '2018',
      content: '🏠 大学毕业'
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={favicon} alt='加载失败' />
          </div>
          <div  className={classNames(styles.place, styles.leftDev)}>
            <p>
              <img src={place} alt='加载失败' />
              <span>China-ZheJiang</span>
            </p>
            <p>
              <img src={place1} alt='加载失败' />
              <span>HangZhou</span>
            </p>
          </div>
          <div className={classNames(styles.hobbies, styles.leftDev)}>
            {hobbies.map((item, index) => <span key={index}>{item}</span>)}
          </div>
          <div className={classNames(styles.time, styles.leftDev)}>
            <ul>
              {timeLines.map((item, index) => (
                <li key={index}>
                  <i></i>
                  <p>{item.content}</p>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className={styles.right}>
          <div className={styles.header}>
            <div className={styles.welcome}>
              <span>Hello I&apos;m KeLi</span>
            </div>
            <div className={styles.description}>
            👦 <span>Full Stack</span> Developer
            </div>
            <div className={styles.description}>
            📝 The only way to do <span>great</span> is
            to <span>love</span> what you do.
            </div>
            <div className='tanChiShe'>
              <img src={snakeLight} alt='加载失败' />
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.title}>
              <img src={siteIcon} alt='加载失败' />
              <span>Css Animation</span>
            </div>
            <div className={styles.projectList}>
              <NavLink to='cardList' className={styles.projectItem}>
                <div className={styles.projectItemLeft}>
                  <h1>CSS</h1>
                  <p>动效实现</p>
                </div>
                <div className={styles.projectItemRight}>
                  <img src={i1} alt='' />
                </div>
              </NavLink>
              <NavLink to='loveScene' className={styles.projectItem}>
                <div className={styles.projectItemLeft}>
                  <h1>表白</h1>
                  <p>真情流露</p>
                </div>
                <div className={styles.projectItemRight}>
                  <img src={i3} alt='' />
                </div>
              </NavLink>
              <NavLink to='particleScene' className={styles.projectItem}>
                <div className={styles.projectItemLeft}>
                  <h1>粒子实验室</h1>
                  <p>粒子动效实现</p>
                </div>
                <div className={styles.projectItemRight}>
                  <img src={i2} alt='' />
                </div>
              </NavLink>
              <a className={styles.projectItem}>
                <div className={styles.projectItemLeft}>
                  <h1>实验室</h1>
                  <p>收集有趣html作品</p>
                </div>
                <div className={styles.projectItemRight}>
                  <img src={i3} alt='' />
                </div>
              </a>
            </div>
            <div className={styles.title}>
              <img src={projectIcon} alt='加载失败' />
              <span>My Books</span>
            </div>
            <div className={styles.projectList}>
              <a className={styles.projectItem} target='_blank' href='https://github.com/keliSmith?tab=repositories' rel='noreferrer'>
                <div className={styles.projectItemLeft}>
                  <h1>Github</h1>
                  <p>记录日常Coding</p>
                </div>
                <div className={styles.projectItemRight}>
                  <img src={github} alt='加载失败' />
                </div>
              </a>
              <a
                className={styles.projectItem}
                target='_blank'
                href='https://www.xiaohongshu.com/user/profile/5fbdb6840000000001000f19' rel='noreferrer'
              >
                <div className={styles.projectItemLeft}>
                  <h1>小红书</h1>
                  <p>记录摆烂日常</p>
                </div>
                <div className={styles.projectItemRight}>
                  <img src={xhs} alt='' />
                </div>
              </a>
              <a className={styles.projectItem} target='_blank' href='https://www.yuque.com/keli007' rel='noreferrer'>
                <div className={styles.projectItemLeft}>
                  <h1>语雀</h1>
                  <p>记录前端技术</p>
                </div>
                <div className={styles.projectItemRight}>
                  <img src={yuque} alt='加载失败' />
                </div>
              </a>
              <NavLink to='loveBook' className={styles.projectItem}>
                <div className={styles.projectItemLeft}>
                  <h1>Love</h1>
                  <p>记录爱情语录</p>
                </div>
                <div className={styles.projectItemRight}>
                  <img src={book} alt='加载失败' />
                </div>
              </NavLink>
            </div>
            <div className={styles.title}>
              <img src={skillsIcon} alt='加载失败' />
              <span>Skills</span>
            </div>
            <div className={styles.skill}>
              <img src={skill} alt='' />
            </div>
          </div>
        </div>
      </div>

      <ParticleLink></ParticleLink>
    </div>
  );
}

export default Home;
