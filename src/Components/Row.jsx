import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

let Row = ({ title, fetchURL }) => {
  let [movies, setMovies] = useState([]);
  let [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log("movie", movies);

  return (
    <div>
      <h2 className="text-white text-2xl p-4 py-6 ml-6 ">{title}</h2>

      <div className="relative flex items-center p-8 ">
        <div id={"slider"}>
          {movies?.map((item) => (
            
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Row;
