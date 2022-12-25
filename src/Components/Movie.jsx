import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  console.log(saved);
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

      <p onClick={saveShow}>
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
