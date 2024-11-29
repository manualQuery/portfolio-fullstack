// src/components/Navbar.tsx
"use client";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faSignInAlt, faAd } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //   <nav
  //     // style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
  //     className="flex justify-end gap-4"
  //   >
  //     <Link href="/" aria-label="Go to home page">
  //       <button className="nav-button">
  //         <FontAwesomeIcon icon={faHome} /> Home
  //       </button>
  //     </Link>
  //     <Link href="/login" aria-label="Login or Logout">
  //       <button className="nav-button">
  //         <FontAwesomeIcon icon={faSignInAlt} /> Login/Logout
  //       </button>
  //     </Link>
  //     <Link href="/advert" aria-label="View advertisements">
  //       <button className="nav-button">
  //         <FontAwesomeIcon icon={faAd} /> Advert
  //       </button>
  //     </Link>
  //   </nav>
  return (
    <nav className="flex items-center justify-between mb-20 h-16">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* <Image src="/images/logo.svg" alt="Logo" width={50} height={40} />
         */}
        <h1>CHimexCode</h1>
      </div>

      {/* Navigation Links and Button Section */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className=" hover:bg-blue-300 hover:text-white transition ease-linear duration-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>

          <Link
            href="/services"
            className=" hover:bg-blue-300 hover:text-white transition ease-linear duration-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            view Profile
          </Link>
        </div>

        {/* Button */}
        <button
          className="hidden md:block px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 
          text-md rounded-md hover:bg-blue-300 hover:text-white transition ease-linear duration-500"
        >
          Login
        </button>
        <button
          className="hidden md:block px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 
          text-md rounded-md hover:bg-blue-300 hover:text-white transition ease-linear duration-500"
        >
          Register
        </button>
        {/* Mobile Menu Button */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}></div>
    </nav>
  );
};

export default Navbar;
