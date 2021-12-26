import { Register } from "../components/register/register";
import AuthService from "../service/authservice";

interface RegisterPageProps {
  authService: AuthService;
}

export const RegisterPage = (props: RegisterPageProps) => {
  return <Register {...props}></Register>;
};
