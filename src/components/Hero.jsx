import React from "react";
import coverImg from "../assets/images/coverImg.jpeg";

function Hero() {
  return (
    <div
      className="relative w-full h-[300px] md:h-[500px] bg-cover bg-center px-5 flex items-center justify-center"
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <div className="absolute inset-0 bg-white/60"></div>

      <h3 className="relative text-center text-3xl sm:text-4xl md:text-6xl font-bold text-[oklch(58.8%_0.158_241.966)] drop-shadow-lg">
        “Explore Global <br /> Cuisine, Effortlessly.”
      </h3>
    </div>
  );
}

export default Hero;
