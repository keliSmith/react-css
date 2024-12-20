import React, { ReactNode } from 'react';
import HTMLFlipBook from 'react-pageflip';
import bookBg from '@/assets/imgs/bookBg.jpg';
import lover from '@/assets/imgs/lover.png';
import lover1 from '@/assets/imgs/lover1.png';
import bookBefore from '@/assets/imgs/bookBefore.png';
import bookEnd from '@/assets/imgs/bookEnd.png';
import rose1 from '@/assets/imgs/rose1.png';
import rose2 from '@/assets/imgs/rose2.png';
import rose3 from '@/assets/imgs/rose3.png';
import rose4 from '@/assets/imgs/rose4.png';
import rose5 from '@/assets/imgs/rose5.png';
import { bookContents } from './config'

import  './index.css';

const PageCover = React.forwardRef((props: {children: ReactNode, className: string}, ref: any) => {
  return (
    <div className={`${props.className} page page-cover`} ref={ref} data-density='hard'>
      {props.children}
    </div>
  );
});
interface ITextObj {
  title: string,
  content: Array<string>,
  img?: string
}

const Page = React.forwardRef((props: {number: number, textObj: ITextObj,  children?: ReactNode}, ref: any) => {
  const { number, textObj } = props
  const roses = [rose1, rose2, rose3, rose4, rose5]
  return (
    <div className='page' ref={ref}>
      <div className='page-content'>
        <h2 className='page-header'></h2>
        <div className='page-main'>
          <div className='text'>
            <h1>{textObj.title}</h1>
            {
              textObj.content.map(text => <p key={text}>{text}</p>)
            }
          </div>
          <img src={textObj.img || roses[Math.floor(number/2)]} alt='加载失败' />
          { props.children }
        </div>
        <div className='page-footer'>{number}</div>
      </div>
    </div>
  );
});

PageCover.displayName = 'PageCover';

Page.displayName = 'Page';

class LoveBook extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  onFlip = (e: any) => {
    this.setState({
      page: e.data,
    });
  };

  render() {
    return (
      <div className='container'>
        <HTMLFlipBook
          className='book'
          style={{ backgroundImage: `url(${bookBg})` }}
          width={550}
          height={733}
          size='fixed'
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          drawShadow={true} // 翻页时是否绘制阴影
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onFlip}
        >

          <PageCover className='page-cover-top'>
            <div className='cover-img'>
              <img src={lover} alt='加载失败' />
            </div>
            <div className='cover-desc'>
              <h1>很高兴遇见你，谢谢你来爱我</h1>
              <p>欢欢 ❤️ 朱朱</p>
              <img src={bookBefore} alt='加载失败' />
              <span>遇见你是所有故事的开始，谨以此书献给我唯一的读者</span>
            </div>
          </PageCover>
          {
            bookContents.map((item, index) => {
              return <Page number={index + 1} key={index} textObj={item}></Page>
            })
          }
          <PageCover className='page-cover-bottom'>
            <div className='cover-img'>
              <img src={lover1} alt='加载失败' />
            </div>
            <div className='cover-desc'>
              <h1>往后余生，唯独是你</h1>
              <img src={bookEnd} alt='加载失败' />
              <span>我能想到最浪漫的事，就是把对你的爱写进书里</span>
            </div>
          </PageCover>
        </HTMLFlipBook>
      </div>
    );
  }
}

export default LoveBook;


// https://codesandbox.io/p/sandbox/fan-shu-te-xiao-rtwr2q?file=%2Fsrc%2FApp.jsx%3A8%2C9-8%2C16
