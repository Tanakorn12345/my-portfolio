"use client";
import React from 'react';
import Navbar from "@/app/components/Navbar";
import DetailLayout from "@/app/components/DetailLayout";
import { FaFigma } from "react-icons/fa";

// 1. นำเข้า Hook สำหรับเปลี่ยนภาษา
import { useLanguage } from "@/app/context/LanguageContext";

function Page() {
  // 2. ดึงค่าภาษาปัจจุบัน
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* =========================================================
          SECTION 1: Use Case Diagram
         ========================================================= */}
      <DetailLayout
        title="Use case diagram"
        subtitle={language === 'th' ? "เป็นการออกแบบ use case" : "Use case design"}
        imageSrc="/Screenshot 2568-12-05 at 12.16.19.png"
        imageAlt="Use Case Diagram"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Use Case" : "Use Case Details"}
        </h3>
        
        <p>
          {language === 'th' 
            ? "เป็นการอธิบายว่าใน Use case ของระบบมีผู้กระทำกับระบบ 3 ตำแหน่งคือ ผู้ใช้งาน เจ้าหน้าที่ และ แอดมินของระบบ"
            : "This explains that in the system's Use case, there are 3 actors interacting with the system: User, Staff, and System Admin."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 2: Data Flow Diagram
         ========================================================= */}
      <DetailLayout
        title="Data flow Level 0 - Context diagram"
        subtitle={language === 'th' ? "เป็นการออกแบบ Data flow Level 0 - Context diagram" : "Data flow Level 0 - Context diagram design"}
        imageSrc="/Screenshot 2568-12-05 at 13.11.18.png"
        imageAlt="data flow level 0 Diagram"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Data flow Level 0 - Context diagram" : "Data flow Level 0 - Context diagram Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "เป็นการอธิบายว่าใน Data flow level 0 - Context diagram มีการโขว์ภาพรวมของระบบว่าแต่ละบทบาทสามารถทำอะไรได้บ้างในระบบและทำงานร่วมกันอย่างไร โดยผู้ใช้งานทั่วไปจะสามารถ สร้างบัญขี ทำการจองห้องได้เป็นต้น ส่วนเจ้าหน้าที่ก็จะมีหน้าที่ในการรับคำขอของผู้ใช้งานที่ส่งเข้ามาเพื่อทำการอนุมัตื ดูแลการจัดการห้องทั้งหมดของระบบ และในส่วนของแอดมินจะมีหน้าที่ดูแลภาพรวมของระบบทั้งหมดเกี่ยวกับการจัดการผู้ใช้งานทั้งหมด"
            : "This illustrates the system overview, showing what each role can do and how they interact. Users can create accounts and book rooms. Staff are responsible for approving requests and managing rooms. Admins oversee the entire system and manage all user accounts."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 3: Structure Chart
         ========================================================= */}
      <DetailLayout
        title="Structure Chart Level 0 - 1"
        subtitle={language === 'th' ? "เป็นการออกแบบ Structure Chart Level 0 - 1" : "Structure Chart Level 0 - 1 design"}
        imageSrc="/Screenshot 2568-12-05 at 13.18.37.png"
        imageAlt="Structure Chart"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Structure Chart Level 0 - 1" : "Structure Chart Level 0 - 1 Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "เป็นการอธิบายว่าใน Sructure Chart จะดูว่าเห็นภาพรวมของระบบทั้งหมด ใน data flow level 0 - 1 สำหรับระบบจองห้องประชุม และห้องเรียนภายในมหาวิทยาลัย"
            : "The Structure Chart provides an overview of the entire system structure corresponding to Data Flow Level 0-1 for the university meeting room and classroom booking system."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 4: Prototype (Figma)
         ========================================================= */}
      <DetailLayout
        title="Prototype (Figma)"
        subtitle={language === 'th' ? "เป็นการออกแบบ Prototype (Figma)" : "Prototype (Figma) design"}
        imageSrc="/Screenshot 2568-12-05 at 13.26.49.png"
        imageAlt="Prototype (Figma)"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Prototype (Figma)" : "Prototype (Figma) Details"}
        </h3>
        
        <p className='mb-8'>
          {language === 'th'
            ? "เป็นการออกแบบ Prototype ของเว็บไซต์ก่อนนำไป implement จริงซึ่งจะเน้นความสบายตาอ่านง่าย มีระบบที่ไม่ซับซ้อนหรือ User-Friendly"
            : "This is the Prototype design of the website before actual implementation, focusing on visual comfort, readability, and a simple, User-Friendly interface."}
        </p>

        <div className="flex">
            <a
              href="https://www.figma.com/design/6BnLg0uEN9Jymy5dwv2y0K/library-systems?node-id=0-1&t=F5siO5Dn1JfOSpaA-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md"
            >
              <FaFigma className="text-xl" />
              <span>View in Figma</span>
            </a>
        </div>

      </DetailLayout>
      
    </div>
  );
}

export default Page;