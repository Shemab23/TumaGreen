import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { User, Smartphone, Mail, Lock, Camera, Send } from "lucide-react";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState(null);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const handleRegister = () => {
    if (!profile) return alert("Please upload a profile image!");
    if (password !== password1) return alert("Passwords do not match!");

    // Example: Prepare form data for API
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profile", profile);

    console.log("FormData ready for submission:", formData);

    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-12">
      <Motion.div
        className="w-full max-w-xl py-8 px-8 rounded-2xl shadow-2xl bg-gray-900 border border-gray-800 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-green-400 mb-2">
            User Registration
          </h2>
          <p className="text-gray-400 text-lg">
            Create your account to get started.
          </p>
        </div>

        {/* Form Fields */}
        <form className="w-full grid gap-5">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Profile */}
          <div className="relative">
            <Camera className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="file"
              onChange={(e) => setProfile(e.target.files[0])}
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600 transition-colors cursor-pointer"
            />
          </div>

          {/* phone */}
          <div className="relative">
            <Smartphone className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+2507XXXXXXX"
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Confirm password */}
          <div className="relative">
            <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Confirm Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>

        {/* Submit button */}
        <Motion.button
          onClick={handleRegister}
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-8 shadow-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send size={20} /> Register Account
        </Motion.button>

        {/* Login redirect */}
        <p className="text-center text-sm mt-6 text-gray-400">
          Already have an account?{" "}
          <span
            className="font-bold text-green-500 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login Here
          </span>
        </p>
      </Motion.div>
    </section>
  );
};

export default RegisterUser;
