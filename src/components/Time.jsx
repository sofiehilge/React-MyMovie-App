import styled from "styled-components";
import { HiOutlineClock }  from "react-icons/hi"; //react-icons giver adgang til filen, FaStar er navnet på ikonet¨

const StyledClock = styled(HiOutlineClock)`
  color: #000;
`;
const StyledP = styled.p`
  color: #000;
/*   margin-left: 4px; */
`;
const StyledDiv = styled.div`
  display: flex;
`;

const Time = () => {
  return (
    <StyledDiv> {/* Her bruger vi en div som container, da vi skal bruge den til styling. */}
      <StyledClock />
      <StyledP>1h 47m</StyledP>
    </StyledDiv>
  );
};

export default Time;
