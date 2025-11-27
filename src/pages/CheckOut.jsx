import React from "react";
import { useSelector } from "react-redux";

function CheckOut() {
  const itemsInCart = useSelector((state) => state.cart.value);

  return (
    <>
      <div className="flex flex-col gap-3 p-5">
        <h2 className="text-2xl p-3">Order Summary</h2>
        {itemsInCart.map((itemInCart) => (
          <div
            key={itemInCart.featuredId}
            className="flex gap-3 bg-[oklch(98.4%_0.019_200.873)] rounded-xl p-3"
          >
            <img
              className="h-40 rounded-xl"
              src={itemInCart.featuredImg}
              alt="Item in checkout Image"
            />
            <div>
              <p className="text-lg font-bold">{itemInCart.featuredName}</p>
              <p>{itemInCart.featuredRestrnt}</p>
              <p>Price: ₹{itemInCart.featuredPrice}</p>
              <p>Quantity: {itemInCart.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold">Payment and Delivery</h2>

        <div className="flex flex-col gap-5 p-5">
          <div className="flex gap-4">
            <h2>Select Payment Mode</h2>
            <select name="" id="">
              <option value="">Select</option>
              <option value="">Cash On Delivery (COD)</option>
              <option value="">Debit / Credit Cards</option>
              <option value="">UPI</option>
              <option value="">Wallet</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 w-96">
            <h2>Delivery To</h2>
            <textarea
              className="border rounded-lg p-2"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Address"
            ></textarea>
            <button className="rounded-lg bg-[oklch(87.9%_0.169_91.605)] p-2 w-40">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
