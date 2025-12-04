import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.value);

  const [open, setOPen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handletoggleMode = () => {
    setIsDark((isDark) => {
      const newMode = !isDark;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black p-5">
      <div className="flex gap-4 items-center justify-between">
        <div>
          <h1 className="font-bold text-[oklch(58.8%_0.158_241.966)] dark:text-[oklch(74.6%_0.16_232.661)] text-xl md:text-2xl lg:text-3xl">
            WorldPlatter
          </h1>
        </div>

        <ul className="hidden md:flex text-lg gap-6 text-[oklch(58.8%_0.158_241.966)] dark:text-[oklch(74.6%_0.16_232.661)]">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="menu">
            <li>Menu</li>
          </Link>

          <Link to="about">
            <li>About</li>
          </Link>

          <Link to="contact">
            <li>Contact</li>
          </Link>
        </ul>

        <div className="flex items-center gap-5 text-[oklch(58.8%_0.158_241.966)] dark:text-[oklch(74.6%_0.16_232.661)]">
          <button
            onClick={handletoggleMode}
            className="cursor-pointer text-2xl"
          >
            {isDark ? (
              <i className="bi bi-brightness-high"></i>
            ) : (
              <i className="bi bi-moon"></i>
            )}
          </button>

          <Link to="cart">
            <div className="relative">
              <i className="bi bi-cart3 text-2xl "></i>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <i className="bi bi-person text-3xl"></i>
          </Link>
        </div>

        <button
          className="md:hidden text-4xl text-[oklch(58.8%_0.158_241.966)] dark:text-[oklch(74.6%_0.16_232.661)]"
          onClick={() => setOPen(!open)}
        >
          <i className={`bi ${open ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>

      {open && (
        <ul className="flex flex-col text-lg gap-6 text-[oklch(58.8%_0.158_241.966)] dark:text-[oklch(74.6%_0.16_232.661)] mt-4">
          <Link to="/" onClick={() => setOPen(false)}>
            <li>Home</li>
          </Link>

          <Link to="menu" onClick={() => setOPen(false)}>
            <li>Menu</li>
          </Link>

          <Link to="about" onClick={() => setOPen(false)}>
            <li>About</li>
          </Link>

          <Link to="contact" onClick={() => setOPen(false)}>
            <li>Contact</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
