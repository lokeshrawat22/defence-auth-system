import React, { useState } from "react";
import API from "../services/Api";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {

  const [form, setForm] = useState({
    username: "",
    password: "",
    organisation: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {

    if (!form.organisation) {
      return toast.error("Please select organisation");
    }

    if (!form.username || !form.password) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);

      const res = await API.post("/login", form, { withCredentials: true });

      const token = res.data.token;

      document.cookie = `token=${token}; path=/; SameSite=Lax`;

      toast.success("Login Successful 🚀");

      setTimeout(() => {

        if (res.data.redirectUrl) {
          window.location.href = res.data.redirectUrl;
        } else {

          const roleRedirect = {
            navy: "http://localhost:3000",
            army: "http://localhost:4300",
            airforce: "http://localhost:8000"
          };

          window.location.href = roleRedirect[res.data.role];
        }

      }, 1200);

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Login failed"
      );

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
          <p className="text-gray-300 text-sm">
            Secure Access Portal
          </p>
        </div>

        {/* Organisation */}
        <select
          className="w-full mb-4 px-3 py-2 bg-white/20 border border-white/30
          rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.organisation}
          onChange={(e) =>
            setForm({ ...form, organisation: e.target.value })
          }
        >
          <option value="" disabled>Select Organisation</option>
          <option value="navy" className="text-black">Indian Navy</option>
          <option value="army" className="text-black">Indian Army</option>
          <option value="airforce" className="text-black">Indian Airforce</option>
        </select>

        {/* Username */}
        <input
          className="w-full mb-4 px-3 py-2 bg-white/20 border border-white/30
          rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        {/* Password with Eye Icon */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 bg-white/20 border border-white/30
            rounded-lg placeholder-gray-300 focus:outline-none
            focus:ring-2 focus:ring-green-500 pr-10"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
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

        {/* Login Button */}
        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 transition
          py-2 rounded-lg font-semibold tracking-wide shadow-lg
          disabled:opacity-50"
        >
          {loading ? "Authenticating..." : "LOGIN"}
        </button>

        {loading && <Loader />}

        {/* Register */}
        <p className="text-center text-sm text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-green-400 font-semibold hover:underline"
          >
            REGISTER
          </Link>
        </p>

      </div>
    </div>
  );
}
