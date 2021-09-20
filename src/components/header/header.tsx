<<<<<<< HEAD
import * as React from 'react';
import styles from './header.module.scss';
=======
import styles from './header.module.css';
>>>>>>> 747c1b6531590063e00990932492c329c8d58cc4

export default function Header () {
  return (
    <div className ={styles.header_container}>
<ul className ={styles.user_menu}>
  <li className ={styles.user_menu_item}>회원가입</li>
  <li className ={styles.user_menu_item}>로그인</li>
  <li className ={styles.user_menu_item}>고객센터</li>
</ul>
    <div>
      <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="" />
    </div>
   <nav className= {styles.nav_container} >
     <ul className ={styles.nav_menu}>
       <li className= {styles.nav_item}>전체 카테고리</li>
       <li className= {styles.nav_item}>신상품</li>
       <li className= {styles.nav_item}>베스트</li>
     </ul>
   </nav>
    </div>
  );
}
