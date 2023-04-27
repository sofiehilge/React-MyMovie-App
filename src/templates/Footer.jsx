import styled from "styled-components";
import BookmarkButton from "../components/BookmarkButton";
import FilmReelButton from "../components/FilmReelButton";
import TicketButton from "../components/TicketButton";

const StyledFooter = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  bottom: 0;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 60px;
 left: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FilmReelButton />
      <TicketButton />
      <BookmarkButton />
    </StyledFooter>
  );
};

export default Footer;
