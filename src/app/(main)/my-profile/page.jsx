"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import 'animate.css';

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-50 via-white to-purple-50">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No user found</p>
      </div>
    );
  }

  return (
    <section className="py-14 min-h-screen bg-linear-to-r from-indigo-50 via-white to-purple-50 animate__animated animate__backInDown">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 text-center">
          
          {/* Profile Image */}
          <div className="w-28 h-28 relative">
            <Image
              src={user.image || "/default-avatar.png"}
              alt={user.name}
              fill
              className="rounded-full object-cover border-4 border-indigo-200"
            />
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#161439]">
              {user.name}
            </h2>
            <p className="text-gray-500 mt-1">{user.email}</p>

            <span className="inline-block mt-3 px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">
              Active Learner 🚀
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            
            <Link href="/edit-profile">
              <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                Edit Profile
              </button>
            </Link>

            <button
              onClick={() => authClient.signOut()}
              className="px-5 py-2 rounded-lg bg-red-100 text-red-500 font-medium hover:bg-red-200 transition"
            >
              Logout
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MyProfilePage;