import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row gap-4 items-center justify-between p-5">
      <div>
        <h1 className="font-bold text-[oklch(58.8%_0.158_241.966)] text-3xl md:text-4xl">
          WorldPlatter
        </h1>
      </div>

      <div>
        <ul className="flex text-lg gap-6 text-[oklch(58.8%_0.158_241.966)]">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
