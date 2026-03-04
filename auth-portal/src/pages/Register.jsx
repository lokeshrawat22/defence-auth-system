import React, { useState } from "react";
import API from "../services/Api";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    organisation: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {

    if (!form.organisation)
      return toast.error("Please select organisation");

    if (!form.username || !form.password)
      return toast.error("All fields are required");

    try {
      setLoading(true);

      const res = await API.post("/register", form);

      toast.success(res.data.message || "Registered Successfully 🚀");

      setTimeout(() => navigate("/"), 1200);

    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      <div className="w-full max-w-md backdrop-blur-lg bg-white/10
      border border-white/20 shadow-2xl rounded-2xl p-8 text-white">

        <div className="text-center mb-6">
          <FaUserShield className="text-4xl mx-auto text-green-400 mb-2" />
          <h1 className="text-2xl font-bold tracking-widest">
             DEFENCE ACCESS
          </h1>
        </div>

        <select
          name="organisation"
          value={form.organisation}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 bg-white/20 border border-white/30
          rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="" disabled>Select Organisation</option>
          <option value="NAVY" className="text-black">Indian Navy</option>
          <option value="ARMY" className="text-black">Indian Army</option>
          <option value="AIRFORCE" className="text-black">Indian Airforce</option>
        </select>

        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 bg-white/20 border border-white/30
          rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2
          focus:ring-green-500"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-3 py-2 bg-white/20 border border-white/30
            rounded-lg placeholder-gray-300 focus:outline-none
            focus:ring-2 focus:ring-green-500 pr-10"
          />

          <span
            className={`absolute right-3 top-2.5 cursor-pointer text-lg ${
              showPassword ? "text-green-400" : "text-gray-300"
            }`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          onClick={register}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 transition
          py-2 rounded-lg font-semibold tracking-wide shadow-lg
          disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "REGISTER"}
        </button>

        {loading && <Loader />}

        {/* Login Link */}
        <p className="text-center text-sm mt-4 text-gray-300">
          Already have an account?{" "}
          <Link to="/" className="text-green-400 font-semibold hover:underline">
            LOGIN
          </Link>
        </p>

      </div>
    </div>
  );
}
