import * as React from 'react';
import Login from '../components/login/login';
import AuthService from '../service/authservice';
// import {pathToFileURL} from "url";

interface  LoginPageProps{
    authService: AuthService
}

export default function LoginPage (props:LoginPageProps) {
    return (
        <Login {...props}/>
    );
}



