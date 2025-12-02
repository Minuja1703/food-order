import React, { useEffect } from "react";
import Lottie from "lottie-react";
import Success from "../assets/lottie/Success.json";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/myorders");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col gap-1 justify-center items-center dark:bg-black min-h-screen">
      <Lottie animationData={Success} loop={false} className="w-80 md:w-96" />
      <h2 className="text-2xl md:text-5xl text-[oklch(72.3%_0.219_149.579)] font-bold">
        Order Placed Successfully
      </h2>
    </div>
  );
}

export default OrderSuccess;
