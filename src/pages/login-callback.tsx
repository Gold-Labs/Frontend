import * as React from 'react';
import { Cookies, useCookies } from 'react-cookie';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import AuthService from '../service/authservice';
import { UserInfo } from '../type/UserInfo';
// import {pathToFileURL} from "url";
interface  LoginCallbackProps{
    authService:AuthService,
    setLoginState: React.Dispatch<React.SetStateAction<UserInfo>>
}

export default function LoginCallback (props:LoginCallbackProps) {
    const {authService,setLoginState} = props;
    React.useEffect(()=>{
        const cookies = new Cookies()
        const accessToken = cookies.get("key")
        localStorage.setItem('key',accessToken)
    
         setTimeout(() => {
            cookies.remove('key',{path: '/'})
        }, 0)
    
    
        authService.getProfile(accessToken).then((user)=>{
            console.log(user)
            setLoginState(user)
        })


    },[])
  
    return  <Redirect to="/" />
        // 0초 기다리고 쿠기 받고 
        // 로컬에 저장하고 쿠키 지운다. 
        
            // <!-- A item with given width -->
    
            // <!-- Repeat other cards -->
    
}



