import React, { ReactNode } from 'react';
import HTMLFlipBook from 'react-pageflip';
import bookBg from '@/assets/imgs/bookBg.jpg';
import { bookContents } from './config'

import  './index.css';

const PageCover = React.forwardRef((props: {children: ReactNode, className: string}, ref: any) => {
  return (
    <div className={`${props.className} page page-cover`} ref={ref} data-density='hard'>
      <div className={'page-content'}>
        <h2>{props.children}</h2>
      </div>
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
          {
            textObj.img && <img src={textObj.img} alt='加载失败' />
          }
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

          <PageCover className='page-cover-top'>BOOK TITLE</PageCover>
          {
            bookContents.map((item, index) => {
              return <Page number={index + 1} key={index} textObj={item}></Page>
            })
          }
          <PageCover className='page-cover-bottom'>THE END</PageCover>
        </HTMLFlipBook>
      </div>
    );
  }
}

export default LoveBook;


// https://codesandbox.io/p/sandbox/fan-shu-te-xiao-rtwr2q?file=%2Fsrc%2FApp.jsx%3A8%2C9-8%2C16
