import React, { useState } from "react";
import Navber from "../Components/Navbar";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Mainlayout() {
  const [theme, setTheme] = useState("light"); // default theme

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div data-theme={theme} className=" overflow-x-hidden ">
      {/* <Navbar></Navbar> */}
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Mainlayout;
