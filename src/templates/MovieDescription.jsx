import styled from "styled-components";
import Heading from "../components/Heading";
import Paragraf from "../components/Paragraf";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  line-height: 150%;
`;

const MovieDescription = () => {
  return (
    <StyledArticle>
      <Heading title="Description" size="16" as="h2" />
      <Paragraf
        as="p"
        size="12"
        color="9C9C9C"
        tekst="With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
      />
    </StyledArticle>
  );
};

export default MovieDescription;
