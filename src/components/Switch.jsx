import styled from "styled-components";
import { useState } from "react";
import ReactSwitch from "react-switch";

const StyledSwitch = styled(ReactSwitch)`
  grid-column-start: 3;
  grid-row-start: 1;
  /*   margin-top: 2rem;
  margin-right: 2rem; */
  justify-self: end;
`;
const Switch = () => {
  const [checked, setChecked] = useState(false); /* darkmode er ikke tændt */
  const handleChange = () => {
    /* Som en eventlistener, der her skal ske på onChange */
    setChecked(!checked); //! er en logical knot, der altid laver en boolean værdi modsat
    
    /* hernede skriver vi logikken så den kan skifte temaet */
  };
  return (
    <StyledSwitch /* Denne styling kan findes inde i documentationen på npmjs, noget af stylingen står i curley brackets fordi de skrives som JS Object. */
      height={
        21
      } /* Når vi skriver styling ind i elementet, skrives de som props med attributer!!! */
      width={38}
      offColor="#AAA9B1"
      onColor="#AAA9B1"
      onHandleColor="#000000"
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={handleChange}
      checked={checked}
    />
  ); /* onChange definere hvad der skal ske når usedState bliver true */
};

export default Switch;
