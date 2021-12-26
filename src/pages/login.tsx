import Login from "../components/login/login";
import AuthService from "../service/authservice";

interface LoginPageProps {
  authService: AuthService;
}

export default function LoginPage(props: LoginPageProps) {
  return <Login {...props} />;
}
