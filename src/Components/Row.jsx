import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

import Movie from "./Movie";

let Row = ({ title, fetchURL, rowID }) => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <h2 className="text-white text-2xl p-4 py-6 ml-6 ">{title}</h2>

      <div className="relative flex items-center p-8 group">
        <MdChevronLeft
          onClick={slideLeft}
          className=" left-0 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full relative overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          className=" right-0 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Row;
