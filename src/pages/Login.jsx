"use client";

// React imports
import React, { useState } from "react";

// React router dom
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { setAuth } from "../utils/auth"; // ishonch hosil qil: bu fayl bor va to‘g‘ri ishlayapti

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [hoverStates, setHoverStates] = useState({
    email: false,
    password: false,
  });

  const [focusStates, setFocusStates] = useState({
    email: false,
    password: false,
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

    if (!email || !password) {
      alert("Email va parolni to‘ldiring.");
      return;
    }

    try {
      const res = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setAuth(data); // localStorage ga saqlash
        navigate("/"); // Home sahifaga yo‘naltirish
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Tarmoqda xatolik yuz berdi.");
    }
  };

  const goToRegister = (e) => {
    e.preventDefault(); // submit bo‘lishini to‘xtat
    navigate("/register");
  };

  return (
    <div className="container max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-[500px] mx-auto min-h-screen flex flex-col items-center justify-center gap-10 text-white"
      >
        <div className="bg-[#8774e1] w-40 h-40 rounded-full tracking-widest text-2xl uppercase flex flex-col items-center justify-center">
          Auth
        </div>

        <div className="text-center w-[60%]">
          <h1 className="text-3xl">Sign into our website</h1>
          <p className="mt-4 opacity-40">
            Please confirm your email and enter your password
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[80%] flex flex-col items-center justify-start gap-5"
        >
          {/* Email Input */}
          <motion.div whileHover={{ scale: 1.02 }} className="relative w-full">
            <motion.label
              whileHover={{ scale: 1.04 }}
              htmlFor="email"
              className={`
                absolute -top-3 left-2 transition-opacity duration-75
                ${hoverStates.email || focusStates.email ? "opacity-0" : "opacity-100"}
              `}
            >
              Email
            </motion.label>
            <motion.input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              onMouseEnter={() => handleMouseEnter("email")}
              onMouseLeave={() => handleMouseLeave("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-3 py-4 w-full h-full border-2 border-[#3c3b3c] rounded-lg"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div whileHover={{ scale: 1.02 }} className="relative w-full">
            <motion.label
              whileHover={{ scale: 1.04 }}
              htmlFor="password"
              className={`
                absolute -top-3 left-2 transition-opacity duration-75
                ${hoverStates.password || focusStates.password ? "opacity-0" : "opacity-100"}
              `}
            >
              Password
            </motion.label>
            <motion.input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
              onMouseEnter={() => handleMouseEnter("password")}
              onMouseLeave={() => handleMouseLeave("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="px-3 py-4 w-full h-full border-2 border-[#3c3b3c] rounded-lg"
            />
          </motion.div>

          {/* Button */}
          <div className="inline-flex h-20 justify-between items-center w-full">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="transition-colors"
              type="submit"
            >
              <span className="bg-[#8774e1] flex-grow hover:bg-[#8774e1]/90 text-xl py-3 px-8 rounded-md">
                Login
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="transition-colors"
              onClick={goToRegister}
            >
              <span className="bg-[#c26161] flex-grow hover:bg-[#c26161]/90 text-xl py-3 px-8 rounded-md">
                Register
              </span>
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
