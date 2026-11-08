
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdVerifiedUser, MdArrowBack } from "react-icons/md";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/user/verify-otp",
        { email, otp }
      );

      alert(res.data.message);

      navigate("/reset-password", {
        state: { email, otp }
      });

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">

      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">

        <div className="text-center mb-7">

          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MdVerifiedUser className="text-4xl text-blue-600" />
          </div>

          <h1 className="text-2xl font-bold mb-2">
            Verify OTP
          </h1>

          <p className="text-gray-500 text-sm">
            Enter the OTP sent to your registered email address.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <label className="block font-medium mb-2">
            Enter OTP
          </label>

          <input
            type="text"
            placeholder="Enter your OTP"
            maxLength={6}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-6 transition duration-300 disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

        </form>

        <div className="text-center mt-6">

          <Link
            to="/forgot-password"
            state={{ email }}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            <MdArrowBack />
            Back
          </Link>

        </div>

      </div>

    </div>
  );
};

export default VerifyOtp;
