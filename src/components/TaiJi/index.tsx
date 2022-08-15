import React, { useEffect } from 'react';
import styles from './index.less';

interface TaiJiProps {
  /** 画布的尺寸 */
  size?: number;
  radius: number;
}
const TaiJi:React.FC<TaiJiProps> = (props) => {
  const {
    size = 600,
    radius:R = 150
  } = props;
  useEffect(() => {
    const canvas:HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = size;
    canvas.height = size * (2/3);

    // 绘制左右两边的半圆
    const radius = R;
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // 绘制右边的半圆
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0,0, radius, 270 * (Math.PI/180), 90 * (Math.PI/180));
    ctx.fill();

    // 绘制左边的半圆
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.arc(0,0, radius, 90 * (Math.PI/180), 270 * (Math.PI/180))
    ctx.fill();

    // 绘制上边的小圆
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0,-radius/2, radius/2, 0 * (Math.PI/180), 360 * (Math.PI/180));
    ctx.fill();

    // 绘制下边的小圆
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.arc(0,radius/2, radius/2, 0 * (Math.PI/180), 360 * (Math.PI/180));
    ctx.fill()

    // 绘制上方黑色的小圆点
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.arc(0,-radius/2, radius/10, 0 * (Math.PI/180), 360 * (Math.PI/180));
    ctx.fill();

    // 绘制下方黑色的小圆点
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0,radius/2, radius/10, 0 * (Math.PI/180), 360 * (Math.PI/180));
    ctx.fill()

  })
  return (
    <div className={styles.content}>
      <canvas id='canvas' style={{ 'backgroundColor': 'honeydew' }}></canvas>
    </div>
  )
};

export default TaiJi;
