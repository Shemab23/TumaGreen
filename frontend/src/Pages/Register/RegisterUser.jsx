import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadePage, FadeInUp, ZoomIn } from "../../components/motion/animations";
import { Leaf, Users } from "lucide-react";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
    <FadePage>
      <div className="h-screen w-screen bg-cyan-400 flex flex-col items-center justify-center relative px-4 overflow-hidden">

        {/* Floating background icons */}
        <FadeInUp delay={0.2}>
          <Leaf className="absolute top-10 left-10 w-10 h-10 text-green-500 opacity-30" />
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <Users className="absolute top-80 left-20 w-12 h-12 text-green-500 opacity-30" />
        </FadeInUp>

        {/* Registration form container */}
        <FadeInUp>
          <div className="w-full max-w-md bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
              User Registration
            </h2>

            {/* Name field */}
            <div className="flex flex-col">
              <label className="font-semibold text-green-800">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                className="rounded-lg px-2 h-10 border border-green-300"
              />
            </div>

            {/* Email field */}
            <div className="flex flex-col">
              <label className="font-semibold text-green-800">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email '@'"
                className="rounded-lg px-2 h-10 border border-green-300"
              />
            </div>

            {/* Profile upload */}
            <div className="flex flex-col">
              <label className="font-semibold text-green-800">Profile:</label>
              <input
                type="file"
                onChange={(e) => setProfile(e.target.files[0])}
                className="rounded-lg px-2 py-1 border border-green-300 cursor-pointer"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="font-semibold text-green-800">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
                className="rounded-lg px-2 h-10 border border-green-300"
              />
            </div>

            {/* Confirm password */}
            <div className="flex flex-col">
              <label className="font-semibold text-green-800">Confirm Password:</label>
              <input
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="**********"
                className="rounded-lg px-2 h-10 border border-green-300"
              />
            </div>

            {/* Register button */}
            <ZoomIn>
              <button
                onClick={handleRegister}
                className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-2 hover:bg-green-700 transition-colors"
              >
                Register
              </button>
            </ZoomIn>
          </div>
        </FadeInUp>
      </div>
    </FadePage>
  );
};

export default RegisterUser;
