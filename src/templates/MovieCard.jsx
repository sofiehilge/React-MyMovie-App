import styled from "styled-components";
import Image from "../components/Image";// Image navnet er ligemeget, men det skal hedde det samme i import og i component tagget.
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieCard = () => {
  return (
    <StyledArticle>
      <figure>
        <Image />
      </figure>
      <Heading text="Movie name" size="14px" type="h3" />
      <MovieRating />
    </StyledArticle>
  );
};

export default MovieCard;
