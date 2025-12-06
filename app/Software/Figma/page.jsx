import React from 'react';
import Navbar from "@/app/components/Navbar";
import DetailLayout from "@/app/components/DetailLayout"; // 1. นำเข้า Component ที่เราเพิ่งสร้าง
import { FaFigma } from "react-icons/fa";

function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
           
      {/* 2. เรียกใช้ DetailLayout และส่งข้อมูลเข้าไป */}
      <DetailLayout
        title="Home page"
        subtitle="เป็นการออกแบบ Home page"
        imageSrc="/figma/Screenshot 2568-12-06 at 19.47.15.png"
        imageAlt="Homepage"
      >
        
        {/* 3. ส่วนเนื้อหาคำอธิบาย (Children) ใส่ HTML ตรงนี้ได้อิสระ */}
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          รายละเอียด Homepage
        </h3>
        
        <p>
          ในหน้านี้จะเป็นการออกแบบ Homepage จะเป็นการโชว์ห้องทั้งหมดที่มีอยู่ในระบบ 
          และแถบแสดงผลด้านบนจะโชว์ว่าในการจัดการระบบจะมี เจ้าหน้าที่และผู้ดูแลมีฟิลเตอร์ในการกรองห้อง
          เช่น การเลือกตามเวลา
        </p>

      </DetailLayout>

      <DetailLayout
        title="Booking page"
        subtitle="เป็นการออกแบบ Booking page"
        imageSrc="/figma/Screenshot 2568-12-06 at 19.52.36.png"
        imageAlt="Booking page"
      >
        
        {/* 3. ส่วนเนื้อหาคำอธิบาย (Children) ใส่ HTML ตรงนี้ได้อิสระ */}
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          รายละเอียด Booking page
        </h3>
        
        <p>
          ในหน้่านี้จะเป็นการออกแบบ Booking page โดยเป็นหน้าสำหรับการเลือกโซนของห้องว่าจะเลือกใช้โซนไหนโดนแบบ
          เป็นตามอาคารเช่น อาคาร ICT , อาคาร LIBRARY ก่อนที่จะทำการเลือกห้องในโซนนั้นต่อไป
        </p>

      </DetailLayout>


      <DetailLayout
        title="Zone page"
        subtitle="เป็นการออกแบบ Zone page"
        imageSrc="/figma/Screenshot 2568-12-06 at 20.01.50.png"
        imageAlt="Zone page"
      >
        
        {/* 3. ส่วนเนื้อหาคำอธิบาย (Children) ใส่ HTML ตรงนี้ได้อิสระ */}
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          รายละเอียด Zone page
        </h3>
        
        <p>
          ในหน้านี้จะเป็นการออกแบบ Zone page ซึ่งพอมีการเลือกอาคารแล้วจะเข้ามาที่หน้านี้ทันทีเพื่อเลือกโซนในอาคารนั้น
          โดยจะมีการโชว์ห้องที่ยังว่างหรือที่กำลังใช้งานอยู่ด้วยโดยจะมีเวลาให้เลือกด้วยเช่นกัน
        </p>

      </DetailLayout>


      <DetailLayout
        title="Review page"
        subtitle="เป็นการออกแบบ Review page"
        imageSrc="/figma/Screenshot 2568-12-06 at 20.09.38.png"
        imageAlt="Review page"
      >
        
        {/* 3. ส่วนเนื้อหาคำอธิบาย (Children) ใส่ HTML ตรงนี้ได้อิสระ */}
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          รายละเอียด Review page
        </h3>
        
        <p className='mb-8'>
          ในหน้านี้จะเป็นการออกแบบ Review page สำหรับการใช้งานเสร็จแล้วระบบจะมีการให้ผู้ใช้รีวิวในการใช้ห้องเพื่อคำแนะนำในครั้งต่อไป
          โดยมีรายละเอียดทั้งชื่อผู้ใช้ ดาวการให้คะแนน และความคิดเห็นเพิ่มเติม และวันที่รีวิว
        </p>

        
       

      </DetailLayout>


      <DetailLayout
        title="Staff dashboard page"
        subtitle="เป็นการออกแบบ Staff dashboard page"
        imageSrc="/figma/Screenshot 2568-12-06 at 20.14.26.png"
        imageAlt="Staff dashboard page"
      >
        
        {/* 3. ส่วนเนื้อหาคำอธิบาย (Children) ใส่ HTML ตรงนี้ได้อิสระ */}
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          รายละเอียด Staff dashboard page
        </h3>
        
        <p>
          ในหน้านี้จะเป็นการออกแบบ Staff dashboard page สำหรับจัดการระบบจองห้องที่ฝั่ง
          ผู้ใช้งานทั่วไปได้ส่งคำขอมา จะแสดงคำขอทั้งหมดของผู้ใช้ในหน้านี้ และแสดงประวัติการจองห้องของระบบด้วย
        </p>

      </DetailLayout>



      <DetailLayout
        title="Admin dashboard page"
        subtitle="เป็นการออกแบบ Admin dashboard page"
        imageSrc="/figma/Screenshot 2568-12-06 at 20.21.40.png"
        imageAlt="Admin dashboard page"
      >
        
        {/* 3. ส่วนเนื้อหาคำอธิบาย (Children) ใส่ HTML ตรงนี้ได้อิสระ */}
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          รายละเอียด Admin dashboard page
        </h3>
        
        <p>
          ในหน้านี้จะเป็นการออกแบบ Admin dashboard page สำหรับการจัดการระบบทั้งหมดในบทบาทผู้ดูแลระบบ
          จะสามารถจัดการผู้ใช้ในระบบเป็นส่วนใหญ่เช่น การแก้ไขข้อมูลผู้ใช้ การเพิ่มผู้ใช้ การลบผู้ใช้
        </p>

      </DetailLayout>

      
    </div>
  );
}

export default Page;