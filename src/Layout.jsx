import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Sidebar />
      {/* <Home /> */}
    </>
  );
}
