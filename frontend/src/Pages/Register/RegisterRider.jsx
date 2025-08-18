import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadePage, FadeInUp, ZoomIn } from "../../components/motion/animations";
import { Send, Users, Truck } from "lucide-react";

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
    <FadePage>
      <div className="h-screen w-screen bg-cyan-400 flex flex-col items-center justify-center relative px-4 overflow-hidden">

        {/* Floating background icons */}
        <FadeInUp delay={0.2}>
          <Users className="absolute top-10 left-10 w-10 h-10 text-green-500 opacity-30" />
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <Truck className="absolute top-80 left-20 w-12 h-12 text-green-500 opacity-30" />
        </FadeInUp>

        {/* Form container */}
        <FadeInUp>
          <div className="w-full max-w-md bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-4">Rider Registration</h2>

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="font-semibold text-green-800">Full Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                className="rounded-lg px-2 h-10 border border-green-300"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="font-semibold text-green-800">Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+250 7xxxxxxxx"
                className="rounded-lg px-2 h-10 border border-green-300"
              />
            </div>

            {/* Email */}
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

            {/* Profile */}
            <div className="flex flex-col">
              <label className="font-semibold text-green-800">Profile:</label>
              <input
                type="file"
                onChange={(e) => setProfile(e.target.files[0])}
                className="rounded-lg px-2 py-1 border border-green-300 cursor-pointer"
              />
            </div>

            {/* Driving licence checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={licence}
                onChange={(e) => setLicence(e.target.checked)}
              />
              <label>I have a Valid Driving licence for the selected vehicle type</label>
            </div>

            {/* Terms & conditions checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label>I agree to TumaGreen Terms and Conditions</label>
            </div>

            {/* Submit button */}
            <ZoomIn>
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-2 flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <Send className="w-5 h-5" /> Submit the Application
              </button>
            </ZoomIn>
          </div>
        </FadeInUp>
      </div>
    </FadePage>
  );
};

export default RegisterRider;
