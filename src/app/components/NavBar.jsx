"use client";

import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { RiLogoutCircleRLine } from "react-icons/ri";

const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleLogout = () => {
    const userStringified = JSON.stringify({});
    localStorage.setItem("user", userStringified);
    setLoggedInUser({});
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-200">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <RxHamburgerMenu size={30} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-30 p-2 shadow">
              <div className="sidebar-icon">
                <Link href="/home">
                  <FaHome size={30} />
                </Link>
              </div>
              <div className="sidebar-icon">
                <Link href="/home/profile">
                  <CgProfile size={30} />
                </Link>
              </div>
              <div className="sidebar-icon">
                <Link href="/home/progress">
                  <GiProgression size={30} />
                </Link>
              </div>
              <div className="sidebar-icon">
                <Link href="/home/shop">
                  <TiShoppingCart size={30} />
                </Link>
              </div>
            </ul>
          </div>
          <Link href="/home" className="btn btn-ghost text-xl">
            <Image
              alt="Tailwind CSS Navbar component"
              width={50}
              height={50}
              src="/logo-no-bg.png"
            />
            Byte Size Habits
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/home/profile">Profile</Link>
            </li>
            <li>
              <Link href="/home/progress">Progress</Link>
            </li>
            <li>
              <Link href="/home/shop">ItemShop</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/" className="hidden lg:block m-4" onClick={handleLogout}>
            <button className="btn text-lg">
              Logout
              <RiLogoutCircleRLine size={25} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
