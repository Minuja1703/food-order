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
    const price = parseInt(item.featuredPrice);
    return sum + item.quantity * price;
  }, 0);

  return (
    <div className="bg-[oklch(98.2%_0.018_155.826)] min-h-screen">
      <div className="flex items-center justify-between p-3">
        <h2 className="text-2xl md:text-3xl p-3">Cart</h2>

        <button
          className="rounded-md p-2 text-white bg-[oklch(63.7%_0.237_25.331)] cursor-pointer mt-1"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-col gap-6 rounded-lg p-3">
        {itemsInCart.map((itemInCart) => (
          <div
            key={itemInCart.featuredId}
            className="bg-white flex flex-col md:flex-row gap-4 p-2 rounded-lg"
          >
            <img
              className="h-48 object-cover rounded-lg w-40"
              src={itemInCart.featuredImg}
              alt="Cart Food Image"
            />

            <div className="flex flex-col flex-1 justify-between">
              <div>
                <p className="text-lg font-bold">{itemInCart.featuredName}</p>
                <p>{itemInCart.featuredRestrnt}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    className="text-3xl cursor-pointer text-[oklch(50%_0.134_242.749)]"
                    onClick={() =>
                      dispatch(incrementQty(itemInCart.featuredId))
                    }
                  >
                    <i className="bi bi-plus-circle-fill"></i>
                  </button>
                  {itemInCart.quantity}
                  <button
                    className="text-3xl cursor-pointer text-[oklch(50%_0.134_242.749)]"
                    onClick={() =>
                      dispatch(decrementQty(itemInCart.featuredId))
                    }
                  >
                    <i className="bi bi-dash-circle-fill"></i>
                  </button>
                </div>

                <button
                  onClick={() => dispatch(deleteItem(itemInCart.featuredId))}
                  className="text-2xl text-[oklch(63.7%_0.237_25.331)] cursor-pointer"
                >
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </div>
              <p className=" font-medium">Price: ₹{itemInCart.featuredPrice}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3">
        <div className="bg-white rounded-lg p-3">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="text-md md:text-2xl font-medium md:font-bold">
              Total Amount: ₹{total}
            </h2>
          </div>

          <Link to="/checkout">
            <button className="rounded-lg p-3 bg-[oklch(85.2%_0.199_91.936)] mt-3 cursor-pointer w-full md:w-48">
              Continue to Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
