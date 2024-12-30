export function drawHeart () {

  class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    rotate(theta: number) {
      const x = this.x;
      const y = this.y;
      this.x = Math.cos(theta) * x - Math.sin(theta) * y;
      this.y = Math.sin(theta) * x + Math.cos(theta) * y;
      return this;
    }

    mult(f: number) {
      this.x *= f;
      this.y *= f;
      return this;
    }

    clone () {
      return new Vector(this.x, this.y);
    }

    length () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    subtract (v:Vector) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
    set (x: number, y: number) {
      this.x = x;
      this.y = y;
      return this;
    }
  }

  class Petal {
    stretchA: number;
    stretchB: number;
    startAngle: number;
    angle: number;
    bloom: Bloom;
    growFactor: number;
    r: number;
    isfinished: boolean;
    constructor(stretchA: number, stretchB: number, startAngle: number, angle: number, growFactor: number, bloom: Bloom) {
      this.stretchA = stretchA;
      this.stretchB = stretchB;
      this.startAngle = startAngle;
      this.angle = angle;
      this.bloom = bloom;
      this.growFactor = growFactor;
      this.r = 1;
      this.isfinished = false;
    }
    draw () {
      const ctx = this.bloom.garden.ctx;
      const v1 = new Vector(0, this.r).rotate(Garden.degrad(this.startAngle));
      const v2 = v1.clone().rotate(Garden.degrad(this.angle));
      const v3 = v1.clone().mult(this.stretchA); // .rotate(this.tanAngleA);
      const v4 = v2.clone().mult(this.stretchB); // .rotate(this.tanAngleB);
      ctx.strokeStyle = this.bloom.c;
      ctx.beginPath();
      ctx.moveTo(v1.x, v1.y);
      ctx.bezierCurveTo(v3.x, v3.y, v4.x, v4.y, v2.x, v2.y);
      ctx.stroke();
    }
    render () {
      if (this.r <= this.bloom.r) {
        this.r += this.growFactor; // / 10;
        this.draw();
      } else {
        this.isfinished = true;
      }
    }
  }

  class Bloom {
    p: Vector;
    r: number;
    c: string;
    pc: number;
    petals: Petal[];
    garden: Garden;
    constructor(p: Vector, r: number, c: string, pc: number, garden: Garden) {
      this.p = p;
      this.r = r;
      this.c = c;
      this.pc = pc;
      this.petals = [];
      this.garden = garden;
      this.init();
      this.garden.addBloom(this);
    }
    init () {
      const angle = 360 / this.pc;
      const startAngle = Garden.randomInt(0, 90);
      for (let i = 0; i < this.pc; i++) {
        this.petals.push(new Petal(
          Garden.random(Garden.options.petalStretch.min, Garden.options.petalStretch.max),
          Garden.random(Garden.options.petalStretch.min, Garden.options.petalStretch.max),
          startAngle + i * angle,
          angle, Garden.random(Garden.options.growFactor.min, Garden.options.growFactor.max),
          this
        ));
      }
    }
    draw () {
      let p: Petal;
      let isfinished = true;
      this.garden.ctx.save();
      this.garden.ctx.translate(this.p.x, this.p.y);
      for (let i = 0; i < this.petals.length; i++) {
        p = this.petals[i];
        p.render();
        isfinished = p.isfinished;
      }
      this.garden.ctx.restore();
      if (isfinished == true) {
        this.garden.removeBloom(this);
      }
    }
  }

  class Garden {
    static options = {
      petalCount: {
        min: 9,
        max: 13
      },
      petalStretch: {
        min: 0.9,
        max: 3
      },
      growFactor: {
        min: 0.1,
        max: 1
      },
      bloomRadius: {
        min: 5,
        max: 10
      },
      density: 50,
      growSpeed: 1000 / 30,
      color: {
        min: 0,
        max: 90,
        opacity: 0.05
      },
      tanAngle: 90
    };
    static circle = 2 * Math.PI;

    ctx: CanvasRenderingContext2D;
    element: HTMLCanvasElement;
    blooms: Bloom[];
    constructor(ctx: CanvasRenderingContext2D, element: HTMLCanvasElement) {
      this.ctx = ctx;
      this.element = element;
      this.blooms = [];
    }
    render () {
      for (let i = 0; i < this.blooms.length; i++) {
        this.blooms[i].draw();
      }
    }
    addBloom (b: Bloom) {
      this.blooms.push(b);
    }
    removeBloom (b: Bloom) {
      let bloom;
      for (let i = 0; i < this.blooms.length; i++) {
        bloom = this.blooms[i];
        if (bloom === b) {
          this.blooms.splice(i, 1);
          return this;
        }
      }
    }
    createRandomBloom (x: number, y: number, Size: number) {
      // Garden.randomInt(Garden.options.bloomRadius.min, Garden.options.bloomRadius.max),
      this.createBloom(
        x,
        y,
        Size,
        Garden.randomrgba(),
        Garden.randomInt(Garden.options.petalCount.min, Garden.options.petalCount.max));
    }
    createBloom (x: number, y: number, r: number, c: string, pc: number) {
      new Bloom(new Vector(x, y), r, c, pc, this);
    }
    clear () {
      this.blooms = [];
      this.ctx.clearRect(0, 0, this.element.width, this.element.height);
    }
    static degrad (angle: number) {
      return this.circle / 360 * angle;
    }
    static randomInt (min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static random (min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    static raddeg (angle: number) {
      return angle / this.circle * 360;
    }
    static rgba (r: number, g: number, b: number, a: number) {
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    }
    static randomrgba () {
      // return Garden.rgba(Math.round(Garden.random(250, 255)), Math.round(Garden.random(200, 210)), Math.round(Garden.random(200, 210)), 0.05);//紫色
      return this.rgba(Math.round(Garden.random(180, 250)), Math.round(Garden.random(80, 255)), Math.round(Garden.random(50, 180)), 0.15);// 橙色,粉红,紫色
    }
  }

  function init () {
    const windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const gardenCanvas = document.getElementById('garden') as HTMLCanvasElement;
    const gardenCtx = gardenCanvas.getContext('2d') as CanvasRenderingContext2D;
    gardenCanvas.width = windowWidth;
    gardenCanvas.height = windowHeight;

    const garden = new Garden(gardenCtx, gardenCanvas);

    // renderLoop
    setInterval(function () {
      garden.render();
    }, Garden.options.growSpeed);

    // ---------------------------------------------------------------
    // Draw My Picture
    const r = 18;
    let flag = 0;
    let time;
    const temp = 800;
    let radian = Math.PI;// 弧度
    const radianDecrement = Math.PI / 370 * 2;// 弧度增量
    let heartX, heartY;
    const LX = 700, LY = 370;
    let URowX = LX, DRowX = LX, RRollY = LY, LRollY = LY;
    const URowY = LY, DRowY = LY, LRollX = LX, RRollX = LX;

    for(let i=0;i<350;i++){
      time = 30*(i + temp);
      setTimeout(drawHeart, time);
    }

    // for(let j = 0; j < 20; j++){
    //   setTimeout(drawRect_URow, 60 * j + 35000);
    // }

    // for(let j = 0; j < 21; j++){
    //   setTimeout(drawRect_DRow, 60 * j + 20 * 65 + 36000);
    // }

    // for(let j = 0; j < 5; j++){
    //   setTimeout(drawRect_LRoll, 60 * j + 20 * 65 + 37000);
    // }

    // for(let j = 0; j < 5; j++){
    //   setTimeout(drawRect_RRoll, 60 * j + 20 * 65 + 38000);
    // }

    function drawRect_URow(){
      garden.createRandomBloom(URowX, URowY, 12);
      URowX = URowX + 25;
    }

    function drawRect_DRow(){
      garden.createRandomBloom(DRowX, DRowY + 185, 12);
      DRowX = DRowX + 25;
    }

    function drawRect_LRoll(){
      garden.createRandomBloom(LRollX, LRollY, 12);
      LRollY = LRollY + 25;
    }

    function drawRect_RRoll(){
      garden.createRandomBloom(RRollX + 500, RRollY, 12);
      RRollY = RRollY + 25;
    }

    function drawHeart(){
      flag++;
      heartX = getX(radian);
      heartY = getY(radian);
      radian += radianDecrement;
      if(flag < 31){
        if(flag%8==0){
          garden.createRandomBloom(heartX, heartY, 12);
        }
      }else if(flag % 4 == 0){
        if(radian>Math.PI+300*radianDecrement)
          garden.createRandomBloom(heartX, heartY, 56 - (5.51) *(radian));
        else if(!(radian<=Math.PI+205*radianDecrement&&radian>=Math.PI+180*radianDecrement))// 只是让变得好看
          garden.createRandomBloom(heartX, heartY, 12);
      }
    }

    function getX(t: number) { // 由弧度得到 X 坐标
      return 305+r*(16*Math.pow(Math.sin(t),3));
    }

    function getY(t: number) { // 由弧度得到 Y 坐标
      return 295-r*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));
    }
  }

  init();
}

export function writeContent (i: number, strArr: string[] = []){
  let charIndex = i;
  const textArr = strArr
  const myContentHtml = document.getElementById('myContent') as HTMLElement;
  const blinkHtml = document.getElementById('blink') as HTMLElement;

  const inputText = textArr.join('');
  const stringLength = inputText.length;

  let initString = myContentHtml?.innerHTML;
  initString = initString?.replace(/<SPAN.*$/gi,'');


  let theChar = inputText.charAt(charIndex);
  const nextFourChars = inputText.substr(charIndex,4);

  if(nextFourChars=='<BR>' || nextFourChars=='<br>'){
    theChar = '<BR>';
    charIndex+=3;
  }
  initString = initString + theChar + '<SPAN id=\'blink\'>_</SPAN>';

  myContentHtml ? myContentHtml.innerHTML = initString : '';

  charIndex = charIndex/1 +1;
  if(charIndex%2==1){
    blinkHtml ? blinkHtml.style.display='none' : '';
  }else{
    blinkHtml ? blinkHtml.style.display='inline' : '';
  }

  if(charIndex<=stringLength){
    setTimeout(() => writeContent(charIndex, strArr), 140);
  }else{
    blinkSpan(blinkHtml);
  }
}

function blinkSpan(node: HTMLElement){
  let currentStyle = 'inline';
  if(currentStyle=='inline'){
    currentStyle='none';
  }else{
    currentStyle='inline';
  }
  node ? node.style.display = currentStyle : '';
  setTimeout(() => blinkSpan(node),100);
}

export function showTime() {
  const currentDate = new Date().getTime();
  const startDate = new Date(2024, 10, 8).getTime();
  const date3 = currentDate - startDate;
  const days=Math.floor(date3/(24*3600*1000));
  const leave1=date3%(24*3600*1000);     // 计算天数后剩余的毫秒数
  const hours=Math.floor(leave1/(3600*1000));
  const leave2=leave1%(3600*1000);        // 计算小时数后剩余的毫秒数
  let minutes: number | string =Math.floor(leave2/(60*1000));
  const leave3=leave2%(60*1000);          // 计算分钟数后剩余的毫秒数
  let seconds: number | string=Math.round(leave3/1000);
  if (minutes < 10)
    minutes = '0' + minutes;
  if (seconds < 10)
    seconds = '0' + seconds;
  const currentTimeString = 'Dear ZhuZhu:<br>'
		+ 'I have been in love with you for:<br> '
		+ '&nbsp&nbsp&nbsp&nbsp&nbsp'
		+ '<c style="color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px" >' + days +' </c>day '
		+ '<c style="color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px" >' + hours+' </c>hour '
		+'<c style="color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px" >' + minutes+' </c>min '
		+'<c style="color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px" >' +seconds+' </c>sec<br>'
		+ '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp只愿执子之手,与子偕老.<br>'
		+ '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
		+	'<c style="color: #CCCCCC; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px" >----王八婆   2024-12-30</c>';
  const showTimeHtml = document.getElementById('show') as HTMLElement;
  showTimeHtml ? showTimeHtml.innerHTML=currentTimeString : '';  // 改这地方
}
