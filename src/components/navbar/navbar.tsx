import styled from "styled-components";

interface NavbarProps {}

const NavbarWrapper = styled.nav`
  width: 100%;
  max-width: 1050px;
  margin: auto;
`;

const NavbarMenu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: start;
  font-size: 2rem;
  padding: 1rem;
`;

const NavbarItem = styled.li`
  margin-right: 10rem;
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
