"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectCard from "@/app/components/Projectcard";

// 1. นำเข้า Hook (ไม่ต้องนำเข้า translations แล้ว)
import { useLanguage } from "@/app/context/LanguageContext";

// Icons
import { FaSchool, FaBookReader, FaGraduationCap, FaUniversity, FaCalendarAlt, FaLinkedin } from "react-icons/fa";
import { RiAccountCircleLine, RiAdminFill } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { PiProjectorScreenFill } from "react-icons/pi";

export default function Home() {
  // 2. เรียกใช้ Hook เพื่อดึงค่าภาษาปัจจุบัน
  const { language } = useLanguage();

  // 3. ข้อมูล Projects (กำหนดข้อความตรงนี้เลย)
  const projects = [
    {
      id: 1,
      title: "LINE GIRL",
      image: "/ภาพถ่ายหน้าจอ 2568-11-09 เวลา 20.17.49.png",
      description: language === 'th' 
        ? "โปรเจกต์นี้จะเกี่ยวข้องกับงานภายในคลาสเรียนของผมครับ คือ การออกแบบเว็บแอปพลิเคชัน ซึ่งมีต้นแบบเป็นธุรกิจ Line Man แต่เป็นการสั่งอาหารและรับที่สาขาเท่านั้น ซึ่งผมรับผิดชอบในส่วน front-end โดยการออกแบบให้สอดคล้องกับ UX/UI ของเว็บไซต์ในต้นแบบ และเชื่อมต่อกับ back-end เพื่อให้เว็บไซต์สามารถใช้งานได้จริง สิ่งที่พิเศษของโปรเจกต์นี้คือการจัดการระบบที่ง่ายและการจัดการผู้ใช้งานอย่างเป็นระบบ มีการแยกบทบาทในแอพที่ชัดเจน รวมถึงการใช้โมเดล Agile ในการทำงานของทีมพัฒนา ดูรายละเอียดเพิ่มเติมได้ที่ลิงก์ GitHub"
        : "This project relates to my classwork involving web application design, modeled after Line Man but focusing on pick-up orders. I was responsible for the Front-end, ensuring UX/UI consistency with the prototype and connecting with the Back-end for functionality. Key features include easy system management, systematic user role separation, and Agile development methodology. See more details on GitHub.",
      link: "https://github.com/Tanakorn12345/testweb",
      buttonText: "View on GitHub",
      type: "github"
    },
    {
      id: 2,
      title: "Software engineering (Booking room)",
      image: "/Screenshot 2568-12-06 at 20.23.54.png",
      description: language === 'th'
        ? "โปรเจ็กต์นี้เกี่ยวกับงานภายในคลาสของผมครับ คือ การทำระบบการจัดการจองห้องประชุมและห้องเรียนภายในมหาวิทยาลัย เพื่อแก้ปัญหาการจองห้องที่ซับซ้อนและลดความผิดพลาดในการจัดการตารางเวลา โดยมีการใช้ Use Case Diagram และ Data Flow Diagram (DFD Level 0-2) เพื่อจำลองการไหลของข้อมูลและการทำงานของระบบ มีการจัดทำ Structure Chart เพื่อวางโครงสร้างโมดูลการทำงาน เช่น การจอง และยังมีการออกแบบระบบให้รองรับการทำงานผ่าน Web Application และมีการเชื่อมต่อฐานข้อมูล (เช่น Google Firebase)"
        : "A university room booking management system project designed to solve complexity and scheduling errors. Utilizing Use Case Diagrams, DFDs (Level 0-2), and Structure Charts to model data flow and modules like booking. The system is designed as a Web Application integrated with Google Firebase.",
      link: "/Software",
      buttonText: language === 'th' ? "ดูเพิ่มเติม" : "Do more",
      type: "website"
    },
    {
      id: 3,
      title: "Figma design in Software engineering",
      image: "/Screenshot 2568-12-05 at 11.46.12.png",
      description: language === 'th'
        ? "โปรเจ็กต์นี้เกี่ยวกับงานภายในคลาสของผมครับ คือ การทำระบบการจัดการจองห้องประชุมและห้องเรียนภายในมหาวิทยาลัย ในส่วนของการออกแบบ Prototype ก่อนนำไป implememt จริง โดยมีการออกแบบให้ใช้ง่าย มีระบบที่ไม่ซับซ้อน สามารถจัดการได้ง่าย"
        : "This project focuses on the UI/UX Prototype design for the university room booking system using Figma. The goal was to create a user-friendly, uncomplicated interface that is easy to manage before actual implementation.",
      link: "/Software/Figma",
      buttonText: language === 'th' ? "ดูเพิ่มเติม" : "Do more",
      type: "website"
    }
  ];

  return (
    <>
      <Navbar />

      {/* ส่วนแนะนำตัว (Hero Section) */}
      <div className="flex items-center justify-center bg-white dark:bg-zinc-900 px-10 pt-16 pb-20 transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          <div className="relative w-60 h-60 flex-shrink-0">
            <Image
              src="/20241009_083423_368.JPG"
              alt="Profile"
              fill
              className="rounded-full object-cover shadow-xl"
            />
          </div>
          <div className="text-gray-800 dark:text-gray-100">
            <h1 className="text-4xl font-semibold mb-4">
              {language === 'th' ? "สวัสดีครับ" : "Hello,"}
            </h1>
            <h3 className="text-xl leading-relaxed">
              {language === 'th' ? "ผมชื่อ" : "My name is"}{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {language === 'th' ? "นายธนกร ทิพย์วารีรัตนะ" : "Tanakorn Tipwarreerattana"}
              </span>
              <br/>
              {language === 'th' 
                ? "โดยผมมีความสนใจทางด้านการพัฒนาด้านเว็บแอพพลิเคชั่นทางด้าน Front-end เพราะผมมีทักษะทางด้านการดีไซน์และการใช้ framework ทางด้าน front-end เป็นหลักและพร้อมเรียนรู้ framework ใหม่ๆในอนาคตครับ"
                : "I am interested in Front-end web application development because I have skills in design and using Front-end frameworks, and I am ready to learn new frameworks in the future."
              }
            </h3>
          </div>
        </div>
      </div>

      {/* ส่วน About Me & Education */}
      <div className="bg-gray-50 dark:bg-zinc-800 px-10 py-16 transition-colors duration-300" id="aboutme">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* ABOUT ME */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-gray-300 border-b pb-2 flex items-center gap-3">
              <RiAccountCircleLine className="text-blue-600 text-3xl" />
              <span className="text-gray-600 dark:text-gray-300">
                {language === 'th' ? "เกี่ยวกับฉัน" : "ABOUT ME"}
              </span>
            </h2>
            <div className="space-y-7 text-lg text-gray-700 dark:text-gray-300">
              <p className="flex items-center gap-3">
                <RiAdminFill className="text-black dark:text-white text-3xl" />
                <span>
                  <strong>{language === 'th' ? "ชื่อ :" : "Name :"}</strong>{" "}
                  {language === 'th' ? "นายธนกร ทิพย์วารีรัตนะ" : "Tanakorn Tipwarreerattana"}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FaBookReader className="text-black dark:text-white text-3xl" />
                <span>
                  <strong>{language === 'th' ? "คณะ :" : "Faculty :"}</strong>{" "}
                  {language === 'th' ? "เทคโนโลยีสารสนเทศและการสื่อสาร" : "Faculty of ICT"}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <IoMdPhonePortrait className="text-black dark:text-white text-3xl" />
                <span>
                  <strong>{language === 'th' ? "เบอร์โทร :" : "Phone :"}</strong> 083-251-1456
                </span>
              </p>
              <p className="flex items-center gap-3">
                <MdAttachEmail className="text-black dark:text-white text-3xl" />
                <span>
                  <strong>{language === 'th' ? "อีเมล :" : "Email :"}</strong> tanakorn.tip@student.mahidol.edu
                </span>
              </p>
              <p className="flex items-center gap-3">
  <a
    href="https://www.linkedin.com/in/tanakorn-tipwarreerattana-1a6053364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3"
  >
    <FaLinkedin className="text-black dark:text-white text-3xl cursor-pointer" />
    <span>
      <strong>LinkedIn :</strong> Tanakorn Tipwarreerattana
    </span>
  </a>
</p>

            </div>
          </div>

          {/* EDUCATION */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-gray-300 border-b pb-2 flex items-center gap-3">
              <FaGraduationCap className="text-blue-600 text-3xl" />
              <span className="text-gray-600 dark:text-gray-300">
                {language === 'th' ? "การศึกษา" : "EDUCATION"}
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              
              {/* High School */}
              <div className="border-l-4 border-purple-400 pl-4">
                <p className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                  <FaSchool className="text-purple-600" />
                  {language === 'th' ? "โรงเรียนเทพศิรินทร์ นนทบุรี" : "Debsirin Nonthaburi School"}
                </p>
                <p className="ml-8 text-gray-600 dark:text-gray-400">
                  {language === 'th' ? "แผนการเรียน ภาษาอังกฤษ – คณิตศาสตร์" : "English - Mathematics Program"}
                </p>
                <p className="ml-8 flex items-center gap-2 text-gray-500 mt-1 text-sm">
                  <FaCalendarAlt /> 2560 – 2566
                </p>
              </div>

              {/* University */}
              <div className="border-l-4 border-indigo-500 pl-4">
                <p className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                  <FaUniversity className="text-indigo-600" />
                  {language === 'th' ? "มหาวิทยาลัยมหิดล" : "Mahidol University"}
                </p>
                <p className="ml-8 text-gray-600 dark:text-gray-400">
                  {language === 'th' 
                    ? "คณะเทคโนโลยีสารสนเทศและการสื่อสาร — สาขาวิทยาการและเทคโนโลยีดิจิทัล" 
                    : "Faculty of ICT — D.S.T. (Digital Science and Technology)"}
                </p>
                <p className="ml-8 flex items-center gap-2 text-gray-500 mt-1 text-sm">
                  <FaCalendarAlt /> {language === 'th' ? "2567 – ปัจจุบัน" : "2024 – Present"}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <SkillsSection />

      {/* MY PROJECT SECTION */}
      <section className="bg-gray-50 dark:bg-zinc-800 px-10 py-20 flex flex-col items-center transition-colors duration-300">
        <div className="max-w-6xl w-full space-y-10">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10 border-b-4 border-blue-500 inline-flex items-center gap-3 pb-2">
            <PiProjectorScreenFill className="text-blue-500" />
            {language === 'th' ? "โปรเจกต์ของฉัน" : "MY PROJECTS"}
          </h2>

          {/* วนลูปเรียกใช้ ProjectCard */}
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              imageSrc={project.image}
              description={project.description}
              link={project.link}          
              buttonText={project.buttonText}
              type={project.type}
            />
          ))}
        </div>
      </section>
    </>
  );
}