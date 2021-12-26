import styles from "./footer.module.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1050px;
  margin: auto;
  font-size: 1.6rem;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 10px;
  border-top: solid gainsboro 1px;
  border-bottom: solid gainsboro 1px;
  margin-top: 10px;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Content = styled.div`
  line-height: 20px;
`;

const FooterMain = styled.div`
  width: 60%;
  color: black;
  ${Title}
  ${Content}
`;

const FooterButtonWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 22px;
  border: 1px solid #a98f71;
  margin: 0px 5px;
  padding: 10px 20px;

  &:hover {
    background-color: #a98f71;
  }
`;

const SNSIconWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SNSIcon = styled.li`
  img {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }
`;

const FooterContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
  font-size: 1rem;
  div {
    line-height: 15px;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterMain>
            <Title>아직도 망설이고 계신가요?</Title>
            <Content>
              한땀한땀 손으로 만든 정성을 누군가에게 선물해보세요!!
            </Content>
            <Content>당신의 정성에 모두가 기뻐하고 있습니다.</Content>
          </FooterMain>
          <FooterButtonWrapper>
            <li>
              <Button>
                <Link to="/home">홈으로 가기</Link>
              </Button>
            </li>
            <li>
              <Button>쇼핑하러 가기</Button>
            </li>
          </FooterButtonWrapper>
        </FooterContent>
        <FooterContact>
          <Content>
            <div>Contact us 서울시 성북구 돈암동</div>
            <div>COPYRIGHT ClUBCROCHET ALL RIGHTS RESERVED</div>
          </Content>
          <SNSIconWrapper>
            <SNSIcon>
              <img src="assets/icon/mail.png"></img>
            </SNSIcon>
            <SNSIcon>
              <img src="assets/icon/insta.png"></img>
            </SNSIcon>
          </SNSIconWrapper>
        </FooterContact>
      </FooterContainer>
    </FooterWrapper>
  );
}
