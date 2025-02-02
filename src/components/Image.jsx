import styled from "styled-components";
//billedet skal importeres øverst i React, stien lægges da ned i coverimage variablen, sådan at man kan kalde den. Når man skal lave attributer i react, laves det med curlybrackets.

const StyledImg = styled.img`
 ${(props) => props.shadow && 'box-shadow: 0px 5px 10px rgb(0 0 0 / 0.5);' };
  border-radius: 5%;
`;

const Image = (props) => {
  return <StyledImg {...props} alt="moviecover"/>;
};
//alt hvad der står i constanten er javascript.

export default Image;

//{... props} spreder al styllingen ud over alle elementerne

//&& logical and