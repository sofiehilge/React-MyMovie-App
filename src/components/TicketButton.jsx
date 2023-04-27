import styled from "styled-components";
import { BsTicket } from "react-icons/bs";

const StyledButton = styled.button`
color: #110e47;
background: none;
font-size: 2 rem;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  rotate: 90deg;
`;

const TicketButton = () => {
  return <StyledButton>
    <BsTicket/>
  </StyledButton>
};

export default TicketButton;
