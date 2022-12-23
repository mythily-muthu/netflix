import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item, id }) => {
  let [like, setLike] = useState(false);

  return (
    <div className=" w-[300px] sm:w-[200px] md:w-[250px] lg:w-[350px]  inline-block cursor-pointer  relative p-1 ml-3">
      <img
        className=" w-full h-full "
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item?.title}
      />

      <p className="absolute top-0  w-full h-full  flex items-center justify-center text-white text-md sm:text-xs sm:font-bold md:text-sm lg:text-xl hover:bg-black/60">
        {item?.title}
      </p>

      <p>
        {like ? (
          <FaHeart className="absolute top-4 right-5 text-red-600" />
        ) : (
          <FaRegHeart className="absolute top-4 right-5 text-gray-300 " />
        )}
      </p>
    </div>
  );
};

export default Movie;
