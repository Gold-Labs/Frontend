import * as React from "react";
import { Cookies } from "react-cookie";
import { Redirect } from "react-router";
import { useSetRecoilState } from "recoil";
import AuthService from "../service/authservice";
import { UserInfoState } from "../state";
interface LoginCallbackProps {
  authService: AuthService;
}

export default function LoginCallback(props: LoginCallbackProps) {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const { authService } = props;
  React.useEffect(() => {
    const cookies = new Cookies();
    const accessToken = cookies.get("key");

    localStorage.setItem("key", accessToken);

    setTimeout(() => {
      cookies.remove("key", { path: "/" });
    }, 0);

    authService.getProfile(accessToken).then((user) => {
      setUserInfo(user);
    });
  }, []);

  return <Redirect to="/" />;
  // 0초 기다리고 쿠기 받고
  // 로컬에 저장하고 쿠키 지운다.

  // <!-- A item with given width -->

  // <!-- Repeat other cards -->
}
