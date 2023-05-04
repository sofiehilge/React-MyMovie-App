import Heading from "../components/Heading";
import MovieCard from "../templates/MovieCard";
import PopularCard from "../templates/PopularCard";
import SeeMoreButton from "../components/SeeMoreButton";
import Switch from "../components/Switch";
import Footer from "../templates/footer";
import { Link } from "react-router-dom";
/* to punktummer for nu er vi i pages mappen og skal hoppe ud af pages mappen og ind i componenet mappen. */

const ListView = () => {
  return (
    <>
      <header className="gridContainer padding">
        <Heading title="MyMovies" size="16" as="h1" />
        {/* Sådan ser et komponent ud når det bruges i React */}
        <Switch />
      </header>
      <main className="padding">
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <Link to="/details/1">
              {/* to matcher path i router, derfor renderer den detaljesiden når man trykker på moviecard.
               */}
              <MovieCard />
            </Link>

            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Popular" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div>
            <PopularCard />
            <PopularCard />
            <PopularCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ListView;
