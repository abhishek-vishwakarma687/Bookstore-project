import React from "react";

import Home from "./home/Home";
import Signup from "./components/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./courses/Courses";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ForgotPassword from "./components/ForgotPassword";
import VerifyOtp from "./components/VerifyOtp";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp/>} />

        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
