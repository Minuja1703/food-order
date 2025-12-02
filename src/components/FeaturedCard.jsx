import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function FeaturedCard(props) {
  const dispatch = useDispatch();

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
        className="rounded-lg bg-[oklch(79.5%_0.184_86.047)] dark:text-black w-32 p-2 mt-2 cursor-pointer"
        onClick={() => dispatch(addToCart(props.featuredFood))}
      >
        Add to Cart
      </button>
      </div>
    </div>
  );
}

export default FeaturedCard;
