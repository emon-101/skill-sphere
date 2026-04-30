"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    const { email, password } = data;

    try {
      const { data: res, error } = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (res) {
        toast.success("Login successful 🎉");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Redirecting to Google...");
      }
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-50 to-purple-50 px-4">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-center text-[#161439] mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Login to continue your journey
        </p>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition mb-4"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        <div className="divider">OR</div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">
          
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full p-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Password"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don&#39;t have an account?{" "}
          <Link href="/register" className="text-indigo-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;