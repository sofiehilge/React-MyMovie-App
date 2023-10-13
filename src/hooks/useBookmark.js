/* Denne returnere ikke noget jsx, kun en boolean, derfor kan vi kalde filen for js */
import { useState, useEffect } from "react";
export function useBookmark(id) {
  /* det får vi fra vores useParams på detalje siden, på den måde kan vi tjekke om id'et er bookmarked eller ej */
  const [favorite, setFavorite] = useState(undefined);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmY0NzQ2NmFhYmIwNjY2N2Q1ZTE1YTNlZDhlNzdhOSIsInN1YiI6IjY0NThhYmFmMTU2Y2M3MDE1ZTc2Y2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.POw3YsVvhBejuI-xAT8xvwV9QKg8QSoCARfQzH76uhY",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}/account_states`, options)
      .then((response) => response.json())
      .then((response) => setFavorite(response.favorite))
      .catch((err) => console.error(err));
  }, []);

  return favorite;
}

// hvis man vil teste en function med et array eg. kan man tjekke om det fungere ved at tjekke den i terminalen. Man går ind i mappen ved at skrive cd - mappe navn eg. cd src hooks: skriv da: node [filnavn] så viser den hvad filen returnere. HUSK at kalde functionen useFavorite()
