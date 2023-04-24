import styled from "styled-components";

const Button = styled.button`
  width: 61px;
  height: 21px;
  background-color: white;
  color: #aaa9b1;
  border: solid 1px;
  border-color: #aaa9b1;
  border-radius: 25px;
  font-size: 10px;
`;

const SeeMoreButton = () => {
  return <Button>See more</Button>;/* Stadigvæk et komponent, selvom den ikke er selvlukkende */
};

export default SeeMoreButton;
