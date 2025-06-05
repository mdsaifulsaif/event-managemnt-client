import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Features from "../Components/Features";

function Home() {
  return (
    <div className=" min-h-38  mx-auto">
      <Helmet>
        <title>Ninja | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
    </div>
  );
}

export default Home;
