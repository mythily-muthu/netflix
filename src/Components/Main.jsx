import React, { useState, useEffect } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  let [movies, setMovies] = useState([]);
  //let [movie, setMovie] = useState({});

  const getMovies = async () => {
    let response = await axios.get(requests.requestPopular);
    console.log(response.data.results);
    setMovies(response.data.results);
  };
  console.log("movies;");
  let movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    getMovies();
    //let interval = setInterval(() => {
    //setMovie(movies[Math.floor(Math.random() * movies.length)]);
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);
  //console.log("movie:", movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className=" absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
      <div className="w-full h-[550px]  ">
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>

      <div className=" absolute w-full top-[20%] p-8 ">
        <h1 className="w-full text-5xl py-2 font-bold flex">{movie?.title}</h1>
        <div>
          <button className="text-gray-800 border bg-white text-xl px-5 py-2 ">
            Play
          </button>
          <button className="text-white border bg-black-300 text-xl  px-4 py-2 ml-5">
            Watch Later
          </button>
        </div>

        <div className="w-[50%] absolute md:w-[70%] sm:w-[100%] lg:w-[50%]">
          <p className="mt-6 text-gray-300">Released {movie?.release_date}</p>
          <p className="py-2 text-white ">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
