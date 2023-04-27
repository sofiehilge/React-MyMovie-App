import styled from "styled-components";
import { FcFilmReel } from "react-icons/fc";


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

const FilmReelButton = () => {
  return (
    <StyledButton>
      <FcFilmReel />
    </StyledButton>
  );
};

export default FilmReelButton;
