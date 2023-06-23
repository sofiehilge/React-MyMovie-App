import styled from "styled-components";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import ThemeItem from "../components/ThemeItem";
import Paragraf from "../components/Paragraf";
import { BsBookmark } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const StyledMovieDetails = styled.main`
  position: relative;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  margin-top: -10px;
  padding: 2rem;
/*   gap: 12px; */
`;

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
`;

const StyledBookmark = styled(BsBookmark)`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
 /*  gap: 30px; */
  font-size: 1rem;
`;
const StyledThemeContainer = styled.div`
  gap: 5px;
  display: flex;
/*   padding-top: 2rem; */
  padding-bottom: 12px;
`;

const StyledLengthDetails = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: left;
  margin-left: -2rem;
  line-height: 0;
  /*  
  margin-bottom: -1rem;
  text-align: center; */
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieDetails = () => {
  /* Skal du have rating skal du skrive det her op. */
  const { movie } = useLoaderData();
  return (
    <StyledMovieDetails>
      <StyledFlexbox>
        <Heading title={movie.title} size="20" as="h3" />
        <StyledBookmark />
      </StyledFlexbox>
      <MovieRating />
      <StyledThemeContainer>
        <ThemeItem title="Action" />
        <ThemeItem title="Adventure" />
        <ThemeItem title="Fantasy" />
      </StyledThemeContainer>
      <StyledLengthDetails>
        <StyledColumn>
          <Heading title="Length" size="12" as="h4" />
          <Paragraf tekst={movie.runtime} size="12" weight="bold">
            {" "}
            min.
          </Paragraf>
        </StyledColumn>
        <StyledColumn>
          <Heading title="Language" size="12" as="h4" />
          <Paragraf tekst={movie.original_language} size="12" weight="bold" />
        </StyledColumn>
        <StyledColumn>
          <Heading title="Rating" size="12" as="h4" />
          <Paragraf tekst={movie.vote_count} size="12" weight="bold" />
        </StyledColumn>
      </StyledLengthDetails>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
