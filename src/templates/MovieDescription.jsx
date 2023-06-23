import styled from "styled-components";
import Heading from "../components/Heading";
import Paragraf from "../components/Paragraf";
import { useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  line-height: 150%;
`;

const StyledP = styled.p`
  line-height: 1.8rem;
  color: #9c9c9c;
  margin-top: 8px;
  font-size: 12;
  color: #9c9c9c;
`;

const MovieDescription = () => {
  const { movie } = useLoaderData();
  return (
    <StyledArticle>
      <Heading title="Description" size="16" as="h2" />
      <StyledP>{movie.overview}</StyledP>
    </StyledArticle>
  );
};

export default MovieDescription;
