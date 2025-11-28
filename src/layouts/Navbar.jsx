import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.value);

  const [open, setOPen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white  p-5">
      <div className="flex gap-4 items-center justify-between">
        <div>
          <h1 className="font-bold text-[oklch(58.8%_0.158_241.966)] text-xl md:text-2xl lg:text-3xl">
            WorldPlatter
          </h1>
        </div>

        <ul className="hidden md:flex text-lg gap-6 text-[oklch(58.8%_0.158_241.966)]">
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

        <div className="flex items-center gap-5 text-[oklch(58.8%_0.158_241.966)]">
          <Link to="cart">
            <div className="relative">
              <i className="bi bi-cart3 text-2xl "></i>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount.length}
              </span>
            </div>
          </Link>

          <Link to="login">
            <i className="bi bi-person text-3xl"></i>
          </Link>
        </div>

        <button
          className="md:hidden text-4xl text-[oklch(58.8%_0.158_241.966)]"
          onClick={() => setOPen(!open)}
        >
          <i className={`bi ${open ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>

      {open && (
        <ul className="flex flex-col text-lg gap-6 text-[oklch(58.8%_0.158_241.966)] mt-4">
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

// function Navbar() {
//   const cartCount = useSelector((state) => state.cart.value);
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-md p-4 sticky top-0 z-50">
//       <div className="flex justify-between items-center max-w-7xl mx-auto">
//         {/* Logo */}
//         <h1 className="font-bold text-3xl text-[oklch(58.8%_0.158_241.966)]">
//           WorldPlatter
//         </h1>

//         {/* Right Section (Cart + Login) */}
//         <div className="flex items-center gap-6 text-[oklch(58.8%_0.158_241.966)]">
//           {/* Cart */}
//           <Link to="/cart" className="relative">
//             <i className="bi bi-cart3 text-3xl"></i>
//             {cartCount.length > 0 && (
//               <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {cartCount.length}
//               </span>
//             )}
//           </Link>

//           {/* Login */}
//           <Link to="/login">
//             <i className="bi bi-person text-3xl"></i>
//           </Link>

//           {/* Hamburger */}
//           <button className="md:hidden text-4xl" onClick={() => setOpen(!open)}>
//             <i className={`bi ${open ? "bi-x" : "bi-list"}`}></i>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <ul className="flex flex-col gap-4 text-lg mt-4 md:hidden text-[oklch(58.8%_0.158_241.966)] font-medium">
//           <Link to="/" onClick={() => setOpen(false)}>
//             <li>Home</li>
//           </Link>
//           <Link to="/menu" onClick={() => setOpen(false)}>
//             <li>Menu</li>
//           </Link>
//           <Link to="/about" onClick={() => setOpen(false)}>
//             <li>About</li>
//           </Link>
//           <Link to="/contact" onClick={() => setOpen(false)}>
//             <li>Contact</li>
//           </Link>
//         </ul>
//       )}

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-8 text-lg font-medium text-[oklch(58.8%_0.158_241.966)] justify-center mt-4">
//         <Link to="/">
//           <li>Home</li>
//         </Link>
//         <Link to="/menu">
//           <li>Menu</li>
//         </Link>
//         <Link to="/about">
//           <li>About</li>
//         </Link>
//         <Link to="/contact">
//           <li>Contact</li>
//         </Link>
//       </ul>
//     </nav>
//   );
// }
