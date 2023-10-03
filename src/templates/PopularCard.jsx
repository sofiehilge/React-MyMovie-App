import styled from "styled-components";
import Image from "../components/Image"; // Image navnet er ligemeget, men det skal hedde det samme i import og i component tagget.
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import ThemeItem from "../components/ThemeItem";
import Time from "../components/Time";
import { Link, useLoaderData} from "react-router-dom";

const StyledArticle = styled.article`
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
`;

const PopularCard = () => {

  const MovieCardData = useLoaderData();

  return (
    <>
      {MovieCardData.popular.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle>
            <figure>
              <Image
                width="85"
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                alt="cover Image"
              />
            </figure>
            <StyledDiv>
              <Heading title={data.title} size="14" as="h3" />
              <MovieRating voteAverage={data.vote_average} />
              <StyledFlexContainer className="flexContainer">
                <ThemeItem title="Horror" />
                <ThemeItem title="Mystery" />
                <ThemeItem title="Thriller" />
              </StyledFlexContainer>
              <Time date={data.release_date}/>
            </StyledDiv>
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};

export default PopularCard;
