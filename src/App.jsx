import "./App.css";
import Heading from "./components/Heading";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Switch from "./components/Switch";

function App() {
    // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"

  return (
    <div className="App">
      <header className="gridContainer">
       <h1 style={{fontSize: "16px", justifySelf: "center"}}>My Movies</h1>
                {/* Sådan ser et komponent ud når det bruges i React */}
                <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <h2>Now Showing</h2>
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
