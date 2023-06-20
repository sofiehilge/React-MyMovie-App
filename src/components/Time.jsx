import styled from "styled-components";

const StyledP = styled.p`
  color: rgb 156, 156, 156;
/*   margin-left: 4px; */
`;
const StyledDiv = styled.div`
  display: flex;
`;

const Time = (props) => {
  return (
    <StyledDiv> {/* Her bruger vi en div som container, da vi skal bruge den til styling. */}
      <StyledP>Release: {props.date}</StyledP>
    </StyledDiv>
  );
};

export default Time;
