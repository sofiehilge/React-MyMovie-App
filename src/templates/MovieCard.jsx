import styled from "styled-components";
import Image from "../components/Image"; // Image navnet er ligemeget, men det skal hedde det samme i import og i component tagget.
import Heading from "../components/heading";
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
        <Image shadow={true}/>{/* Fordi vi sender en boolean med, sættes den med curleybrackets */}
      </figure>
      <Heading
        title="Movie TItle"
        size="14"
        as="h3"
      />
      <MovieRating />
    </StyledArticle>
  );
};

export default MovieCard;
