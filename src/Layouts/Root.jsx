import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="max-w-screen-xl mx-auto w-full px-4 lg:px-12 py-8 lg:py-4 flex-1">
        <Outlet></Outlet>
      </main>
      <footer className="grid-cols-2 lg:grid-cols-3">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
