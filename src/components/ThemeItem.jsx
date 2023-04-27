import styled from "styled-components";

const StyledP = styled.p`
/*   width: 61px;
  height: 21px; */
  background-color: #dbe3ff;
  color: #88a4e8;
  /*  border: solid 1px;
  border-color: #aaa9b1; */
  border-radius: 25px;
  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 5px;
  margin: 5px;
  text-align: center;
`;

const ThemeItem = (props) => {
  return <StyledP>{props.title}</StyledP>;
};

export default ThemeItem;
