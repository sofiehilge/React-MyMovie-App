import styled from "styled-components";
import backgroundImage from "../assets/backgroundimage.png";
import Switch from "../components/Switch";
import Play from "../components/Playbutton";
import Arrow from "../components/Arrow";

const StyledHeading = styled.header`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const StyledPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

const StyledPlayTrailer = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: white;
`;
const HeadingDetails = () => {
  return (
    <StyledHeading>
      <StyledNav>
        <Arrow />
        <Switch />
      </StyledNav>
      <StyledPlay>
        <Play />
        <StyledPlayTrailer>Play Trailer</StyledPlayTrailer>
      </StyledPlay>
    </StyledHeading>
  );
};

export default HeadingDetails;
