import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";

const StyledPlaybutton = styled(AiFillPlayCircle)`
  color: white;
  font-size: 45px;
`;

const Play = () => {
  return <StyledPlaybutton />;
};

export default Play;
