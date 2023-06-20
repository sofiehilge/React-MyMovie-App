import styled from "styled-components";
/* import tom from "../assets/tom.png"; */
/* import zendaya from "../assets/zendaya.png";
import benedict from "../assets/benedict.png";
import jacon from "../assets/jacon.png"; */
import Paragraf from "../components/Paragraf";
import { useLoaderData } from "react-router-dom";

const StyledImg = styled.img`
  border-radius: 5%;
  height: 78px;
  width: 78px;
  object-fit: cover;
`;

const StyledDiv = styled.div`
  display: flex;
  flex: wrap;
`;

const CastImage = () => {
  const { cast } = useLoaderData();
  return (
    <>
      {cast.map((data) => (
        <StyledDiv className="space"
          key={data.id}
        >
          <figure className="flexContainer column">
            <StyledImg
              src={`https://image.tmdb.org/t/p/w200/${data.profile_path}`}
              alt="portrait"
            />
            <Paragraf tekst={data.name} size="12" color="110E47" />
          </figure>
        </StyledDiv>
      ))}
    </>
  );
};

export default CastImage;
