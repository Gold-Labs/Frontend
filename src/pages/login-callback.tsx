import * as React from 'react';
import AuthService from '../service/authservice';
import { UserInfo } from '../type/UserInfo';
// import {pathToFileURL} from "url";
interface  LoginCallbackProps{
    authService:AuthService,
    setLoginState: React.Dispatch<React.SetStateAction<UserInfo>>
}
export default function LoginCallback (props:LoginCallbackProps) {
    return (
        // 0초 기다리고 쿠기 받고 
        // 로컬에 저장하고 쿠키 지운다. 
        
            // <!-- A item with given width -->
           <></>
            // <!-- Repeat other cards -->
    );
}



