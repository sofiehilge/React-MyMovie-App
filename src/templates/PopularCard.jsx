import styled from "styled-components";
import Image from "../components/Image"; // Image navnet er ligemeget, men det skal hedde det samme i import og i component tagget.
import Heading from "../components/heading";
import MovieRating from "../components/MovieRating";
import ThemeItem from "../components/Themeitem";
import Time from "../components/Time";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  gap: 15px;
`;

const StyledFlexContainer = styled.div`
gap: 15px;
`

const PopularCard = () => {
  return (
    <StyledArticle>
      <figure>
        <Image />
      </figure>
      <StyledDiv>
        <Heading title="Movie Title" size="14" as="h3" />
        <MovieRating />
        <StyledFlexContainer className="flexContainer">
          <ThemeItem title="Horror" />
          <ThemeItem title="Mystery" />
          <ThemeItem title="Thriller" />
        </StyledFlexContainer>
        <Time />
      </StyledDiv>
    </StyledArticle>
  );
};

export default PopularCard;
