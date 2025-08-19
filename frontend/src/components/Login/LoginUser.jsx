import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, UserPlus } from "lucide-react";

const LoginUser = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Your login logic here
    navigate("/user");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/user-background.png')" }}
    >
      <motion.div
        className="w-full max-w-xl py-6 px-8 rounded-2xl shadow-2xl bg-white border border-gray-200 text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-green-600 mb-2">
            Users' Login
          </h2>
          <p className="text-gray-600 text-lg">
            Welcome back! Please sign in to continue.
          </p>
        </div>

        {/* Google Login Button */}
        <motion.button
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg mb-6 transition-colors duration-200 shadow-lg border border-gray-300 bg-gray-200 text-gray-800 hover:bg-gray-300"
          onClick={() => alert("Apply Google login")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-6 h-6" />
          Login with Google
        </motion.button>
        
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Form */}
        <form className="w-full grid gap-4">
          <div className="relative">
            <Mail className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative">
            <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex justify-between w-full mt-4 gap-4">
          <motion.button
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded-lg flex-1 shadow-lg transition-colors"
            onClick={handleLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogIn size={20} /> Login
          </motion.button>
          <motion.button
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2.5 px-6 rounded-lg flex-1 shadow-lg transition-colors"
            onClick={() => navigate("/register/user")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <UserPlus size={20} /> Register
          </motion.button>
        </div>

        {/* Forgot Password Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Forgot your password?{" "}
          <span
            className="font-bold text-green-500 cursor-pointer hover:underline"
            onClick={() => alert("We sent an email to proceed.")}
          >
            Click Here
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default LoginUser;