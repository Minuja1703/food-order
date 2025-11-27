import React from "react";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[oklch(97%_0.014_254.604)] h-screen flex items-center justify-center">
      <div className=" bg-white p-4 rounded-lg">
        <h1 className="text-4xl font-bold text-center p-3 text-[oklch(45%_0.085_224.283)]">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
          <div className="flex gap-4 p-1 items-center">
            <label htmlFor="useranme" className="font-semibold">
              Username
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                id="useranme"
                className="border rounded p-2 text-md"
                placeholder="Username"
                required
              />
              <span className="text-[oklch(63.7%_0.237_25.331)] text-sm"></span>
            </div>
          </div>

          <div className="flex gap-4 p-1 items-center">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="password"
                id="password"
                className="border rounded p-2 text-md"
                placeholder="Password"
                required
              />
              <span className="text-[oklch(63.7%_0.237_25.331)] text-sm"></span>
            </div>
          </div>

          <div className="text-center">
            <button
              className="rounded-lg p-2 bg-[oklch(45%_0.085_224.283)] text-white w-28 cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
