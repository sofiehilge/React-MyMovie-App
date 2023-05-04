import Lottie from "lottie-react";
import dinoAnimation from "../assets/lottiefiles/error.json";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const StyledLottie = styled(Lottie)`
  width: 100vw;
  height: 100vw;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ErrorView = () => {
  return (
    <StyledLink>
      <Heading title="Sorry something went wrong" size="24" as="h2" />
      <StyledLottie animationData={dinoAnimation} />;
      <Heading title="Click here to return to frontpage" size="18" as="h2" />
    </StyledLink>
  );
};

export default ErrorView;
