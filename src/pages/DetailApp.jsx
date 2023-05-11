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
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

const DetailApp = () => {
  const {id} = useParams();
  const ListViewData = useLoaderData();
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

export const listViewData = async () => {
  return await Promise.allSettled([
    await axios(
      "https://api.themoviedb.org/3/movie/now_playing/?api_key=46c585d48459a26f69c1d564844e723c"
    ),
    await axios(
      "https://api.themoviedb.org/3/movie/popular/?api_key=46c585d48459a26f69c1d564844e723c"
    ),
  ]).then((values) => {
    console.log("Value: ", values);
    return {
      nowShowing: values[0].value.data.results,
      popular: values[1].value.data.results,
    };
  });
};

export default DetailApp;
// da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"
