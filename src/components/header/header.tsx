import * as React from 'react';
import {Link} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserInfoState } from '../../state';
import { UserInfo } from '../../type/UserInfo';
import styles from './header.module.scss';
interface  HeaderProps{
}


function LoginHeader(props:HeaderProps){
    const [userInfo,setUserInfo] = useRecoilState(UserInfoState)
    const logout = ()=>{
        setUserInfo(null)
        localStorage.removeItem("key")
    }
    if (userInfo){
        return (
            <ul className={styles.user_menu}>
                <li className={styles.user_menu_item}>환영합니다. {userInfo.email}</li>
                <li className={styles.user_menu_item}><button onClick={logout}>로그아웃</button></li>
                <li className={styles.user_menu_item}>고객센터</li>
            </ul>
        )
    }else{
        return (
            <ul className={styles.user_menu}>
                <li className={styles.user_menu_item}><Link to="/register">회원가입</Link></li>
                <li className={styles.user_menu_item}><Link to="/login">로그인</Link></li>
                <li className={styles.user_menu_item}>고객센터</li>
            </ul>
        )
    }
}


export default function Header(props:HeaderProps) {
    return (
        <div className={styles.header_container}>
                <LoginHeader {...props} />
            <>
                <img className={styles.logo} src="/assets/images/logo/club-crochet.png" alt=""/>
            </>
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
