/* import Heading from "./components/heading";
import MovieCard from "./templates/MovieCard";
import PopularCard from "./templates/PopularCard";
import SeeMoreButton from "./components/SeeMoreButton"; */
import HeadingDetails from "../templates/HeadingDetails";
import MovieDetails from "../templates/MovieDetails";
import MovieDescription from "../templates/MovieDescription";
import Heading from "../components/Heading";
import SeeMoreButton from "../components/SeeMoreButton";
import CastImage from "../components/CastImage";
import Paragraf from "../components/Paragraf";
/* import Footer from "./templates/Footer"; */

const DetailApp = () => {
  return (
    <>
      <HeadingDetails />
      <MovieDetails />
      <MovieDescription />
      <div className="flexContainer space-between padding">
        <Heading title="Cast" size="16" as="h2" />
        <SeeMoreButton />
      </div>
      <div className="flexContainer space-between padding">
        <div className="flexContainer column">
          <CastImage />
          <Paragraf tekst="Tom Holland" size="12" color="110E47" />
        </div>
        <div className="flexContainer column">
          <CastImage />
          <Paragraf tekst="Zendaya" size="12" color="110E47" />
        </div>
        <div className="flexContainer column">
          <CastImage />
          <Paragraf tekst="Benedict Cumberbatch" size="12" color="110E47" />
        </div>
        <div className="flexContainer column">
          <CastImage />
          <Paragraf tekst="Jacon Batalon" size="12" color="110E47" />
        </div>
      </div>
    </>
  );
};

export default DetailApp;
// da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"
