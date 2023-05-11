import styled from "styled-components";
import Image from "../components/Image"; // Image navnet er ligemeget, men det skal hedde det samme i import og i component tagget.
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NowShowing = () => {
  const MovieCardData = useLoaderData(); /* Denne bruger man som hook til at få dataen ud af requesten. */

  return (
    <>
      {MovieCardData.nowShowing.map((data) => (/* OBS! Vi bruger map da det er en listevisning:) */
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle>
            <figure>
              <Image
                width="143"
                shadow={true}
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                alt="Cover Image"
              />
              {/* Fordi vi sender en boolean med, sættes den med curleybrackets */}
            </figure>
            <Heading
              title={
                data.title.length > 25
                  ? data.title.split(" ").slice(0, 3).join(" ") + "..."
                  : data.title
              }
              size="14"
              as="h3"
            />
            <MovieRating voteAverage={data.vote_average} />
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};



export default NowShowing;
