import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Features from "../Components/Features";
import Newsletter from "../Components/Newsletter";
import Gallery from "../Components/Gallery";
import EventGallery from "../Components/EventGallery";
import ImpactTracker from "./ImpactTracker";
import ImpactHubTagline from "../Components/ImpactHubTagline";
import RecentEvents from "../Components/RecentEvents";

function Home() {
  return (
    <div className=" min-h-38  mx-auto">
      <Helmet>
        <title>Impacthub | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <RecentEvents />
      <ImpactTracker></ImpactTracker>
      <Gallery></Gallery>
      <Newsletter></Newsletter>
    </div>
  );
}

export default Home;
