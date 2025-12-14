"use client";
import React from "react";
import { RiAccountBox2Fill } from "react-icons/ri";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Text */}
          <div className="flex items-center space-x-2">
            <RiAccountBox2Fill className="size-8 text-black dark:text-white" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              MY PORTFOLIO
            </h1>
          </div>

          {/* Menu & Language Switch */}
          <div className="flex items-center gap-8">
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

            {/* --- Language Switcher Group --- */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={toggleLanguage}
            >
              
              {/* ข้อความแสดงภาษาปัจจุบัน (แสดงแค่คำเดียว) */}
              <span
                className={`text-sm font-bold transition-all duration-300 w-6 text-center ${
                  language === "th" ? "text-black-600" : "text-blue-600"
                }`}
              >
                {language === "th" ? "TH" : "EN"}
              </span>

              {/* ปุ่ม Switch (รางเลื่อน) */}
              <div
                className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out border border-gray-200 dark:border-gray-600 ${
                  language === "th" ? "bg-gray-200" : "bg-blue-400"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    language === "en" ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </div>
              
            </div>
      

          </div>
        </div>
      </div>
    </nav>
  );
}