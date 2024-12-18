import React, { ReactNode } from 'react';
import HTMLFlipBook from 'react-pageflip';
import bookBg from '@/assets/bookBg.jpg';

import styles from  './index.less';
import classNames from 'classnames';

const PageCover = React.forwardRef((props: {children: ReactNode}, ref: any) => {
  return (
    <div className={classNames(styles['page-cover'], styles['page-cover-top'], styles['page-cover-bottom'], styles.left, styles.right)} ref={ref} data-density='hard'>
      <div className={styles['page-content']}>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props: {number: number, children: ReactNode}, ref: any) => {
  return (
    <div className={classNames(styles.page)} ref={ref}>
      <div className={styles['page-content']}>
        <h2 className={styles['page-header']}>Page header - {props.number}</h2>
        <div className={styles['page-image']}></div>
        <div className={styles['page-text']}>{props.children}</div>
        <div className={styles['page-footer']}>{props.number + 1}</div>
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
      <div className={styles.container}>
        <HTMLFlipBook
          className={classNames(styles.book, styles['flip-book'])}
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

          <PageCover>BOOK TITLE</PageCover>
          <Page number={1}>Lorem ipsum...</Page>
          <Page number={2}>Lorem ipsum...</Page>
          <Page number={3}>Lorem ipsum...</Page>
          <Page number={4}>Lorem ipsum...</Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>
      </div>
    );
  }
}

export default LoveBook;


// https://codesandbox.io/p/sandbox/fan-shu-te-xiao-rtwr2q?file=%2Fsrc%2FApp.jsx%3A8%2C9-8%2C16
