import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Now Playing" fetchURL={requests.requestNowPlaying} />
      <Row title="Latest" fetchURL={requests.requestLatest} />
    </>
  );
};

export default Home;
