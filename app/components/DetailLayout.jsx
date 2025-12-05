"use client";
import Image from "next/image";

const DetailLayout = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt = "Project Image", 
  children 
}) => {
  return (
    // ส่วน Container หลัก (ไม่รวม Navbar เพราะ Navbar จะใส่ใน Page หลัก)
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      
      {/* 1. ส่วนหัวข้อ (Title Section) */}
      <div className="text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
          {title}
        </h1>
        {/* เช็คว่าถ้ามี subtitle ค่อยแสดง */}
        {subtitle && (
          <p className="text-xl text-gray-500 font-medium">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2. ส่วนรูปภาพ (Image Section) */}
      {/* ตั้งค่า h-[500px] md:h-[600px] และ object-contain เพื่อให้รูปไม่โดนตัด */}
      <div className="relative w-full h-[500px] md:h-[600px] mb-10 rounded-2xl overflow-hidden shadow-lg bg-gray-200 border border-gray-300">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain " // ใส่ padding นิดหน่อยให้รูปไม่ติดขอบ
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            No Image Available
          </div>
        )}
      </div>

      {/* 3. ส่วนคำอธิบาย (Content Section) */}
      {/* รับ children เข้ามา ทำให้เราใส่ text, list หรือตารางจากภายนอกได้อิสระ */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm text-lg text-gray-700 leading-relaxed space-y-6">
        {children}
      </div>

    </div>
  );
};

export default DetailLayout;