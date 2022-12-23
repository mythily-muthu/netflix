import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-6 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold  cursor-pointer flex">
          NETFLIX
        </h1>
      </Link>

      <div className="">
        <Link to="/login">
          <button className="text-white cursor-pointer p-3 font-bold">
            Sign In
          </button>
        </Link>

        <Link to="/signup">
          <button className="text-white bg-red-600 rounded px-5 py-2 cursor-pointer font-bold">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
