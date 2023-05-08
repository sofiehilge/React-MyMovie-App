import styled from "styled-components";
import { FaStar } from "react-icons/fa"; //react-icons giver adgang til filen, FaStar er navnet på ikonet¨

const StyledFaStar = styled(FaStar)`
  color: #ffc319;
`;
const StyledP = styled.p`
  color: #9c9c9c;
  margin-left: 4px;
`;
const StyledDiv = styled.div`
  display: flex;
`;

const MovieRating = (props) => {
  return (
    <StyledDiv>
      {" "}
      {/* Her bruger vi en div som container, da vi skal bruge den til styling. */}
      <StyledFaStar />
      <StyledP>{props.voteAverage}/10 IMDb</StyledP>
    </StyledDiv>
  );
};

export default MovieRating;
