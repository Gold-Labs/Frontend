import * as React from 'react';
import AuthService from '../service/authservice';
// import {pathToFileURL} from "url";
interface  LoginCallbackProps{
    authService:AuthService,
    setLoginState: React.Dispatch<React.SetStateAction<boolean>>
}
export default function LoginCallback (props:LoginCallbackProps) {
    return (
            // <!-- A card with given width -->
           <></>
            // <!-- Repeat other cards -->
    );
}



