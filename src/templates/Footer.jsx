import styled from "styled-components";
import FooterButton from "../components/FooterButton";

const StyledFooter = styled.nav`
  margin: 0 auto;
  bottom: 0;
  position: fixed;
  background-color: white;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter className="dark:bg-black">
      <FooterButton />
    </StyledFooter>
  );
};

export default Footer;
