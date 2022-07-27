import React from 'react';
import styles from './index.less';

// className CardList extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="card">
//                     <div>
//                         <h2>Design</h2>
//                         <p>
//                             Lorem sldfjsd sjflsjdf lfjsdlfjs dljsflssf 索朗多吉福利送积分
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                         </p>
//                         <a href="#">Read More</a>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <div>
//                         <h2>Design</h2>
//                         <p>
//                             Lorem sldfjsd sjflsjdf lfjsdlfjs dljsflssf 索朗多吉福利送积分
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                         </p>
//                         <a href="#">Read More</a>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <div>
//                         <h2>Design</h2>
//                         <p>
//                             Lorem sldfjsd sjflsjdf lfjsdlfjs dljsflssf 索朗多吉福利送积分
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                             sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
//                         </p>
//                         <a href="#">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

function Card() {
  return (
    <div className={styles.cardList}>
      <div className={styles.card}>
        <div>
          <h2>Design</h2>
          <p>
            Lorem sldfjsd sjflsjdf lfjsdlfjs dljsflssf 索朗多吉福利送积分
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
          </p>
          <a href='#'>Read More</a>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <h2>Design</h2>
          <p>
            Lorem sldfjsd sjflsjdf lfjsdlfjs dljsflssf 索朗多吉福利送积分
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
          </p>
          <a href='#'>Read More</a>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <h2>Design</h2>
          <p>
            Lorem sldfjsd sjflsjdf lfjsdlfjs dljsflssf 索朗多吉福利送积分
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
            sldkjfsldjf sfoweio dslfjosdjf wrwejo sfjsldfjs sdf Edsljfsldjf
          </p>
          <a href='#'>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
