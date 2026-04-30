"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { name, email, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      image: photo,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (res) {
      toast.success("Account created successfully 🎉");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-50 to-purple-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-center text-[#161439] mb-2">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(handleRegisterFunc)} className="space-y-4">
          
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 rounded-lg bg-gray-100"
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="text"
              {...register("photo", { required: "Photo URL is required" })}
              className="w-full p-2 rounded-lg bg-gray-100"
              placeholder="Photo URL"
            />
            {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
          </div>

          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 rounded-lg bg-gray-100"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
              className="w-full p-2 rounded-lg bg-gray-100"
              placeholder="Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;