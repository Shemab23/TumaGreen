import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeInUp, ZoomIn } from "../motion/animations";
import { Youtube } from "lucide-react";

const LoginRider = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-full min-h-screen  flex items-center justify-center px-4">
      <FadeInUp>
        <div className="bg-gray-200/40 border-2 border-white rounded-xl shadow-lg flex flex-col items-center gap-6 p-6 sm:p-10 w-full max-w-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Riders' Login
          </h2>

          <ZoomIn>
            <button
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
              onClick={() => alert("Apply Google login")}
            >
              <Youtube className="w-5 h-5" /> Login with Google
            </button>
          </ZoomIn>

          <form className="w-full grid gap-3">
            <label className="font-semibold text-lg">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="bg-white rounded-lg px-3 py-2 w-full"
            />
            <label className="font-semibold text-lg">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              className="bg-white rounded-lg px-3 py-2 w-full"
            />
          </form>

          <div className="flex justify-between w-full mt-2 gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex-1"
              onClick={() => navigate("/rider")}
            >
              Login
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex-1"
              onClick={() => navigate("/register/rider")}
            >
              Register
            </button>
          </div>

          <p className="text-center text-sm mt-2">
            Forgot your password?{" "}
            <span
              className="font-bold text-blue-500 cursor-pointer"
              onClick={() => alert("We sent an email to proceed.")}
            >
              Click Here
            </span>
          </p>
        </div>
      </FadeInUp>
    </section>
  );
};

export default LoginRider;
