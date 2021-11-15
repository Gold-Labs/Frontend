import * as React from 'react';
import Login from '../components/login/login';
import AuthService from '../service/authservice';
import { UserInfo } from '../type/UserInfo';
// import {pathToFileURL} from "url";

interface  LoginPageProps{
    authService: AuthService
    setLoginState:React.Dispatch<React.SetStateAction<UserInfo>>
}

export default function LoginPage (props:LoginPageProps) {
    return (
        <Login {...props}/>
    );
}



