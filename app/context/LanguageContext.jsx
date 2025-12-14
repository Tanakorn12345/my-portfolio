"use client";
import React, { createContext, useState, useContext } from 'react';

// สร้าง Context
const LanguageContext = createContext();

// สร้าง Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("th"); // ค่าเริ่มต้นเป็นภาษาไทย

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "th" ? "en" : "th"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// สร้าง Hook เพื่อเรียกใช้ได้ง่ายๆ
export const useLanguage = () => useContext(LanguageContext);