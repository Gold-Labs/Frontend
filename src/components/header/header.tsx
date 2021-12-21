import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { UserInfoState } from "../../state";
interface HeaderProps {}

const UserMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 1rem;
`;

const UserMenuItem = styled.li`
  margin-left: 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  max-width: 1050px;
  margin: auto;
`;

const MainLogo = styled.img.attrs({
  src: "/assets/images/logo/club-crochet.png",
})`
  width: 200px;
  height: 200px;
`;

function LoginHeader(props: HeaderProps) {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem("key");
  };

  return userInfo ? (
    <UserMenu>
      <UserMenuItem>환영합니다. {userInfo.email}</UserMenuItem>
      <UserMenuItem>
        <button onClick={logout}>로그아웃</button>
      </UserMenuItem>
      <UserMenuItem>고객센터</UserMenuItem>
    </UserMenu>
  ) : (
    <UserMenu>
      <UserMenuItem>
        <Link to="/register">회원가입</Link>
      </UserMenuItem>
      <UserMenuItem>
        <Link to="/login">로그인</Link>
      </UserMenuItem>
      <UserMenuItem>고객센터</UserMenuItem>
    </UserMenu>
  );
}

export default function Header(props: HeaderProps) {
  return (
    <HeaderWrapper>
      <LoginHeader {...props} />
      <MainLogo />
    </HeaderWrapper>
  );
}
