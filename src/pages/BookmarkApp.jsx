import React, { useState } from "react";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
import Footer from "../templates/Footer";
import MovieRating from "../components/MovieRating";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeItem from "../components/ThemeItem";

const BookmarkApp = () => {
  const [favoriteListData, setFavoriteListData] = useState();
  console.log(favoriteListData);
  useEffect(() => {
    /* -------------------------Fetch favorites---------------------- */
    const favorite_options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmM1ODVkNDg0NTlhMjZmNjljMWQ1NjQ4NDRlNzIzYyIsInN1YiI6IjY0NThhYmFmMTU2Y2M3MDE1ZTc2Y2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-ZwpBQ3wzAdUPml2iesppkiSjjSZnIR33ijQ7QcRA8",
      }, //"Bearer" + import.meta.env.VITE_TMBD---
    };

    fetch(
      "https://api.themoviedb.org/3/account/19377915/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      favorite_options
    )
      .then((response) => response.json())
      .then((response) => setFavoriteListData(response))
      .catch((err) => console.error(err));
    /* -----------------------fetch genre---------------------- */
    const genre_options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmM1ODVkNDg0NTlhMjZmNjljMWQ1NjQ4NDRlNzIzYyIsInN1YiI6IjY0NThhYmFmMTU2Y2M3MDE1ZTc2Y2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-ZwpBQ3wzAdUPml2iesppkiSjjSZnIR33ijQ7QcRA8",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      genre_options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []); //dependency array, defines dependency for the effect- til formål at den kun opdateres ved initial render.
  return (
    <>
      <header className="padding bg-white dark:bg-black">
        <Heading
          className="dark:text-lightblue"
          title="BookMarks"
          s
          size="16"
          as="h1"
        />
        <Switch />
      </header>
      <main className="flex wrap justify-around  bg-white dark:bg-black">
        {/* min-height: calc(100vh - antal px som footer og header har) */}
        {favoriteListData &&
          favoriteListData.results.map(
            (
              data /* Til en start er favoriteListData undefined-> false, når data er hentet så er den true, og så vil vi mappe gennem data.  */
            ) => (
              <Link
                to={`../details/${data.id}`}
                className=" relative flex flex-col  bg-white dark:bg-black pb-6"
                key={data.id}
              >
                <figure>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                    className="w-32"
                  />
                </figure>
                <Heading
                  title={
                    data.title.length > 25
                      ? data.title.split(" ").slice(0, 3).join(" ") + "..."
                      : data.title
                  }
                  size="14"
                  as="h3"
                />
                <div className="flex">
                  <FaStar className="text-amber-400" />
                  <MovieRating voteAverage={data.vote_average} />
                </div>
                <div className="flex gap-4">
                  <ThemeItem />
                 
                </div>
              </Link>
            )
          )}
      </main>
      <Footer />
    </>
  );
};

export default BookmarkApp;
