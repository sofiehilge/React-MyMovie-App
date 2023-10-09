import React from "react";
import { useEffect, useState, useLoaderData } from "react";

const Favorite = () => {
  let id = 550; // useparams
  const [bookmark, setBookmark] = useState(false);
  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmM1ODVkNDg0NTlhMjZmNjljMWQ1NjQ4NDRlNzIzYyIsInN1YiI6IjY0NThhYmFmMTU2Y2M3MDE1ZTc2Y2MwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-ZwpBQ3wzAdUPml2iesppkiSjjSZnIR33ijQ7QcRA8",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: id,
        favorite: bookmark,
      }),
    };

    fetch("https://api.themoviedb.org/3/account/19377915/favorite", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, [bookmark]);

  return (
    <>
     
        <main className="flex wrap justify-around">
          <section className=" relative flex flex-col dark:bg-black pb-6">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                className="w-314px"
              />
            </figure>
            <h3 className="dark:text-white text-sm ">Movie title</h3>
            <div className="flex">
              <FaStar className="text-amber-400" />
              <p className="text-gray ml-4">10.5/10IMDb</p>
            </div>
          </section>
        </main>
    
    </>
  );
};

export default Favorite;
