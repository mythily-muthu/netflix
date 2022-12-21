import axios from "axios";
import React, { useEffect, useState } from "react";

import Movie from "./Movie";

let Row = ({ title, fetchURL }) => {
  let [movies, setMovies] = useState([]);

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
          {movies?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
