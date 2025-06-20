"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [hoverStates, setHoverStates] = useState({
    name: false,
    email: false,
    password: false,
    confirm_password: false,
  });
  const [focusStates, setFocusStates] = useState({
    name: false,
    email: false,
    password: false,
    confirm_password: false,
  });

  const handleMouseEnter = (field) => {
    setHoverStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleMouseLeave = (field) => {
    setHoverStates((prev) => ({ ...prev, [field]: false }));
  };

  const handleFocus = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // saqlab qo'yish
        alert("Registration successful!");
        window.location.href = "/"; // yoki navigate("/") agar useNavigate ishlatsa
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="container max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-[500px] mx-auto min-h-screen flex flex-col items-center justify-center gap-10 text-white"
      >
        <div className="text-center w-[60%]">
          <h1 className="text-5xl leading-14">Registration</h1>
          <p className="mt-4 opacity-40">
            Please enter your personal data and create an account
          </p>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[80%] flex flex-col items-center justify-start gap-5"
        >
          {/* Name input */}
          <div className="relative w-full">
            <motion.input
              whileHover={{ scale: 1.02 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onMouseEnter={() => handleMouseEnter("name")}
              onMouseLeave={() => handleMouseLeave("name")}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="px-3 py-4 w-full border-2 border-[#3c3b3c] rounded-lg"
            />
          </div>

          {/* Email input */}
          <div className="relative w-full">
            <motion.input
              whileHover={{ scale: 1.02 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onMouseEnter={() => handleMouseEnter("email")}
              onMouseLeave={() => handleMouseLeave("email")}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-3 py-4 w-full border-2 border-[#3c3b3c] rounded-lg"
            />
          </div>

          {/* Password input */}
          <div className="relative w-full">
            <motion.input
              whileHover={{ scale: 1.02 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onMouseEnter={() => handleMouseEnter("password")}
              onMouseLeave={() => handleMouseLeave("password")}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="px-3 py-4 w-full border-2 border-[#3c3b3c] rounded-lg"
            />
          </div>

          {/* Confirm Password input */}
          <div className="relative w-full">
            <motion.input
              whileHover={{ scale: 1.02 }}
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onMouseEnter={() => handleMouseEnter("confirm_password")}
              onMouseLeave={() => handleMouseLeave("confirm_password")}
              onFocus={() => handleFocus("confirm_password")}
              onBlur={() => handleBlur("confirm_password")}
              type="password"
              id="confirm_password"
              placeholder="Enter your password again"
              className="px-3 py-4 w-full border-2 border-[#3c3b3c] rounded-lg"
            />
          </div>

          <div className="inline-flex justify-between items-center w-full mt-4 gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="transition-colors flex-grow"
              type="submit"
            >
              <span className="bg-[#8774e1] hover:bg-[#8774e1]/90 text-xl py-3 px-8 rounded-md">
                Create an account
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="transition-colors flex-grow"
              type="button"
              onClick={() => window.history.back()}
            >
              <span className="bg-[#c26161] hover:bg-[#c26161]/90 text-xl py-3 px-8 rounded-md">
                Login first
              </span>
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
