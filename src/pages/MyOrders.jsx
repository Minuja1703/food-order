import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyOrders() {
  const itemsOrdered = useSelector((state) => state.orders.value);

  return (
    <div className="bg-[oklch(98.4%_0.019_200.873)] dark:bg-black min-h-screen">
      <div className="flex flex-col gap-3 p-5 rounded-xl">
        <h2 className="text-2xl dark:text-[oklch(74.6%_0.16_232.661)] p-3">
          My Orders
        </h2>

        {itemsOrdered.map((order) => (
          <div key={order.id} className="p-3 bg-white dark:bg-[oklch(26.9%_0_0)] dark:text-[oklch(74.6%_0.16_232.661)] rounded-xl">
            <p>Order Date: {new Date(order.date).toLocaleString()}</p>

            {order.items.map((item) => (
              <div
                key={item.featuredId}
                className="flex md:flex-row items-center gap-3  p-3"
              >
                <img
                  className="w-24 md:w-32 h-40 object-cover rounded-xl"
                  src={item.featuredImg}
                  alt="Item in checkout Image"
                />
                <div className="flex flex-col">
                  <p className="text-lg font-bold">{item.featuredName}</p>
                  <p>{item.featuredRestrnt}</p>
                  <p>Price: ₹{item.featuredPrice}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        ))}

        <Link to="/">
          <button className="rounded-lg bg-[oklch(87.9%_0.169_91.605)] p-2 w-full md:w-40 mt-3 cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MyOrders;
