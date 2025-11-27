import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  incrementQty,
  decrementQty,
  deleteItem,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const itemsInCart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const total = itemsInCart.reduce((sum, item) => {
    const price = parseInt(item.featuredPrice.replace("₹", ""));
    return sum + item.quantity * price;
  }, 0);

  return (
    <>
      <h1 className="text-2xl font-bold px-3">Cart</h1>
      <div className="p-2 flex flex-col gap-4 ">
        {itemsInCart.map((itemInCart) => (
          <div
            key={itemInCart.featuredId}
            className="flex gap-4 bg-[oklch(98.2%_0.018_155.826)] rounded-xl p-3"
          >
            <img
              className="h-40 rounded-lg"
              src={itemInCart.featuredImg}
              alt="Cart Food Image"
            />

            <div>
              <p className="text-lg font-bold">{itemInCart.featuredName}</p>
              <p>{itemInCart.featuredRestrnt}</p>
              <div className="flex items-center gap-1">
                <button
                  className="text-3xl cursor-pointer text-[oklch(50%_0.134_242.749)]"
                  onClick={() => dispatch(incrementQty(itemInCart.featuredId))}
                >
                  <i className="bi bi-plus-circle-fill"></i>
                </button>
                {itemInCart.quantity}
                <button
                  className="text-3xl cursor-pointer text-[oklch(50%_0.134_242.749)]"
                  onClick={() => dispatch(decrementQty(itemInCart.featuredId))}
                >
                  <i className="bi bi-dash-circle-fill"></i>
                </button>
              </div>
              <p className="p-2">Price: ₹{itemInCart.featuredPrice}</p>
              <button
                onClick={() => dispatch(deleteItem(itemInCart.featuredId))}
                className="text-2xl text-[oklch(63.7%_0.237_25.331)] cursor-pointer"
              >
                <i className="bi bi-trash3-fill"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-2xl">Total: ₹{total}</h2>
          <button
            className="rounded-md p-2 text-white bg-[oklch(63.7%_0.237_25.331)]"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>

        <Link to="/checkout">
          <button className="rounded md p-2 bg-[oklch(78.5%_0.115_274.713)] mt-3">
            Check Out
          </button>
        </Link>
      </div>
    </>
  );
}

export default Cart;
