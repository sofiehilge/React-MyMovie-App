import styled from "styled-components";
import backgroundImage from "../assets/backgroundimage.png";
/* import Switch from "../components/Switch"; */
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import Switch from "../components/Switch";

const StyledHeading = styled.header`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  display: grid;
  grid-template-columns: 3;
`;

const StyledLink = styled(Link)`
  position: relative; /* fix z position on safari mobile */
  color: #fff;
  grid-column-start: 1;
  grid-row-start: 1;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const StyledIframe = styled.iframe`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
`;
/* 
const StyledSwitch = styled(Switch)`
  
`; */
/* const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;
 */
/* const StyledPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`; */

/* const StyledPlayTrailer = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: white;
`; */

const HeadingDetails = () => {
  const { movie } = useLoaderData();
  return (
    <StyledHeading>
      <StyledIframe
        width="99%"
        height="100%"
        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <StyledLink to="/">
        <AiOutlineArrowLeft />
      </StyledLink>
      <Switch justify="end" align="top" />
    </StyledHeading>
  );
};

export default HeadingDetails;
