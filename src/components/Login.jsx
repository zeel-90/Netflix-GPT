import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => { 
    e.preventDefault();
    // Backend logic will be added later
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen background image */}
      <img
        src="/background.jpg"
        alt="Netflix background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <Header />

      {/* Sign In Form Container */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-black opacity-85 rounded-lg px-12 py-10">
          <h1 className="text-white text-3xl font-semibold mb-8">Sign In</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email or mobile number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-neutral-700 border border-neutral-600 rounded text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 bg-neutral-700 border border-neutral-600 rounded text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition-colors duration-200 mt-6"
            >
              Sign In
            </button>

            {/* Forgot Password Link */}
            <div className="text-center mt-2">
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-300 text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
