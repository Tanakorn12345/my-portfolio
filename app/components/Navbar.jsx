import React from "react";
import { RiAccountBox2Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Text */}
          <div className="flex items-center space-x-2">
            <RiAccountBox2Fill className="size-8" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              MY PORTFOLIO
            </h1>
          </div>

          {/* Menu */}
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
              >
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
