/* Denne returnere ikke noget jsx, kun en boolean, derfor kan vi kalde filen for js */
import { useState, useEffect } from "react";
export function useFavorite(id) {
  /* det får vi fra vores useParams på detalje siden, på den måde kan vi tjekke om id'et er bookmarked eller ej */
  const [favorite, setFavorite] = useState(undefined);
  useEffect(() => {
    /* et fetch er en side effect, vi vil kun have den til at køre på initial */
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmM1ODVkNDg0NTlhMjZmNjljMWQ1NjQ4NDRlNzIzYyIsInN1YiI6IjY0NThhYmFmMTU2Y2M3MDE1ZTc2Y2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-ZwpBQ3wzAdUPml2iesppkiSjjSZnIR33ijQ7QcRA8",
      },
    };
    fetch(
      "https://api.themoviedb.org/3/account/19377915/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      options
    )
      .then((response) => response.json())
      .then((response) =>{
        console.log(response.results.length);
        const isFavorite = response.retults.some((obj)=>obj.id === (id))
        setFavorite(isFavorite);
      }) /* some iterere igennem listen og sammenligner idet og returnere kun dem der matcher. */
      .catch((err) => console.error(err));
  }, []);

  return favorite;
}

// hvis man vil teste en function med et array eg. kan man tjekke om det fungere ved at tjekke den i terminalen. Man går ind i mappen ved at skrive cd - mappe navn eg. cd src hooks: skriv da: node [filnavn] så viser den hvad filen returnere. HUSK at kalde functionen useFavorite()
