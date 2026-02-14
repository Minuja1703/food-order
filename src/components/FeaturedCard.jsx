import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function FeaturedCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.value);

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add items to cart.");
      navigate("/login");
      return;
    }

    if (user.role !== "User") {
      toast.error("Only Users can add items to cart.");
      return;
    }

    dispatch(addToCart(props.featuredFood));
    toast.success("Item added to cart.");
  };

  return (
    <div className="p-2 flex flex-col dark:text-[oklch(74.6%_0.16_232.661)]">
      <img
        src={props.featuredFood.featuredImg}
        alt="Featured Food Image"
        className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl"
      />
      <div className="text-center">
        <h4 className="text-lg md:text-xl mt-3">
          {props.featuredFood.featuredName}
        </h4>
        <p>{props.featuredFood.featuredRestrnt}</p>
        <p>Price: ₹{props.featuredFood.featuredPrice}</p>
        <button
          className="rounded-lg p-3 mt-2 w-32 bg-[oklch(79.5%_0.184_86.047)] dark:text-black cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FeaturedCard;
