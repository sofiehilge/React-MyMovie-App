import Lottie from "lottie-react";
import dinoAnimation from "../assets/lottiefiles/gySN7JLsNO.json";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

import ThemeItem from "../components/ThemeItem";

const StyledLottie = styled(Lottie)`
  width: 100vw;
  height: 100vw;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ErrorView = () => {
  return (
    <StyledDiv>
      <Heading
        title="Sorry, we can't show that page!"
        size="16"
        center={true}
        as="h2"
      />
      <StyledLottie animationData={dinoAnimation} />
      <Link to="/">
        <ThemeItem title="Back to front page" />
      </Link>
    </StyledDiv>
  );
};

export default ErrorView;
