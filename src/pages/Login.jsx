import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { login } from "../features/auth/authSlice";

function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const admin = JSON.parse(localStorage.getItem("adminData"));
    const userData = JSON.parse(localStorage.getItem("users")) || [];

    if (admin.email === inputs.username && admin.password === inputs.password) {
      dispatch(login({ email: admin.email, role: admin.role }));

      navigate("/admin");

      toast("Welcome Admin", {
        icon: "👏",
      });

      return;
    }
    const userFound =
      userData !== null &&
      userData.find(
        (item) =>
          item.username === inputs.username && item.password === inputs.password
      );

    if (userFound) {
      dispatch(login({ username: userFound.username, role: userFound.role }));

      navigate("/");

      toast(`Welcome ${userFound.username}`, {
        icon: "👏",
      });
    } else {
      toast.error("Incorrect Login Credentials.");
    }
  };

  return (
    <div
      className="bg-[oklch(97%_0.014_254.604)] dark:bg-black
       min-h-screen flex items-start justify-center pt-20"
    >
      <div className="bg-white dark:bg-[oklch(26.9%_0_0)] p-4 rounded-lg w-[80%] lg:w-[30%]">
        <h1 className="text-3xl lg:text-4xl font-bold text-center p-3 text-[oklch(45%_0.085_224.283)] dark:text-[oklch(74.6%_0.16_232.661)]">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 p-2 dark:text-[oklch(74.6%_0.16_232.661)]"
        >
          <div className="flex flex-col p-1">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border rounded p-2 text-md"
              placeholder="Username"
              required
              name="username"
              onChange={handleChange}
              value={inputs.username}
            />
            <span className="text-[oklch(63.7%_0.237_25.331)] text-sm"></span>
          </div>

          <div className="flex flex-col p-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded p-2 text-md"
              placeholder="Password"
              required
              name="password"
              onChange={handleChange}
              value={inputs.password}
            />
            <span className="text-[oklch(63.7%_0.237_25.331)] text-sm"></span>
          </div>

          <div className="text-center pt-2">
            <button
              className="rounded-lg p-2 bg-[oklch(45%_0.085_224.283)] text-white w-full cursor-pointer"
              type="submit"
            >
              Login
            </button>

            <div className="text-sm text-center p-2 text-[oklch(45%_0.085_224.283)] dark:text-[oklch(74.6%_0.16_232.661)]">
              New to WorldPlatter?
              <Link to="/signup"> SignUp</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
