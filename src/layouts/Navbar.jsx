import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.value);

  return (
    <nav className="flex flex-col md:flex-row gap-4 items-center justify-between p-5">
      <div>
        <h1 className="font-bold text-[oklch(58.8%_0.158_241.966)] text-3xl md:text-4xl">
          WorldPlatter
        </h1>
      </div>

      <div>
        <ul className="flex text-lg gap-6 text-[oklch(58.8%_0.158_241.966)]">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="menu">
            <li>Menu</li>
          </Link>

          <Link to="myorders">
            <li>My Orders</li>
          </Link>

          <Link to="about">
            <li>About</li>
          </Link>

          <Link to="contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-4">
        <Link to="cart">
          <button className="cursor-pointer text-3xl text-[oklch(68.1%_0.162_75.834)]">
            <i className="bi bi-cart-fill"></i>({cartCount.length})
          </button>
        </Link>

        <Link to="login">
          <button className="bg-[oklch(60.9%_0.126_221.723)] text-white rounded p-2 cursor-pointer">
            Login
          </button>
        </Link>

        <Link to="signup">
          <button className="bg-[oklch(60%_0.118_184.704)] text-white rounded p-2 cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
