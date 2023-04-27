import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";

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
`;

const BookmarkButton = () => {
    return ( 
      <StyledButton>
        <BsBookmark/>
      </StyledButton>
     );
}
 
export default BookmarkButton;