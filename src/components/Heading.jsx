import styled from "styled-components";


const Heading = ({text, size, type}) => {
    const StyledHeading = styled(type)`
      font-size: ${size};
      font-weight: 
      color: #110e47;
      justify-self: center;

    `;
  return <StyledHeading>{text}</StyledHeading>;
};

/* const Heading = (props) => {
  return <StyledHeading>{props.text}</StyledHeading>;
}; */

/* Bagefter bliver den lavet om til en props, så den kan blive dynamisk, da h1 hedder my Movies på forsiden og SPiderman returns på den næste side. */
/* Denne konstant er en fnktion der returnere et element. */

export default Heading; //skal importeres hvor den skal bruges, i vores app.jsx som indeholder vores struktur.

