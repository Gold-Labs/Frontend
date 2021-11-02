import * as React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.scss';
interface  HeaderProps{
    loginState:boolean
    setLoginState:React.Dispatch<React.SetStateAction<boolean>>
}


function LoginHeader({loginState,setLoginState}:HeaderProps){
    const logout = ()=>{setLoginState(false)}
    if (loginState){
        return (
        <>
            <li className={styles.user_menu_item}><button onClick={logout}>로그아웃</button></li>
            <li className={styles.user_menu_item}>고객센터</li>
        </>
        )
    }else{
        return (
            <>
            <li className={styles.user_menu_item}>회원가입</li>
            <li className={styles.user_menu_item}><Link to="/login">로그인</Link></li>
            <li className={styles.user_menu_item}>고객센터</li>
            </>
        )
    }
}


export default function Header(props:HeaderProps) {
    return (
        <div className={styles.header_container}>
            <ul className={styles.user_menu}>
                <LoginHeader {...props} />
            </ul>
            <div>
                <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt=""/>
            </div>
            <nav className={styles.nav_container}>
                <ul className={styles.nav_menu}>
                    <li className={styles.nav_item}>전체 카테고리</li>
                    <li className={styles.nav_item}>신상품</li>
                    <li className={styles.nav_item}>베스트</li>
                </ul>
            </nav>
        </div>
    );
}
