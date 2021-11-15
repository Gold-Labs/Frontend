import { Register } from "../components/register/register"
import AuthService from "../service/authservice"
import { UserInfo } from "../type/UserInfo"

interface RegisterPageProps{
    authService:AuthService
    setLoginState:React.Dispatch<React.SetStateAction<UserInfo>>

}

export const RegisterPage =(props:RegisterPageProps) =>{
    return(
        <Register {...props}></Register>
    )
}