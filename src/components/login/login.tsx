import * as React from 'react';
import styles from './login.module.scss'
import {ReactComponent as KakaoLogo} from "./kakao.svg";
import {ReactComponent as NaverLogo} from "./naver.svg";
import {Link, Redirect, useHistory} from "react-router-dom";
import AuthService from '../../service/authservice';
import { UserInfo } from '../../type/UserInfo';

interface LoginProps {
    authService: AuthService;
    setLoginState:React.Dispatch<React.SetStateAction<UserInfo>>
}

export default function Login({authService,setLoginState}: LoginProps) {
    const history =useHistory()
        
    async function login(event:React.SyntheticEvent){
        event.preventDefault()
        const form = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
          };
        const email = form.email.value; 
        const password = form.password.value; 
        const user = {email,password}
        try{
            const result = await authService.login(user)
            const {access_token} = result
            localStorage.setItem('key',access_token)
            setLoginState(user)
            history.push('/')
        }catch(error){
            console.log(error)
        }
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.login_container}>
                <h1>로그인</h1>
                <form className={styles.login_form} onSubmit={login}>
                    {/*input 자체를 useinput 으로 바꾸는 것도 좋을 듯??*/}
                    <div className={styles.login_input}><input name="email" placeholder="이메일" type="email"/></div>
                    <div className={styles.login_input}><input name="password" placeholder="비밀번호" type="text"/></div>
                    <button className={styles.login_btn}>로그인</button>

                    <section className={styles.user_info_link_container}>
                        <Link to="/login">비밀번호 재설정</Link>
                        <Link to="/register">회원가입</Link>
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
                            <a href={`http://localhost:3000/kakao`}>
                            <KakaoLogo/>
                            </a>
                            
                        </button>
                    </li>
                    <li>
                        <button className={styles.social_login_btn}>
                            <a href={`http://localhost:3000/google`}>
                            <KakaoLogo/>
                            </a>
                            
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}