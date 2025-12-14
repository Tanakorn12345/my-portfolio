"use client";
import React from 'react';
import Navbar from "@/app/components/Navbar";
import DetailLayout from "@/app/components/DetailLayout";
import { FaFigma } from "react-icons/fa";

// 1. นำเข้า Hook
import { useLanguage } from "@/app/context/LanguageContext";

function Page() {
  // 2. ดึงค่าภาษาปัจจุบัน
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
           
      {/* =========================================================
          SECTION 1: Home page
         ========================================================= */}
      <DetailLayout
        title="Home page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Home page" : "Home page design"}
        imageSrc="/figma/Screenshot 2568-12-06 at 19.47.15.png"
        imageAlt="Homepage"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Homepage" : "Homepage Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Homepage จะเป็นการโชว์ห้องทั้งหมดที่มีอยู่ในระบบ และแถบแสดงผลด้านบนจะโชว์ว่าในการจัดการระบบจะมี เจ้าหน้าที่และผู้ดูแลมีฟิลเตอร์ในการกรองห้อง เช่น การเลือกตามเวลา"
            : "This page designs the Homepage, displaying all available rooms in the system. The top bar indicates system management options for Staff and Admins, including filters for rooms, such as filtering by time."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 2: Booking page
         ========================================================= */}
      <DetailLayout
        title="Booking page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Booking page" : "Booking page design"}
        imageSrc="/figma/Screenshot 2568-12-06 at 19.52.36.png"
        imageAlt="Booking page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Booking page" : "Booking page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Booking page โดยเป็นหน้าสำหรับการเลือกโซนของห้องว่าจะเลือกใช้โซนไหนโดยแบ่งเป็นตามอาคารเช่น อาคาร ICT , อาคาร LIBRARY ก่อนที่จะทำการเลือกห้องในโซนนั้นต่อไป"
            : "This page designs the Booking page. It serves as the interface for selecting a room zone, categorized by buildings such as the ICT Building or LIBRARY, before proceeding to select a specific room within that zone."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 3: Zone page
         ========================================================= */}
      <DetailLayout
        title="Zone page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Zone page" : "Zone page design"}
        imageSrc="/figma/Screenshot 2568-12-06 at 20.01.50.png"
        imageAlt="Zone page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Zone page" : "Zone page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Zone page ซึ่งพอมีการเลือกอาคารแล้วจะเข้ามาที่หน้านี้ทันทีเพื่อเลือกโซนในอาคารนั้น โดยจะมีการโชว์ห้องที่ยังว่างหรือที่กำลังใช้งานอยู่ด้วยโดยจะมีเวลาให้เลือกด้วยเช่นกัน"
            : "This page designs the Zone page. Once a building is selected, users land here to choose a specific zone. It displays available or occupied rooms and includes time selection options."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 4: Review page
         ========================================================= */}
      <DetailLayout
        title="Review page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Review page" : "Review page design"}
        imageSrc="/figma/Screenshot 2568-12-06 at 20.09.38.png"
        imageAlt="Review page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Review page" : "Review page Details"}
        </h3>
        
        <p className='mb-8'>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Review page สำหรับการใช้งานเสร็จแล้วระบบจะมีการให้ผู้ใช้รีวิวในการใช้ห้องเพื่อคำแนะนำในครั้งต่อไป โดยมีรายละเอียดทั้งชื่อผู้ใช้ ดาวการให้คะแนน และความคิดเห็นเพิ่มเติม และวันที่รีวิว"
            : "This page designs the Review page. After using a room, the system allows users to leave a review for future reference. Details include username, star rating, additional comments, and the date of the review."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 5: Staff dashboard page
         ========================================================= */}
      <DetailLayout
        title="Staff dashboard page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Staff dashboard page" : "Staff dashboard page design"}
        imageSrc="/figma/Screenshot 2568-12-06 at 20.14.26.png"
        imageAlt="Staff dashboard page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Staff dashboard page" : "Staff dashboard page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Staff dashboard page สำหรับจัดการระบบจองห้องที่ฝั่ง ผู้ใช้งานทั่วไปได้ส่งคำขอมา จะแสดงคำขอทั้งหมดของผู้ใช้ในหน้านี้ และแสดงประวัติการจองห้องของระบบด้วย"
            : "This page designs the Staff dashboard page for managing room booking requests sent by general users. It displays all user requests and the system's booking history."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 6: Admin dashboard page
         ========================================================= */}
      <DetailLayout
        title="Admin dashboard page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Admin dashboard page" : "Admin dashboard page design"}
        imageSrc="/figma/Screenshot 2568-12-06 at 20.21.40.png"
        imageAlt="Admin dashboard page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Admin dashboard page" : "Admin dashboard page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Admin dashboard page สำหรับการจัดการระบบทั้งหมดในบทบาทผู้ดูแลระบบ จะสามารถจัดการผู้ใช้ในระบบเป็นส่วนใหญ่เช่น การแก้ไขข้อมูลผู้ใช้ การเพิ่มผู้ใช้ การลบผู้ใช้"
            : "This page designs the Admin dashboard page for overall system management by administrators. It allows managing system users, including editing user information, adding users, and deleting users."}
        </p>
      </DetailLayout>
      
    </div>
  );
}

export default Page;