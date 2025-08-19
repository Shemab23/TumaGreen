import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Smartphone, Mail, Camera, Check, Send } from "lucide-react";

const RegisterRider = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(null);
  const [licence, setLicence] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => {
    if (!profile) return alert("Please upload your profile image!");
    if (!licence || !agree) return alert("Please accept all required terms!");

    // Prepare form data (example)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("profile", profile);
    formData.append("licence", licence);
    formData.append("agree", agree);

    console.log("FormData ready for submission:", formData);

    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-12">
      <motion.div
        className="w-full max-w-xl py-8 px-8 rounded-2xl shadow-2xl bg-gray-900 border border-gray-800 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-green-400 mb-2">
            Rider Registration
          </h2>
          <p className="text-gray-400 text-lg">
            Join our team of riders today!
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

          {/* Phone */}
          <div className="relative">
            <Smartphone className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
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
        </form>

        {/* Checkboxes */}
        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={licence}
              onChange={(e) => setLicence(e.target.checked)}
              className="mt-1 w-5 h-5 accent-green-500"
            />
            <label className="text-gray-400">I have a Valid Driving licence for the selected vehicle type</label>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 w-5 h-5 accent-green-500"
            />
            <label className="text-gray-400">I agree to TumaGreen Terms and Conditions</label>
          </div>
        </div>

        {/* Submit button */}
        <motion.button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-8 shadow-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send size={20} /> Submit Application
        </motion.button>

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
      </motion.div>
    </section>
  );
};

export default RegisterRider;