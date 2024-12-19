import React, { ReactNode } from 'react';
import HTMLFlipBook from 'react-pageflip';
import bookBg from '@/assets/imgs/bookBg.jpg';

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

const Page = React.forwardRef((props: {number: number, children: ReactNode}, ref: any) => {
  return (
    <div className='page' ref={ref}>
      <div className='page-content'>
        <h2 className='page-header'>Page header - {props.number}</h2>
        <div className='page-text'>{props.children}</div>
        <div className='page-footer'>{props.number + 1}</div>
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

  // componentDidMount() {
  //   this.setState({
  //     totalPage: this.flipBook.getPageFlip().getPageCount(),
  //   });
  // }

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
          <Page number={1}>
            <div>
              <h1>很开心我们出现在彼此的生命里</h1>
              <div>
                <p>很开心我们出现在彼此的生命里</p>
                <p>成为彼此很重要的人</p>
                <p>离不开也不想离开的人</p>
                <p>虽然我不是那个一直暖心的人</p>
                <p>也会有闹脾气和不理解</p>
                <p>但我希望我在你的眼里</p>
                <p>依然是很好的那个</p>
              </div>
            </div>
          </Page>
          <Page number={2}>Lorem ipsum...</Page>
          <Page number={3}>Lorem ipsum...</Page>
          <Page number={4}>Lorem ipsum...</Page>
          <PageCover className='page-cover-bottom'>THE END</PageCover>
        </HTMLFlipBook>
      </div>
    );
  }
}

export default LoveBook;


// https://codesandbox.io/p/sandbox/fan-shu-te-xiao-rtwr2q?file=%2Fsrc%2FApp.jsx%3A8%2C9-8%2C16
