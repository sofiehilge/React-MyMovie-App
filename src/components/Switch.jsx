import styled from "styled-components";
import { useOutletContext } from "react-router";
import ReactSwitch from "react-switch";

const StyledSwitch = styled(ReactSwitch)`
  grid-column-start: 3;
  grid-row-start: 1;
  margin-top: 2rem;
  margin-right: 2rem;
  justify-self: end;
`;
const Switch = (props) => {
  const [darkmode, setDarkmode] = useOutletContext();

  const handleChange = () => {
    /* Som en eventlistener, der her skal ske på onChange */
    setDarkmode(!darkmode);
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
      checked={darkmode}
      onChange={handleChange}
    />
  ); /* onChange definere hvad der skal ske når usedState bliver true */
};

export default Switch;
