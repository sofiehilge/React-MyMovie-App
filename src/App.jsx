import "./App.css";
import Heading from "./components/heading";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Switch from "./components/Switch";

function App() {
  // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"

  return (
    <div className="App">
      <header className="gridContainer">
        <Heading title="MyMovies" size="16"  weight="bold" color="#110E47" grid="" as="h1"/>
        {/* Sådan ser et komponent ud når det bruges i React */}
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16" weight="regular" color="#110E47" as="h2"/>
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
