import styled from "styled-components";
import FooterButton from "../components/FooterButton";

const StyledFooter = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  background-color: #fff;
  font-size: 1.4rem;
  color: #979797;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 0.2);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterButton />
    </StyledFooter>
  );
};

export default Footer;
