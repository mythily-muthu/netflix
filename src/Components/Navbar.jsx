import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = UserAuth();
  console.log("uet:", UserAuth());
  let navigate = useNavigate();

  let handleLogout = async () => {
    try {
      // await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between p-6 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold  cursor-pointer flex">
          NETFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white cursor-pointer p-3 font-bold hover:underline ">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="text-white bg-red-600 rounded px-5 py-2 cursor-pointer font-bold"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="">
          <Link to="/login">
            <button className="text-white cursor-pointer p-3 font-bold hover:underline ">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="text-white bg-red-600 rounded px-5 py-2 cursor-pointer font-bold">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
