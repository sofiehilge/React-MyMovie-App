import styled from "styled-components";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import ThemeItem from "../components/ThemeItem";
import Paragraf from "../components/Paragraf";
import { BsBookmark } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const StyledMovieDetails = styled.main`
  background-color: white;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  margin-top: -2rem;
  padding: 2rem;
`;

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;

const StyledBookmark = styled(BsBookmark)`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  gap: 30px;
  font-size: 1rem;
`;
const StyledThemeContainer = styled.div`
  gap: 5px;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
  const DetailData = useLoaderData();
  return (
    <StyledMovieDetails>
      <StyledFlexbox>
        <Heading title={DetailData.title} size="40" as="h3" />
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
          <Paragraf tekst="2h 28min" size="12" weight="bold" />
        </StyledColumn>
        <StyledColumn>
          <Heading title="Language" size="12" as="h4" />
          <Paragraf tekst="English" size="12" weight="bold" />
        </StyledColumn>
        <StyledColumn>
          <Heading title="Rating" size="12" as="h4" />
          <Paragraf tekst="PG-13" size="12" weight="bold" />
        </StyledColumn>
      </StyledLengthDetails>
    </StyledMovieDetails>
  );
};

export const DetailsViewData = async ({ params }) => {
  return Promise.allSettled([
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}?api_key=46c585d48459a26f69c1d564844e723c&append_to_response=videos`
    ),
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}/credits?api_key=46c585d48459a26f69c1d564844e723c`
    ),
  ]).then((data) => {
    return {
      details: data[0].value.data,
      cast: data[1].value.data,
    };
  });
};

export default MovieDetails;
