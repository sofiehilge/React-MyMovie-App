import "./App.css";
import Heading from "./components/heading";
import MovieCard from "./templates/MovieCard";
import PopularCard from "./templates/PopularCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Switch from "./components/Switch";
import Footer from "./templates/footer";

function App() {
  // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"

  return (
    <div className="App">
      <header className="gridContainer">
        <Heading title="MyMovies" size="16" as="h1"  />
        {/* Sådan ser et komponent ud når det bruges i React */}
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
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
        <Footer/>
    </div>
  );
}

export default App;
