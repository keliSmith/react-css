import React, { useState } from 'react';
import styles from './index.less';

function DigitalClock() {
  const [hour, setHour] = useState<number | string >(0);
  const [min, setMin] = useState<number | string >(0);
  const [sec, setSec] = useState<number | string >(0);
  const [am, setAm] = useState<number | string >('AM');

  const [hOffset, setHoffset] = useState(0);
  const [mOffset, setMoffset] = useState(0);
  const [sOffset, setSoffset] = useState(0);

  const [degH, setDegH] = useState(0);
  const [degM, setDegM] = useState(0);
  const [degS, setDegS] = useState(0);

  setInterval(() => {
    let h: number | string = new Date().getHours();
    let m: number | string  = new Date().getMinutes();
    let s: number | string  = new Date().getSeconds();
    const aam = h >= 12 ? 'PM' : 'AM';

    setAm(aam);

    if (h > 12) {
      h -= 12;
    }

    h = h >= 10 ? h : `0${h}`;
    m = m >= 10 ? m : `0${m}`;
    s = s >= 10 ? s : `0${s}`;

    setHour(h);
    setMin(m);
    setSec(s);

    const offsetH = 440 - (440 * +h / 12);
    const offsetM = 440 - (440 * +m / 60);
    const offsetS = 440 - (440 * +s / 60);

    setHoffset(offsetH);
    setMoffset(offsetM);
    setSoffset(offsetS);

    const Hdeg = +h * 360 / 12;
    const Mdeg = +m * 360 / 60;
    const Sdeg = +s * 360 / 60;

    setDegH(Hdeg);
    setDegM(Mdeg);
    setDegS(Sdeg);
  });

  return (
    <div className={styles.clock}>
      <div className={styles.time}>
        <div className={styles.circle}>
          <div className={styles.dots} style={{ transform: `rotate(${degH}deg)` }} />
          <svg>
            <circle cx='70' cy='70' r='70' />
            <circle cx='70' cy='70' r='70' strokeDashoffset={hOffset} />
          </svg>
          <div>
            {hour}
            <span>HOURS</span>
          </div>
        </div>
        <div className={styles.circle}>
          <div className={styles.dots} style={{ transform: `rotate(${degM}deg)` }} />
          <svg>
            <circle cx='70' cy='70' r='70' />
            <circle cx='70' cy='70' r='70' strokeDashoffset={mOffset} />
          </svg>
          <div>
            {min}
            <span>MINUTES</span>
          </div>
        </div>
        <div className={styles.circle}>
          <div className={styles.dots} style={{ transform: `rotate(${degS}deg)` }} />
          <svg>
            <circle cx='70' cy='70' r='70' />
            <circle cx='70' cy='70' r='70' strokeDashoffset={sOffset} />
          </svg>
          <div>
            {sec}
            <span>SECONDS</span>
          </div>
        </div>
        <div className={styles.ap}>
          <div>{am}</div>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
