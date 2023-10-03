import styled from "styled-components";
import anonym from "../assets/anonym.png";
// import tom from "../assets/tom.png";
// import zendaya from "../assets/zendaya.png";
// import benedict from "../assets/benedict.png";
// import jacon from "../assets/jacon.png";

import { useLoaderData } from "react-router-dom";

const StyledImg = styled.img`
  border-radius: 5%;
  height: 78px;
  width: 78px;
  object-fit: cover;
`;

const StyledFig = styled.figure`
  width: 78px;
  height: 78px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFigcaption = styled.figcaption`
  word-wrap: break-word;
  font-size: 12px;
  color: #110e47;
`;

const CastImage = () => {
  const { cast } = useLoaderData();
  return (
    <>
      {cast.map((data) => (
        <StyledFig key={data.id}>
          <StyledImg
            // src={`https://image.tmdb.org/t/p/w200/${data.profile_path ? data.profile_path}`}
            src={
              data.profile_path
                ? `https://image.tmdb.org/t/p/w200/${data.profile_path}`
                : anonym
            }
            alt="portrait"
          />
          <StyledFigcaption className="dark:text-white">
            {data.name}
          </StyledFigcaption>
        </StyledFig>
      ))}
    </>
  );
};

export default CastImage;
