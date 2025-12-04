import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const foodItems = JSON.parse(localStorage.getItem("foodItems"));
  const users = JSON.parse(localStorage.getItem("users"));
  const myOrdersData = JSON.parse(localStorage.getItem("myOrderData"));

  return (
    <div className="flex bg-[oklch(98.4%_0.019_200.873)] min-h-screen">
      <aside className="w-72 rounded-r-3xl p-6 flex flex-col bg-white shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Admin Panel
        </h2>

        <ul className="space-y-4">
          <li>
            <Link
              to="manageusers"
              className="block rounded-xl p-3 hover:bg-[oklch(87%_0.065_274.039)] transition"
            >
              👤 Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="manageproducts"
              className="block rounded-xl p-3 hover:bg-[oklch(87%_0.065_274.039)] transition"
            >
              📦 Manage Products
            </Link>
          </li>
          <li>
            <Link
              to="manageorders"
              className="block rounded-xl p-3 hover:bg-[oklch(87%_0.065_274.039)] transition"
            >
              🧾 Manage Orders
            </Link>
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-gray-700">Welcome Admin 👋</h2>
          <button className="bg-[#4287f5] text-lg py-2 px-5 rounded-lg text-white hover:bg-[oklch(39.8%_0.07_227.392)] transition shadow-lg">
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800">
              Total Users
            </h3>
            <p className="mt-3 text-4xl font-bold text-gray-700">
              {users?.length || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800">
              Total Products
            </h2>
            <p className="mt-3 text-4xl font-bold text-gray-700">
              {foodItems?.length || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800">
              Total Orders
            </h2>
            <p className="mt-3 text-4xl font-bold text-gray-700">
              {myOrdersData?.length || 0}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
