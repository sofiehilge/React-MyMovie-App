import "./App.css";
/* import Heading from "./components/heading";
import MovieCard from "./templates/MovieCard";
import PopularCard from "./templates/PopularCard";
import SeeMoreButton from "./components/SeeMoreButton"; */
import HeadingDetails from "./templates/HeadingDetails";
import MovieDetails from "./templates/MovieDetails";
/* import Footer from "./templates/Footer"; */

function App() {
  // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"

  return (
   <div className="App">
      <HeadingDetails/>
      <MovieDetails/>
    </div>
  );
}

export default App;
