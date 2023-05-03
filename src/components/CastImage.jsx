import styled from "styled-components";
import tom from "../assets/tom.png";
/* import zendaya from "../assets/zendaya.png";
import benedict from "../assets/benedict.png";
import jacon from "../assets/jacon.png"; */

const StyledImg = styled.img`
  border-radius: 5%;
  height: 78px;
  width: 78px;
`;

const CastImage = () => {
  return <StyledImg src={tom} alt="portrait" />;
};

export default CastImage;
