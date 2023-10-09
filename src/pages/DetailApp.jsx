/* import Heading from "./components/heading";
import MovieCard from "./templates/MovieCard";
import PopularCard from "./templates/PopularCard";
import SeeMoreButton from "./components/SeeMoreButton"; */
import HeadingDetails from "../templates/HeadingDetails";
import MovieDetails from "../templates/MovieDetails";
import MovieDescription from "../templates/MovieDescription";
import Heading from "../components/Heading";
import SeeMoreButton from "../components/SeeMoreButton";
import CastImage from "../components/CastImage";
import styled from "styled-components";
import Footer from "../templates/Footer";

/* import Footer from "./templates/Footer"; */
/* import { useLoaderData } from "react-router-dom"; */
import axios from "axios";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: 20%;
  margin-bottom: 1rem;
  padding: 0 1rem 4rem 1rem;
`;

const DetailApp = () => {
  return (
    <>
      <HeadingDetails />
      <MovieDetails />
      <MovieDescription />
      <div className="flexContainer space-between padding">
        <Heading
          className="dark:text-lightblue"
          title="Cast"
          size="16"
          as="h2"
        />
        <SeeMoreButton />
      </div>
      <StyledDiv>
        <CastImage />
      </StyledDiv>
      <Footer />
    </>
  );
};

export const movieDetailAppData = async (id) => {
  return await Promise.allSettled([
    await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=46c585d48459a26f69c1d564844e723c&append_to_response=videos`
    ),
    await axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=46c585d48459a26f69c1d564844e723c`
    ) /* Herefter tilføjes &append_to_response=videos for så kan man hente en base url til youtube og sætte api end pointet på. */,
  ]).then((values) => {
    console.log("Value: ", values);
    return {
      movie: values[0].value.data,
      cast: values[1].value.data.cast /* Der ligger to cast,  */,
    };
  });
};

export default DetailApp;
// da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"
