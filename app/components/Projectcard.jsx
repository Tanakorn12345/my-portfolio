"use client";
import Image from "next/image";
import { FaGithub, FaGlobe, FaArrowRight } from "react-icons/fa"; 
import Link from "next/link"; 
//  1. นำเข้า useLanguage Hook
import { useLanguage } from "@/app/context/LanguageContext";

const ProjectCard = ({ id, title, imageSrc, description, link, buttonText, type, status }) => {
    const isExternal = link ? link.startsWith("http") : false;
    //  2. เรียกใช้ language เพื่อเช็คภาษาปัจจุบัน
    const { language } = useLanguage();
    
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow dark:bg-zinc-900">
      
      {/* ส่วนรูปภาพ */}
      <div className="relative w-full md:w-1/3 h-48 md:h-48 flex-shrink-0">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover rounded-lg" />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 dark:bg-zinc-800">
            No Image
          </div>
        )}
      </div>

      {/* ส่วนเนื้อหา */}
      <div className="flex flex-col justify-between w-full md:w-2/3">
        
        <div className="flex justify-between items-start md:items-center mb-4 gap-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          
          {/*  3. ใส่เงื่อนไขภาษาลงในข้อความสถานะ */}
          {status === 'success' && (
            <span className="px-5 py-3 text-xs font-semibold text-green-700 bg-green-100 border border-green-200 rounded-full dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 whitespace-nowrap">
              {language === 'th' ? 'เสร็จสมบูรณ์' : 'Success'}
            </span>
          )}
          {status === 'in-progress' && (
            <span className="px-5 py-3 text-xs font-semibold text-yellow-700 bg-yellow-100 border border-yellow-200 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800 whitespace-nowrap">
              {language === 'th' ? 'กำลังดำเนินการ' : 'In Progress'}
            </span>
          )}
        </div>

        <p className="text-gray-700 mb-6 dark:text-gray-300 line-clamp-3">{description}</p>
        
       <Link
          href={link || '#'}
          target={isExternal ? "_blank" : "_self"} 
          className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors w-fit justify-center dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          {type === 'github' && <FaGithub className="text-lg" />}
          {type === 'website' && <FaGlobe className="text-lg" />}
          {type === 'internal' && <FaArrowRight className="text-lg" />}
          
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;