import styled from "styled-components";

const Styledparagraf = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: #${(props) => props.color};
`;

const Paragraf = (props) => {
  return <Styledparagraf {...props}>{props.tekst}</Styledparagraf>;
};

export default Paragraf;
