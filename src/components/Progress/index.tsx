import React, { useEffect } from 'react';
import styles from './index.less';

interface ProgressProps {
  /** 圆形进度大小 */
  radius?: number;
  /** 画布大小 */
  size?: number;
  /** 当前进度百分比，范围 0-100 */
  progress: number;
  speed?: number;
  /** 轨道颜色 */
  progressColor?: string;
  /** 轨道宽度 */
  progressWidth?: number;
  /** 进度条颜色 */
  orbitColor?: string | object;
  /** 进度条宽度 */
  orbitWidth?: number;
  className?: string;
  /** 文本颜色 */
  fontColor?: string;
}
export function isObj(x: unknown): x is Record<string, unknown> {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function format(rate: number) {
  return Math.min(Math.max(rate, 0), 100);
}
const Progress:React.FC<ProgressProps> = (props) => {
  const {
    progress,
    radius:R = 100,
    size = 500,
    speed:V = 0.1,
    progressColor = '#ccc',
    progressWidth = 10,
    orbitColor = 'red',
    orbitWidth = 10,
    fontColor = '#fff'
  } = props;

  useEffect(() => {
    const canvas:HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = canvas.height = size;
    const centerX = canvas.width/2;  // Canvas中心点x轴坐标
    const centerY = canvas.height/2; // Canvas中心点y轴坐标
    const rad = Math.PI*2/100; // 将360度分成100份，那么每一份就是rad度
    let speed = V; // 加载的快慢就靠它

    function gradientColor (color: any):CanvasGradient {
      const LinearColor = ctx.createLinearGradient(size, 0, 0, 0);
      Object.keys(color)
        .sort((a, b) => parseFloat(a) - parseFloat(b))
        .map((key) => LinearColor.addColorStop(
          parseFloat(key) / 100,
          color[key] as string
        ));
      return LinearColor;
    }

    // 绘制运动外圈
    function blueCircle(n: number){
      ctx.save();
      ctx.strokeStyle = isObj(orbitColor) ?
        gradientColor(orbitColor) : orbitColor as string; // 设置描边样式
      ctx.lineWidth = orbitWidth; // 设置线宽
      ctx.lineCap = 'round'; // 弧线结尾开头使用圆形
      ctx.beginPath(); // 路径开始
      // 用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
      ctx.arc(centerX, centerY, R , -Math.PI/2, -Math.PI/2 +n*rad, false);
      ctx.stroke(); // 绘制
      ctx.closePath(); // 路径结束
      ctx.restore();
    }
    // 绘制轨道外圈
    function whiteCircle(){
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = progressWidth; // 设置线宽
      ctx.strokeStyle = progressColor;
      ctx.arc(centerX, centerY, R , 0, Math.PI*2, false);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
    // 百分比文字绘制
    function text(n: number){
      const scale = R / 100;
      ctx.save(); // save和restore可以保证样式属性只运用于该段canvas元素
      ctx.fillStyle = fontColor; // 设置描边样式
      ctx.font = `${40 * scale}px Arial`; // 设置字体大小和字体
      // 绘制字体，并且指定位置
      ctx.fillText(n.toFixed(0)+'%', centerX-(25 * scale), centerY+(10 * scale));
      ctx.stroke(); // 执行绘制
      ctx.restore();
    }
    // 动画循环
    (function drawFrame(){
      window.requestAnimationFrame(drawFrame);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      whiteCircle();
      text(speed);
      blueCircle(speed);
      if(speed > format(progress)) {
        return;
      }
      speed += 0.1;
    }());
  })
  return (
    <div className={styles.content}>
      <canvas id='canvas' width='500' height='500'></canvas>
    </div>
  )
}

export default Progress;
