import * as React from 'react';
import styles from './login.module.scss'
import {ReactComponent as KakaoLogo} from "./kakao.svg";
import {ReactComponent as NaverLogo} from "./naver.svg";
import {Link} from "react-router-dom";

interface LoginProps {

}

export default function Login(props: LoginProps) {
    return (
        <div className={styles.container}>
            <div className={styles.login_container}>
                <h1>로그인</h1>
                <form className={styles.login_form}>
                    {/*input 자체를 useinput 으로 바꾸는 것도 좋을 듯??*/}
                    <div className={styles.login_input}><input placeholder="이메일" type="text"/></div>
                    <div className={styles.login_input}><input placeholder="비밀번호" type="text"/></div>
                    <button className={styles.login_btn}>로그인</button>

                    <section className={styles.user_info_link_container}>
                        <Link to="/login">비밀번호 재설정</Link>
                        <Link to="/login">회원가입</Link>
                    </section>
                </form>
                <div className={styles.social_login_des}>
                    SNS계정으로 간편 로그인/회원가입
                </div>
                <ul className={styles.login_icon_container}>
                    <li>
                        <button className={styles.social_login_btn}>
                            <NaverLogo/>
                        </button>
                    </li>
                    <li>
                        <button className={styles.social_login_btn}>
                            <a href={`http://${process.env.REACT_APP_CLIENT_URL}/kakao`}>
                            <KakaoLogo/>
                            </a>
                            
                        </button>
                    </li>
                    <li>
                        <button className={styles.social_login_btn}>
                            <a href={`http://${process.env.REACT_APP_CLIENT_URL}/google`}>
                            <KakaoLogo/>
                            </a>
                            
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}