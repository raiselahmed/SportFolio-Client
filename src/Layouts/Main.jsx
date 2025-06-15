import React from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div className="bg-transparent">
      <header className=" container sticky top-0 z-50  bg-transparent  mx-auto px-4">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <footer className="container mx-auto px-4">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;
