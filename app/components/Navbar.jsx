"use client";
import React, { useState } from "react";
import { RiAccountBox2Fill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Text */}
          <div className="flex items-center space-x-2">
            <RiAccountBox2Fill className="size-8 text-black dark:text-white" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white truncate">
              MY PORTFOLIO
            </h1>
          </div>

          {/* Desktop Menu & Language Switch */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-medium transition-colors"
                >
                  {language === 'th' ? "หน้าหลัก" : "Home"}
                </a>
              </li>
            </ul>

            {/* Language Switcher Group */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={toggleLanguage}
            >
              <span
                className={`text-sm font-bold transition-all duration-300 w-6 text-center ${
                  language === "th" ? "text-gray-800 dark:text-gray-200" : "text-blue-600"
                }`}
              >
                {language === "th" ? "TH" : "EN"}
              </span>

              <div
                className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out border border-gray-200 dark:border-gray-600 ${
                  language === "th" ? "bg-gray-200 dark:bg-gray-700" : "bg-blue-400"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    language === "en" ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
            
            {/* Admin Login Link */}
            <a 
              href="/admin/login" 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Login for Admin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Switcher */}
            <div 
              className="flex items-center gap-2 cursor-pointer mr-1" 
              onClick={toggleLanguage}
            >
              <span className={`text-xs font-bold w-5 text-center ${language === "th" ? "text-gray-800 dark:text-gray-200" : "text-blue-600"}`}>
                {language === "th" ? "TH" : "EN"}
              </span>
              <div className={`relative w-10 h-5 rounded-full p-0.5 transition-colors duration-300 ease-in-out border border-gray-200 dark:border-gray-600 ${language === "th" ? "bg-gray-200 dark:bg-gray-700" : "bg-blue-400"}`}>
                <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${language === "en" ? "translate-x-5" : "translate-x-0"}`} />
              </div>
            </div>

            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors"
            >
              {language === 'th' ? "หน้าหลัก" : "Home"}
            </a>
            
            <div className="pt-2 px-3 border-t border-gray-100 dark:border-zinc-800">
              <a 
                href="/admin/login" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex justify-center px-4 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Login for Admin
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}