import styled from "styled-components";
import { BsBookmark, BsTicket } from "react-icons/bs";
import { FcFilmReel  } from "react-icons/fc";

const StyledButton = styled.button`
color: #110e47;
background: none;
font-size: 2 rem;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	gap: 30px;
`;

const FooterButton = () => {
    return ( 
      <StyledButton>
		<FcFilmReel/>
		<BsTicket/>
        <BsBookmark/>
      </StyledButton>
     );
}
 
export default FooterButton;