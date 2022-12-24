//import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { user, SignUp } = UserAuth();
  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignUp(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block  absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed  w-full h-screen"></div>
      <div className="fixed px-4 py-24  w-full z-50">
        <div className="max-w-[450px] h-[600px] bg-black/75 text-white  mx-auto">
          <div className=" max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-extrabold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="my-7">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" py-2 rounded bg-gray-700 w-full  hover:border pl-3 "
                placeholder="Email"
                type="email"
              ></input>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="my-3 py-2 rounded bg-gray-700 w-full  hover:border pl-3"
                placeholder="Password"
                type="password"
              ></input>

              <button className="my-5 py-2 rounded bg-orange-700 w-full   font-bold cursor-pointer">
                Sign Up
              </button>
              <div className="flex justify-between mt-2">
                <p className="cursor-pointer   text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>

                <p className="mb-8  text-gray-600 cursor-pointer">Need help?</p>
              </div>
              <p>
                <span className=" text-gray-600 text-sm ">
                  Already subscribed to Netflix?
                </span>{" "}
                <Link
                  to="/login"
                  className="font-extrabold text-white cursor-pointer "
                >
                  Sign In.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
