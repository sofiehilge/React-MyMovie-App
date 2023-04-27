import styled from "styled-components";
import BookmarkButton from "../components/BookmarkButton";
import FilmReelButton from "../components/FilmReelButton";
import TicketButton from "../components/TicketButton";

const StyledFooter = styled.nav`
display: flex;
justify-content: space-evenly;
margin: 0 auto;

`

const Footer = () => {
    return ( 
        <StyledFooter>
            <FilmReelButton/>
            <TicketButton/>
            <BookmarkButton/>
        </StyledFooter>
        
     );
}
 
export default Footer;