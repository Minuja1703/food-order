import React from "react";
import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router-dom";
import { featured } from "../data/foodItems";

function Root() {
  if (!localStorage.getItem("adminData")) {
    localStorage.setItem(
      "adminData",
      JSON.stringify({
        email: "admin@gmail.com",
        password: "admin123",
      })
    );
  }

  if (!localStorage.getItem("foodItems")) {
    localStorage.setItem("foodItems", JSON.stringify(featured));
  }

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default Root;
