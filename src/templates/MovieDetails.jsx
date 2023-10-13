import styled from "styled-components";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import ThemeItem from "../components/ThemeItem";
import Paragraf from "../components/Paragraf";
import { useLoaderData } from "react-router-dom";
import Bookmark from "../components/Bookmark";

const StyledMovieDetails = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  margin-top: -10px;
`;

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
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
    <StyledMovieDetails className="dark:bg-black">
      <StyledFlexbox>
        <Heading title={movie.title} size="20" as="h3" />
        <Bookmark className="dark:text-white" />
      </StyledFlexbox>
      <MovieRating />
      <StyledThemeContainer>
        {movie.genres.map((movieGenreName, index) => (
          <ThemeItem key={index} title={movieGenreName.name} />
        ))}
      </StyledThemeContainer>
      <StyledLengthDetails>
        <StyledColumn>
          <Heading
            className="dark:text-gray"
            title="Length"
            size="12"
            color="9C9C9C"
            as="h4"
          />
          <Paragraf
            className="dark:text-white"
            tekst={movie.runtime}
            size="12"
            weight="bold"
          >
            min.
          </Paragraf>
        </StyledColumn>
        <StyledColumn>
          <Heading
            className="dark:text-gray"
            title="Language"
            size="12"
            color="9C9C9C"
            as="h4"
          />
          <Paragraf
            className="dark:text-white"
            tekst={movie.original_language}
            size="12"
            weight="bold"
          />
        </StyledColumn>
        <StyledColumn>
          <Heading
            className="dark:text-gray"
            title="Rating"
            size="12"
            color="9C9C9C"
            as="h4"
          />
          <Paragraf
            className="dark:text-white"
            tekst={movie.vote_count}
            size="12"
            weight="bold"
          />
        </StyledColumn>
      </StyledLengthDetails>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
