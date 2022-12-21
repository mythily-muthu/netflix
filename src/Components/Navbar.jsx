import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-6 absolute w-full">
      <h1 className="text-red-600 text-4xl font-bold flex">NETFLIX</h1>
      <div className="">
        <button className="text-white cursor-pointer p-3 font-bold">
          Sign In
        </button>
        <button className="text-white bg-red-600 rounded px-5 py-2 cursor-pointer font-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
