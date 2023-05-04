import styled from "styled-components";

const Styledparagraf = styled.p`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: #${(props) => props.color};
  /* ${(props) => props.width && 'width:78px'} */
`;

const Paragraf = (props) => {
  return <Styledparagraf {...props}>{props.tekst}</Styledparagraf>;
};

export default Paragraf;
