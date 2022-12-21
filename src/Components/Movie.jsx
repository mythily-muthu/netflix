import React from "react";

const Movie = () => {
  return (
    <div>
      <div className=" w-[300px] sm:w-[200px] md:w-[250px] lg:w-[350px] inline-block cursor-pointer relative p-2">
        <img
          className=" w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          alt={item?.title}
        />
        <div>
          <p className="absolute top-0  w-full h-full  flex items-center justify-center text-white text-md lg:text-xl hover:bg-black/50">
            {item?.title}
          </p>

          <p>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 right-5 text-red-600" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
