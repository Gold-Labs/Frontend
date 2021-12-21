import styled from "styled-components";

interface NavbarProps {}

const NavbarWrapper = styled.nav`
  width: 100%;
`;

const NavbarMenu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: start;
`;

const NavbarItem = styled.li`
  margin-left: 10px;
`;

function Navbar(props: NavbarProps) {
  return (
    <NavbarWrapper>
      <NavbarMenu>
        <NavbarItem>전체 카테고리</NavbarItem>
        <NavbarItem>신상품</NavbarItem>
        <NavbarItem>베스트</NavbarItem>
      </NavbarMenu>
    </NavbarWrapper>
  );
}

export default Navbar;
