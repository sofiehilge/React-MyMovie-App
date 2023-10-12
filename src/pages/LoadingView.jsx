import Lottie from "lottie-react";
import movieanimation from "../assets/lottiefiles/animation_lnmxaccj.json";
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

const LoadingView = () => {
  return (
    <StyledDiv>
      <Heading title="Loading..." size="16" center={true} as="h2" />
      <StyledLottie animationData={movieanimation} />
      <Link to="/">
        <ThemeItem title="Back to front page" />
      </Link>
    </StyledDiv>
  );
};

export default LoadingView;
