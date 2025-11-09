"use client";
import Image from "next/image";
import Navbar from "../app/components/Navbar";
import { FaSchool , FaBookReader, FaGraduationCap,FaUniversity, FaCalendarAlt ,  FaGithub ,FaLinkedin } from "react-icons/fa";
import { RiAccountCircleLine , RiAdminFill } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";

import SkillsSection from "../app/components/SkillsSection";
import { PiProjectorScreenFill } from "react-icons/pi";


export default function Home() {
  const projects = [
    {
      title: "LINE GIRL",
      image: "/ภาพถ่ายหน้าจอ 2568-11-09 เวลา 20.17.49.png", // ใส่ path ของรูปของคุณ
      description:
        "โปรเจกต์นี้จะเกี่ยวข้องกับงานภายในคลาสเรียนของผมครับ คือ การออกแบบเว็บแอปพลิเคชัน ซึ่งมีต้นแบบเป็นธุรกิจ Line Man แต่เป็นการสั่งอาหารและรับที่สาขาเท่านั้น ซึ่งผมรับผิดชอบในส่วน front-end โดนการออกแบบให้สอดคล้องกับ UX/UI ของเว็บไซต์ในต้นแบบ  และเชื่อมต่อกับ back-end เพื่อให้เว็บไซต์สามารถใช้งานได้จริง สิ่งที่พิเศษของโปรเจกต์นี้คือการจัดการระบบที่ง่ายและการจัดการผู้ใช้งานอย่างเป็นระบบ มีการแยกบทบาทในแอพที่ชัดเจน รวมถึงการใช้โมเดล Agile ในการทำงานของทีมพัฒนา ดูรายละเอียดเพิ่มเติมได้ที่ลิงก์ GitHub",
      github: "https://github.com/Tanakorn12345/mypro1",
    }
    
  ];
  
  
  return (
    <>
      <Navbar />

      {/* ส่วนแนะนำตัว */}
      <div className="flex items-center justify-center bg-white px-10 pt-16 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          {/* รูปทางซ้าย */}
          <div className="relative w-60 h-60 flex-shrink-0">
            <Image
              src="/20241009_083423_368.JPG"
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* ข้อความทางขวา */}
          <div className="text-gray-800">
            <h1 className="text-4xl font-semibold mb-4">สวัสดีครับ </h1>
            <p className="text-xl leading-relaxed">
              ผมชื่อ <span className="font-bold">นายธนกร ทิพย์วารีรัตนะ</span>  
                   โดยผมมีความสนใจทางด้านการพัฒนาด้านเว็บแอพพลิเคชั่นทางด้าน Front-end 
              เพราะผมมีทักษะทางด้านการดีไซน์และการใช้ 
              framework ทางด้าน front-end เป็นหลักและพร้อมเรียนรู้ framework ใหม่ๆในอนาคตครับ
            </p>
          </div>
        </div>
      </div>

      {/* 🔽 ส่วนกล่อง 2 ใบเต็มจอ */}
      <div className="bg-gray-50 px-10 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* กล่องใบที่ 1 - ABOUT ME */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-6 text-gray-300 border-b pb-2 flex items-center gap-3">
              <RiAccountCircleLine className="text-blue-600 text-3xl" />
              <span className="text-gray-600">ABOUT ME</span>
            </h2>

            <div className="space-y-7 text-lg text-gray-700 ">
              <p className="flex items-center gap-3">
                <RiAdminFill className="text-black-600 text-3xl" />
                <span><strong>ชื่อ :</strong> นายธนกร ทิพย์วารีรัตนะ</span>
              </p>
              <p className="flex items-center gap-3">
                <FaBookReader className="text-black-600 text-3xl" />
                <span><strong>คณะ :</strong> เทคโนโลยีสารสนเทศและการสื่อสาร</span>
              </p>
              <p className="flex items-center gap-3">
                <IoMdPhonePortrait className="text-black-600 text-3xl" />
                <span><strong>เบอร์โทร :</strong> 083-251-1456</span>
              </p>
              <p className="flex items-center gap-3">
                <MdAttachEmail className="text-black-600 text-3xl" />
                <span><strong>อีเมล :</strong> tanakorn.tip@student.mahidol.edu</span>
              </p>
              <p className="flex items-center gap-3">
                <FaLinkedin className="text-black-600 text-3xl" />
                <span><strong>ลิงก์อิน :</strong> Tanakorn Tipwarreerattana</span>
              </p>
            </div>

            
          </div>

        
<div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
  <h2 className="text-2xl font-semibold mb-6 text-gray-300 border-b pb-2 flex items-center gap-3">
    <FaGraduationCap className="text-blue-600 text-3xl" />
    <span className="text-gray-600">EDUCATION</span>
  </h2>

  <div className="space-y-6 text-lg text-gray-700">
    {/* ม.ปลาย */}
    <div className="border-l-4 border-purple-400 pl-4">
      <p className="flex items-center gap-2 text-xl font-semibold text-gray-900">
        <FaSchool className="text-purple-600" />
        โรงเรียนเทพศิรินทร์ นนทบุรี
      </p>
      <p className="ml-8 text-gray-700">
        แผนการเรียน ภาษาอังกฤษ – คณิตศาสตร์
      </p>
      <p className="ml-8 flex items-center gap-2 text-gray-600 mt-1">
        <FaCalendarAlt className="text-gray-500" /> 2560 – 2562
      </p>
    </div>

    {/* ระดับปริญญาตรี */}
    <div className="border-l-4 border-indigo-500 pl-4">
      <p className="flex items-center gap-2 text-xl font-semibold text-gray-900">
        <FaUniversity className="text-indigo-600" />
        มหาวิทยาลัยมหิดล
      </p>
      <p className="ml-8 text-gray-700">
        คณะเทคโนโลยีสารสนเทศและการสื่อสาร — สาขาวิทยาการและเทคโนโลยีดิจิทัล
      </p>
      <p className="ml-8 flex items-center gap-2 text-gray-600 mt-1">
        <FaCalendarAlt className="text-gray-500" /> 2567– ปัจจุบัน
      </p>
    </div>
  </div>

 
</div>

        </div>
      </div>
       <SkillsSection/>


       <section className="bg-gray-50 px-10 py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 border-b-4 border-blue-500 inline-flex items-center gap-3 pb-2">
        <PiProjectorScreenFill className="text-blue-500" /> 
        MY PROJECT
        </h2>

        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow"
          >
            {/* รูปภาพทางซ้าย */}
            <div className="relative w-full md:w-1/3 h-48 md:h-48 flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* ข้อความทางขวา */}
            <div className="flex flex-col justify-between w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-6">{project.description}</p>
              <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors w-1/3 justify-center"
>
  <FaGithub className="text-lg" />
  View on GitHub
</a>

 
            </div>
          </div>
        ))}
      </div>

    </section>

    

    </>
  );
}
