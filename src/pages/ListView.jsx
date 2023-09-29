import Heading from "../components/Heading";
import PopularCard from "../templates/PopularCard";
import SeeMoreButton from "../components/SeeMoreButton";
import Switch from "../components/Switch";
import Footer from "../templates/Footer";
import NowShowing from "../templates/NowShowing";
/* to punktummer for nu er vi i pages mappen og skal hoppe ud af pages mappen og ind i componenet mappen. */
/* import { useLoaderData } from "react-router-dom"; */
import axios from "axios";

const ListView = () => {
  /*  const ListViewData = useLoaderData(); */

  return (
    <>
      <header className="gridContainer header">
        {/* Sådan ser et komponent ud når det bruges i React */}
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" />
      </header>
      <main className="padding">
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <NowShowing />
          </div>
        </section>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Popular" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div>
            <PopularCard />
          </div>
        </section>
      </main>
      <Footer />
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

export default ListView;

/* Promise samler data der bliver returneret i et samlet return. */
