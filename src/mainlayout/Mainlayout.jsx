import React from "react";
import Navber from "../Components/Navbar";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Mainlayout() {
  return (
    <div className=" overflow-x-hidden ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Mainlayout;
