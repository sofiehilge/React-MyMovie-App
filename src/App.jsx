import "./App.css";
import HeadingOne from "./components/HeadingOne";
import MovieCard from "./templates/MovieCard";
import HeadingTwo from "./components/HeadingTwo";
import SeeMoreButton from "./components/SeeMoreButton";

function App() {
    // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"

  return (
    <div className="App">
      <header className="gridContainer">
        <HeadingOne />
                {/* Sådan ser et komponent ud når det bruges i React */}
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <HeadingTwo />
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
