import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import RegisterUser from "./Pages/Register/RegisterUser";
import RegisterRider from "./Pages/Register/RegisterRider";
import User from "./Pages/User";
import Rider from "./Pages/Rider";
import Admin from "./Pages/Admin";
import ChoseMap from "./Pages/ChoseMap";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/rider" element={<RegisterRider />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/map" element={<ChoseMap />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
