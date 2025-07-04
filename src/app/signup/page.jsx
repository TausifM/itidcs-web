"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    else if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    console.log("Registered:", form);
    setSubmitting(false);
  };

  return (
    <main
      className="min-h-screen 
    flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-indigo-100 px-4 sd:px-6 lg:px-8 pt-12 pb-12"
    >
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-3xl p-10 w-full max-w-md space-y-6 transition-all"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Signup for <span className="text-indigo-600">ITIDCS</span> Account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Join the future of AI, Data Science & Job Ready Tech Training 
          </p>
        </div>

        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`mt-1 w-full px-4 py-2 rounded-xl border outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            } bg-white shadow-inner`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`mt-1 w-full px-4 py-2 rounded-xl border outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            } bg-white shadow-inner`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`mt-1 w-full px-4 py-2 rounded-xl border outline-none focus:ring-2 ${
              errors.password
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            } bg-white shadow-inner`}
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className={`mt-1 w-full px-4 py-2 rounded-xl border outline-none focus:ring-2 ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            } bg-white shadow-inner`}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500 mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] font-semibold disabled:opacity-60"
        >
          {submitting ? "Creating account..." : "Register"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
