import styled from "styled-components";
import { BsBookmark, BsTicket } from "react-icons/bs";
import { FcFilmReel } from "react-icons/fc";

/* const StyledBookmark = styled(BsBookmark)`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  gap: 30px;
`;

const StyledTicket = styled(BsTicket)`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  gap: 30px;
  transform: rotate(90deg);
`;

const StyledFilmreel = styled(FcFilmReel)`
  color: #110e47;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  gap: 30px;
`; */

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  color: #bcbccd;
  padding-top: 10px;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  gap: 30px;
  padding: 2rem;
`;

const FooterButton = () => {
  return (
    <StyledFooter>
      <FcFilmReel />
      <BsTicket />
      <BsBookmark />
    </StyledFooter>
  );
};

export default FooterButton;
