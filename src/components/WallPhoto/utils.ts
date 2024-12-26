interface IParameter {
  rotateX?: number
  rotateY?: number
  interTime?: number
  isAutoPlay?: boolean
}
export function mirrorPhoto3D (ele: HTMLElement, parameter: IParameter) {
  let rotateX = (parameter && parameter.rotateX) || -20
  let rotateY = (parameter && parameter.rotateY) || 100
  const interTime = (parameter && parameter.interTime) || 1000
  let isAutoPlay = parameter && parameter.isAutoPlay
  if (isAutoPlay === null || isAutoPlay === undefined) {
    isAutoPlay = true
  }
  const wrap = ele.querySelector('div') as HTMLElement;
  wrap.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
  wrap.style.transition = interTime + 'ms linear'
  const imgs = ele.querySelectorAll('img')
  const deg = 360 / (imgs.length)
  imgs.forEach(function (el, index) {
    el.style.transform = 'rotateY(' + index * (-deg) + 'deg) translateZ(300px)'
    el.onmousedown = function (e) {
      const event = e || window.event
      // 阻止事件冒泡
      if (event && event.stopPropagation) { // w3c标准
        event.stopPropagation()
      } else { // IE系列 IE 678
        event.cancelBubble = true
      }
    }
  })
  // 添加拖拽事件
  let curX: number;
  let curY: number;
  const move = function (e: MouseEvent) {
    const event = e || window.event
    const x = (event.clientX - curX) / 5
    const y = (event.clientY - curY) / 5
    curX = event.clientX
    curY = event.clientY
    rotateX += y
    rotateY += x
    wrap.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
  }
  // 添加轮播事件
  let inter: ReturnType<typeof setTimeout>
  function autoPlay () {
    if (isAutoPlay) {
      inter = setInterval(function () {
        rotateY -= deg
        wrap.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
      }, interTime)
    }
  }
  ele.onmousedown = function (e: MouseEvent) {
    clearInterval(inter)
    const event = e || window.event
    curX = event.clientX
    curY = event.clientY
    // this.style.cursor = 'grabbing'
    this.onmousemove = move
  }
  ele.onmouseup = function (e: MouseEvent) {
    autoPlay()
    // this.style.cursor = 'grab'
    this.onmousemove = null
  }
  autoPlay()
}
