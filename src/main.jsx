import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Menu from "./pages/Menu.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Cart from "./pages/Cart.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import { Toaster } from "react-hot-toast";
import AdminRoot from "./routes/AdminRoot.jsx";
import ManageOrders from "./pages/admin/ManageOrders.jsx";
import ManageProducts from "./pages/admin/ManageProducts.jsx";
import ManageUsers from "./pages/admin/ManageUsers.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "myorders",
        element: (
          <ProtectedRoute role="User">
            <MyOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute role="User">
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute role="User">
            <CheckOut />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/ordersuccess",
        element: (
          <ProtectedRoute role="User">
            <OrderSuccess />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myorders",
        element: <MyOrders />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="Admin">
        <AdminRoot />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "manageorders",
        element: <ManageOrders />,
      },
      {
        path: "manageproducts",
        element: <ManageProducts />,
      },
      {
        path: "manageusers",
        element: <ManageUsers />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
