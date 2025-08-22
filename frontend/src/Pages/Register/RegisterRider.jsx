import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Lock , KeyIcon } from "lucide-react";

const RegisterRider = () => {
  const navigate = useNavigate();
  const [applicant_id, setApplicant_id] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = () => {
    if ( password1 !== password2) return alert("unmatching Passwords");

    // Prepare form data (example)
    const formData = new FormData();
    formData.append("Password", password1);
    formData.append("applicant_id", applicant_id);

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
            Rider Registration
          </h2>
          <p className="text-gray-400 text-lg">
            Join our team of riders today!
          </p>
        </div>

        {/* Form Fields */}
        <form className="w-full grid gap-5">


          {/* Applicant_id */}
          <div className="relative">
            <KeyIcon className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={applicant_id}
              onChange={(e) => setApplicant_id(e.target.value)}
              placeholder="Applicant Id"
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* password1 */}
          <div className="relative">
            <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* password2 */}
          <div className="relative">
            <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

        </form>

        {/* Submit button */}
        <Motion.button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-8 shadow-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register
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

export default RegisterRider;
