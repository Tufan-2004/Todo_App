import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // import useNavigate

const SimpleLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // initialize navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials (for demonstration only)
    const hardcodedUsername = "admin";
    const hardcodedPassword = "12345";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setMessage("✅ Login Successful!");
      // Redirect to next page after a short delay
      setTimeout(() => {
        navigate("/dashboard");
      },1000);
    } else {
      setMessage("❌ Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-400">
      <div className="bg-green-100 p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-green-400 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("Successful")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SimpleLogin;
