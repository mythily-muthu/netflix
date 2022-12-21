import axios from "axios";
import React, { useEffect, useState } from "react";

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
          {movies?.map((item) => (
            <div className=" w-[300px] sm:w-[200px] md:w-[250px] lg:w-[350px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0  w-full h-full  flex items-center justify-center text-white text-md lg:text-xl hover:bg-black/50">
                <p>{item?.title}</p>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Row;
