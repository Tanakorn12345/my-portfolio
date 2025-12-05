"use client";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa"; 
// 1. import ไอคอนลูกโลกเพิ่ม (FaGlobe)
import Link from "next/link"; // ✅ 1. นำเข้า Link
// รับ props เพิ่ม: link (แทน githubLink), buttonText, และ type
const ProjectCard = ({ title, imageSrc, description, link, buttonText, type }) => {
    const isExternal = link.startsWith("http");
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow">
      
      {/* ส่วนรูปภาพ (เหมือนเดิม) */}
      <div className="relative w-full md:w-1/3 h-48 md:h-48 flex-shrink-0">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover rounded-lg" />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* ส่วนเนื้อหา */}
      <div className="flex flex-col justify-between w-full md:w-2/3">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        
       {/* ✅ 3. ใช้ Link component แทน a tag */}
       <Link
          href={link}
          // ถ้าเป็นเว็บนอก ให้เปิดแท็บใหม่ (_blank) ถ้าเว็บในเปิดหน้าเดิม
          target={isExternal ? "_blank" : "_self"} 
          className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors w-fit justify-center"
        >
          {/* เลือก Icon */}
          {type === 'github' && <FaGithub className="text-lg" />}
          {type === 'website' && <FaGlobe className="text-lg" />}
          {type === 'internal' && <FaArrowRight className="text-lg" />} {/* ไอคอนสำหรับหน้าภายใน */}
          
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;