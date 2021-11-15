import { Register } from "../components/register/register"
import AuthService from "../service/authservice"
import { UserInfo } from "../type/UserInfo"

interface RegisterPageProps{
    authService:AuthService
}

export const RegisterPage =(props:RegisterPageProps) =>{
    return(
        <Register {...props}></Register>
    )
}