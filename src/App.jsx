import "./App.css";
import Heading from "./components/Heading";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";

function App() {
    // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"

  return (
    <div className="App">
      <header className="gridContainer">
        <Heading text="MyMovies" size="16px" type="h1"/>
                {/* Sådan ser et komponent ud når det bruges i React */}
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading text="Now Showing" size="16px" type="h2"/>
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
