
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdLockReset, MdArrowBack } from "react-icons/md";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";
  const otp = location.state?.otp || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Password does not match!");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/user/reset-password",
        { email, otp, newPassword }
      );

      alert(res.data.message);

      navigate("/signup");

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
            <MdLockReset className="text-4xl text-blue-600" />
          </div>

          <h1 className="text-2xl font-bold mb-2">
            Reset Password
          </h1>

          <p className="text-gray-500 text-sm">
            Create a new password for your account.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <label className="block font-medium mb-2">
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={6}
          />

          <label className="block font-medium mt-5 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-6 transition duration-300 disabled:opacity-60"
          >
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>

        </form>

        <div className="text-center mt-6">

          <Link
            to="/signup"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            <MdArrowBack />
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ResetPassword;
