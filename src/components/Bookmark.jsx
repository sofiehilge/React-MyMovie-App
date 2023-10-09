import React, { useState, useEffect } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
/* import { useFavorite } from "../hooks/useFavorite";  dette er en måde at få bookmark hvis man har et APi som ikke tilbyder et endpoint med favoriet- hint svendeprøven!!*/
import { useBookmark } from "../hooks/useBookmark";

const Bookmark = () => {
  const { id } =
    useParams(); /* idet skal gemmes i en database, her kigger vi under api add favorites.  */
  const favorite = useBookmark(parseInt(id));
  const [bookmark, setBookmark] =
    useState(
      undefined
    ); /* værdi skal være dynamisk, da den nogle gange fortsat skal være booked. */
  useEffect(()=> {
    favorite && setBookmark(favorite);
  }, [favorite]);
  
  const [render, setRender] = useState(false);
  
  useEffect(() => {
    if (render) {
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
    }
    setRender(true);
  }, [
    bookmark,
  ]); /* indsæt dependency array, tomt betyder at det kun køre på inital render. */

  return (
    <span
      onClick={() => {
        setBookmark(!bookmark);
      }}
    >
      {bookmark ? <BsFillBookmarkFill /> : <BsBookmark />}
    </span>
  );
};

export default Bookmark;
