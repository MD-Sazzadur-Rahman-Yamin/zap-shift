import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar.jsx/Navbar";

const RootLayout = () => {
  return (
    <div className="mx-4 xl:mx-0">
      <div className="max-w-7xl  mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
