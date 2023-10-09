import styled from "styled-components";
import { BsBookmark, BsTicket } from "react-icons/bs";
import { FcFilmReel } from "react-icons/fc";
import { Link } from "react-router-dom";

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
  align-items: center;
  justify-content: space-around;
  height: 60px;
  font-size: 1.5rem;
  color: #bcbccd;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const FooterButton = () => {
  return (
    <StyledFooter className="dark:bg-black">
      <Link to="/">
        <FcFilmReel className="dark:text-white" />
      </Link>

      <BsTicket className="dark:text-white" />
      <Link to="/bookmark">
        <BsBookmark className="dark:text-white" />
      </Link>
    </StyledFooter>
  );
};

export default FooterButton;
