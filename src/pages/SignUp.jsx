import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SigUp() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [focus, setFocus] = useState({
    errUsername: false,
    errEmail: false,
    errPassword: false,
    errCpassword: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const usernameExists = users.find(
      (item) => item.username === inputs.username
    );
    const emailExists = users.find((items) => items.email === inputs.email);

    if (usernameExists) {
      toast.error("Username already Exists. Try a different one.");
      return;
    }

    if (emailExists) {
      toast.error("Email already registred.");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: inputs.username,
      email: inputs.email,
      password: inputs.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Sign Up successful.");
    navigate("/login");
  };

  const usernameRegex = /^[A-Za-z0-9]{3,16}$/;
  const passwordRegex =
    /(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  return (
    <div className="bg-[oklch(97%_0.014_254.604)] dark:bg-black min-h-screen flex items-start justify-center pt-18">
      <div className="w-[80%] md:w-[40%] lg:w-[30%] bg-white dark:bg-[oklch(26.9%_0_0)] p-4 rounded-lg">
        <h1 className="text-4xl dark:text-[oklch(74.6%_0.16_232.661)] font-bold text-center p-2 text-[oklch(45%_0.085_224.283)]">
          Sign Up
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 dark:text-[oklch(74.6%_0.16_232.661)]"
        >
          <div className="flex flex-col">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border rounded p-2 text-md"
              placeholder="Username"
              name="username"
              value={inputs.username}
              required
              onChange={handleChange}
              onBlur={() => setFocus({ ...focus, errUsername: true })}
            />
            <span
              className={`text-[oklch(63.7%_0.237_25.331)] text-sm ${
                focus.errUsername && !usernameRegex.test(inputs.username)
                  ? "block"
                  : "hidden"
              }`}
            >
              Username should have 3-16 characters.
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded p-2 text-md"
              placeholder="Email"
              name="email"
              value={inputs.email}
              required
              onChange={handleChange}
              onBlur={() => setFocus({ ...focus, errEmail: true })}
            />
            <span
              className={`text-[oklch(63.7%_0.237_25.331)] text-sm ${
                focus.errEmail && !inputs.email.match(/^\S+@\S+\.\S+$/)
                  ? "block"
                  : "hidden"
              }`}
            >
              Enter a valid Email Id.
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded p-2 text-md"
              placeholder="Password"
              name="password"
              value={inputs.password}
              required
              onChange={handleChange}
              onBlur={() => setFocus({ ...focus, errPassword: true })}
            />
            <span
              className={`text-[oklch(63.7%_0.237_25.331)] text-sm ${
                focus.errPassword && !passwordRegex.test(inputs.password)
                  ? "block"
                  : "hidden"
              }`}
            >
              Password must have minimm of 8 characters and include atleast 1
              uppercase, 1 digit and 1 special character.
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="cpassword" className="font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              className="border rounded p-2 text-md"
              placeholder="Confirm Password"
              name="cpassword"
              value={inputs.cpassword}
              required
              onChange={handleChange}
              onBlur={() => setFocus({ ...focus, errCpassword: true })}
            />
            <span
              className={`text-[oklch(63.7%_0.237_25.331)] text-sm ${
                focus.errCpassword && inputs.password !== inputs.cpassword
                  ? "block"
                  : "hidden"
              }`}
            >
              Password is not matching.
            </span>
          </div>

          <div className="text-center">
            <button
              className="rounded-lg p-2 bg-[oklch(45%_0.085_224.283)] text-white w-28 cursor-pointer"
              type="submit"
            >
              Sign Up
            </button>
            <div className="text-sm text-center p-2 text-[oklch(45%_0.085_224.283)] dark:text-[oklch(74.6%_0.16_232.661)]">
              Already have an account?
              <Link to="/login"> Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigUp;
