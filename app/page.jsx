"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectCard from "@/app/components/Projectcard";
import InternshipSection from '@/app/components/InternshipSection';

// 1. นำเข้า Hook 
import { useLanguage } from "@/app/context/LanguageContext";
import { useState, useEffect } from "react";

// Icons
import { FaSchool, FaBookReader, FaGraduationCap, FaUniversity, FaCalendarAlt, FaLinkedin } from "react-icons/fa";
import { RiAccountCircleLine, RiAdminFill } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { PiProjectorScreenFill } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";

export default function Home() {
  // 2. เรียกใช้ Hook เพื่อดึงค่าภาษาปัจจุบัน
  const { language } = useLanguage();

  const [projects, setProjects] = useState([]);
  const [internships, setInternships] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projRes, intRes, profRes] = await Promise.all([
          fetch(`/api/projects`),
          fetch(`/api/internships`),
          fetch(`/api/profile`)
        ]);
        
        if (projRes.ok) {
          const data = await projRes.json();
          setProjects(data);
        }
        if (intRes.ok) {
          const data = await intRes.json();
          setInternships(data);
        }
        if (profRes.ok) {
          const data = await profRes.json();
          if (data.id) setProfile(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
                {profile?.name || (language === 'th' ? "นายธนกร ทิพย์วารีรัตนะ" : "Tanakorn Tipwarreerattana")}
              </span>
              <br/>
              {profile?.bio || (language === 'th' 
                ? "โดยผมมีความสนใจทางด้านการพัฒนาด้านเว็บแอพพลิเคชั่นทางด้าน Front-end เพราะผมมีทักษะทางด้านการดีไซน์และการใช้ framework ทางด้าน front-end เป็นหลักและพร้อมเรียนรู้ framework ใหม่ๆในอนาคตครับ"
                : "I am interested in Front-end web application development because I have skills in design and using Front-end frameworks, and I am ready to learn new frameworks in the future."
              )}
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
                  {profile?.name || (language === 'th' ? "นายธนกร ทิพย์วารีรัตนะ" : "Tanakorn Tipwarreerattana")}
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
                  <strong>{language === 'th' ? "อีเมล :" : "Email :"}</strong> {profile?.email || "tanakorn.tip@student.mahidol.edu"}
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
                    <strong>LinkedIn :</strong> {profile?.name || "Tanakorn Tipwarreerattana"}
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
          {projects.map((project) => {
            const type = project.tags?.[0] || 'website';
            
            let defaultLink = '#';
            let defaultButtonText = '';
            let targetType = type;

            if (type === 'internal') {
              defaultLink = `/projects/${project.id}`;
              defaultButtonText = language === 'th' ? "อ่านรายละเอียด" : "Read Details";
            } else if (type === 'github') {
              defaultLink = project.githubUrl || project.projectUrl || '#';
              defaultButtonText = "View on GitHub";
            } else {
              // website
              defaultLink = project.projectUrl || project.githubUrl || '#';
              defaultButtonText = language === 'th' ? "เยี่ยมชมเว็บไซต์" : "Visit Website";
            }

            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                imageSrc={project.imageUrl || project.image}
                description={project.description}
                link={defaultLink}
                buttonText={defaultButtonText}
                type={targetType}
                status={project.tags?.[1] || 'success'}
              />
            );
          })}
        </div>
      </section>

      {/* INTERNSHIP SECTION */}
      <section className="bg-white dark:bg-zinc-900 px-10 py-10 flex flex-col items-center transition-colors duration-300">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10 border-b-4 border-blue-500 inline-flex items-center gap-3 pb-2">
            <CgWorkAlt className="text-blue-500 size-9" />
            {language === 'th' ? "การฝึกงาน" : "INTERNSHIP"}
          </h2>
          
          {/* วนลูปเรียกใช้ InternshipSection ที่เราแปลงเป็น Card แล้ว */}
          <div className="w-full space-y-8">
            {internships.map((internship) => (
              <InternshipSection 
                key={internship.id}
                id={internship.id}
                role={internship.role}
                company={internship.company}
                duration={`${internship.startDate} - ${internship.endDate}`}
                responsibilities={internship.description?.split('\n') || []}
                techStack={[]}
                logoSrc={internship.imageUrl || "/internship/logo exzy.jpg"}
              />
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}