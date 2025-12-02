import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { addOrders } from "../features/cart/OrderSlice";

function CheckOut() {
  const itemsInCart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const addOrderItems = {
      id: Date.now(), //Current Time Stamp in millisecond
      items: itemsInCart,
      date: new Date().toISOString(), //Converting to Standard Date and Time
    };

    dispatch(addOrders(addOrderItems));
    dispatch(clearCart());
    navigate("/ordersuccess");
  };

  return (
    <>
      <div className="flex flex-col gap-3 p-5 bg-[oklch(98.4%_0.019_200.873)] dark:bg-black">
        <h2 className="text-2xl p-3 dark:text-[oklch(74.6%_0.16_232.661)]">
          Order Summary
        </h2>
        {itemsInCart.map((itemInCart) => (
          <div
            key={itemInCart.featuredId}
            className="flex md:flex-row items-center gap-3 bg-white dark:bg-[oklch(26.9%_0_0)] dark:text-[oklch(74.6%_0.16_232.661)] rounded-xl p-3"
          >
            <img
              className="w-24 md:w-32 h-40 object-cover rounded-xl"
              src={itemInCart.featuredImg}
              alt="Item in checkout Image"
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold">{itemInCart.featuredName}</p>
              <p>{itemInCart.featuredRestrnt}</p>
              <p>Price: ₹{itemInCart.featuredPrice}</p>
              <p>Quantity: {itemInCart.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[oklch(98.4%_0.019_200.873)] dark:bg-black p-5">
        <div className="bg-white dark:bg-[oklch(26.9%_0_0)] dark:text-[oklch(74.6%_0.16_232.661)] p-5 rounded-lg">
          <h2 className="text-xl font-bold">Payment and Delivery</h2>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <h2 className="mt-5">Payment Mode</h2>
              <select className="p-2 border border-gray-400 rounded-md md:w-80">
                <option value="">Select</option>
                <option value="">Cash On Delivery (COD)</option>
                <option value="">Debit / Credit Cards</option>
                <option value="">UPI</option>
                <option value="">Wallet</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <h2>Delivery To</h2>
              <textarea
                className="border rounded-lg p-2 border-gray-400 md:w-80"
                rows="5"
                placeholder="Address"
                required
              ></textarea>

              <Link to="/ordersuccess">
                <button
                  className="rounded-lg bg-[oklch(87.9%_0.169_91.605)] dark:text-black p-2 w-full md:w-40 mt-3 cursor-pointer"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
