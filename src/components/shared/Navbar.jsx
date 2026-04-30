"use client";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/courses"}>Courses</NavLink>
      </li>
      <li>
        <NavLink href={"/my-profile"}>My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#E1DAF1]">
      <div className="navbar md:w-9/10 mx-auto px-2 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="flex items-center justify-between gap-2 flex-col dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl text-[#06235B] font-bold">SKillSphere</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center justify-between gap-2">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {isPending ? (
            <span className="loading loading-ring loading-xl"></span>
          ) : user ? (
            <div className="flex items-center justify-center gap-4">
              <h2 className="font-bold hidden md:inline">Hello, {user.name}</h2>
              <Link href={'/my-profile'}>
                <Image
                src={user.image}
                width={40}
                height={40}
                alt="user"
                className="rounded-full h-10 w-10 object-cover cursor-pointer"
              />
              </Link>
              <button
                className="relative rounded-full px-5 py-1.5 font-semibold bg-[#FFC224] text-[#161439] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden group cursor-pointer"
                onClick={async () => await authClient.signOut()}
              >
                Sign Out
                <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent group-hover:left-full transition-all duration-700"></span>
              </button>
            </div>
          ) : (
            <button className="relative rounded-full px-5 py-1.5 font-semibold bg-[#FFC224] text-[#161439] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden group">
              <Link href="/login" className="relative z-10">
                Sign In
              </Link>

              {/* animated shine */}
              <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent group-hover:left-full transition-all duration-700"></span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
