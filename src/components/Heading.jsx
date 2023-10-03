/* Fordi heading er så ens altså både h1, h2, h3 osv, ligner hinanden så meget så det kan betale sig at lave en komponenet for dem. Men vi ville ikke gøre det med billeder etc.  */

import styled from "styled-components"; /* muliggøre stykkubg */

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  ${(props) => props.center && "text-align:center"}
  grid-column-start: 2; /* De her vil ikke influere på de andre headings, da de ligger i flexbox og ikke i en grid container. */
  justify-self: center; /* Du kan altså også både style med props og fra hardcoding styling */
`;
/* Når vi definere px inde i styled component sørger vi for at den der bruger komponenet ikke selv kan breake komponentet. */

const Heading = (props) => {
  return (
    //<StyledHeading size={props.size} weight={props.weight} as={props.as}>{props.title}</StyledHeading>
    <StyledHeading className="dark:text-white" {...props}>
      {props.title}
    </StyledHeading>
  );
};

/* const Heading = (props) => {
  return <StyledHeading>{props.text}</StyledHeading>;
}; */

/* Bagefter bliver den lavet om til en props, så den kan blive dynamisk, da h1 hedder my Movies på forsiden og SPiderman returns på den næste side. */
/* Denne konstant er en fnktion der returnere et element. */

export default Heading; //skal importeres hvor den skal bruges, i vores app.jsx som indeholder vores struktur.
