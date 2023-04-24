import styled from "styled-components";

const Heading = styled.h1`
  font-size: 16px;
  color: #110e47;a
  border: solid 1px red;
  justify-self: center;
`;

const HeadingOne = () => {
  return <Heading>Overskrift</Heading>;
};

/* Bagefter bliver den lavet om til en props, så den kan blive dynamisk, da h1 hedder my Movies på forsiden og SPiderman returns på den næste side. */
/* Denne konstant er en fnktion der returnere et element. */

export default HeadingOne; //skal importeres hvor den skal bruges, i vores app.jsx som indeholder vores struktur.

