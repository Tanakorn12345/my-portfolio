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
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 13.45.58.png"
        imageAlt="Homepage"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Homepage" : "Homepage Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Homepage จะเป็นการโชว์หน้าหลักของเว็บ linegirl โดนด้านบนจะเป็นแถบ navigation bar โดยผู้ใช้จะต้องทำการเข้าสู่ระบบก่อนเท่านั้นจึงจะสามารถเห็นหน้านี้ได้โดยจะโชว์ชื่อผู้ใช้พร้อมคำบอกเวลาและสามารถกดลงชื่อออกได้ถัดมาจะโชว์ร้านอาหารที่มีภายในระบบและจะมีการกรองประเภทของร้านอาหารได้ด้วย"
            : "This page shows the homepage design, displaying the main page of the linegirl website. The top will feature a navigation bar. Users must log in to see this page; it will display the username along with the time and allow users to log out. Below that, the list of restaurants available in the system will be shown, with the ability to filter by restaurant type."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 2: Booking page
         ========================================================= */}
      <DetailLayout
        title="Select login page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Select login page" : "Select login page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 13.51.06.png"
        imageAlt="Select login page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Select login page" : "Select login page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Select login page โดยเป็นหน้าสำหรับการเลือกการล็อคอินเข้าสู้ระบบว่าต้องการแบบไหนดดยมีทั้งหมด 3 แบบคือ ผู้ใช้ทั่วไป ร้านค้า และผู้ดูแลระบบและถ้าหากยังไม่มีบัญชีในระบบจะมีหน้าสำหรับการสร้างบัญชีด้วยเช่นกัน"
            : "This page shows the design of the Select Login page, where users can choose their preferred login method from three options: General User, Shop, and Administrator. If an account is not yet available, there will also be a page for creating one."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 3: Zone page
         ========================================================= */}
      <DetailLayout
        title="Create restaurant page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Create restaurant page" : "Create restaurant page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16.png"
        imageAlt="Create restaurant page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Create restaurant page" : "Create restaurant page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Create restaurant page ซึ่งพอมีการเลือกสร้างบัญชีสำหรับร้านอาหารครั้งแรกและเข้าสู่ระบบใหม่ ระบบจะพามาที่หน้านี้เพื่อสร้างข้อมูลของร้านอาหารโดยมีการกรอกรายละเอียดสำหรับร้านเช่น ขื่อ สาขา รูปภาพ เบอร์ อีเมลและเก็บลงฐานข้อมูล"
            : "This page shows the design of the Create restaurant page. When a customer creates a restaurant account for the first time and logs in, the system will take them to this page to create restaurant information. This involves filling in details such as name, branch, photos, phone number, and email, and storing the information in the database."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 4: Review page
         ========================================================= */}
      <DetailLayout
        title="Dashboard page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Dashboard page" : "Dashboard page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 14.04.59.png"
        imageAlt="Dashboard pagee"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Dashboard page" : "Dashboard page Details"}
        </h3>
        
        <p className='mb-8'>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Dashboard page สำหรับการใช้งานจัดการระบบของร้านค้าที่จะโชว์ทั้งยอดขายของวันนี้หรือคุณภาพของสัปดาห์นี้และยังมีโหมดการจัดการออเดอร์รวมและการจัดการเมนูภายในร้านสามารถตั้งเวลาเปิดและปิดของร้านได้ด้วย"
            : "This page showcases the dashboard design for managing your store, displaying today's sales and this week's quality. It also includes modes for managing aggregated orders and menu items, and allows you to set store opening and closing times."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 5: Staff dashboard page
         ========================================================= */}
      <DetailLayout
        title="Product overview page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Product overview page" : "Product overview page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 14.08.58.png"
        imageAlt="Product overview page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Product overview page" : "Product overview page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Product overview page สำหรับจัดการสินค้าภายในร้านโดยจะโชว์สินค้าที่มีทั้งหมดภายในร้านสามารถทำการแก้ไขสินค้า เพิ่มสินค้า หรือลบสินค้าได้"
            : "This page is a product overview page designed for managing products in the store. It will display all the products available in the store and allow you to edit, add, or delete products."}
        </p>
      </DetailLayout>

      {/* =========================================================
          SECTION 6: Admin dashboard page
         ========================================================= */}
      <DetailLayout
        title="Restaurant page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Restaurant page" : "Restaurant page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 14.13.16.png"
        imageAlt="Restaurant page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Restaurant page" : "Restaurant page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Restaurant page เป็หน้าที่โชว์สำหรับผู้ใช้ทั่วไป เมื่อกดร้านค้าจากหน้าหลักมาจะมาเจอหน้าร้านค้า โดยจะแสดงรายละเอียดของร้านค้าเบื้องต้นเช่น สินค้า ชื่อร้านและสาขา เวลาทำการของร้านโดยผู้ใช้ทั่วไปสามารถกดสั่งซื้อสินค้าได้จากหน้านี้่เลย"
            : "This page is designed for the Restaurant page, which is displayed for general users. When users click on the store link from the main page, they will be taken to the store's page, which will show basic details such as products, store name and branch locations, and opening hours. General users can then place orders directly from this page."}
        </p>
      </DetailLayout>

      <DetailLayout
        title="Order page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Order page" : "Order page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 14.17.21.png"
        imageAlt="Order page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Order page" : "Order page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Order page เป็หน้าที่โชว์สำหรับผู้ใช้ทั่วไป เมื่อมีการสั่งอาหารจากหน้าร้านค้าแล้วจะมีออเดอร์เพิ่มเข้ามาในหน้านี้ดดนสามารถตรวจสอบการสั่งซื้อของเราได้ว่ามีอะไรบ้าง โดยสามารถเลือกการชำระเงินได้ทั้งแบบเงินสด และ พร้อมเพย์จากนั้นจึงกดสั่งซื้อ"
            : "This page is designed as an Order page, which is displayed to general users. Once an order is placed from the restaurant, it will be added to this page, allowing users to check their order details. Payment options include cash and PromptPay, after which the user can proceed to checkout."}
        </p>
      </DetailLayout>

      <DetailLayout
        title="Review page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Review page" : "Review page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 14.21.22.png"
        imageAlt="Review page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Review page" : "Review page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Review page เป็นหน้าที่โชว์สำหรับผู้ใช้ทั่วไป เมื่อทำการสั่งซื้อเสร็จเรียบร้อยแล้วจะพามาที่หน้าสำหรับรีวิวสินค้าที่ได้สั่งไปมีรายละเอียดคือ สามารถกรอกดาวเพื่อให้คะแนนได้และแสดงความคิดเห็นได้ด้วย"
            : "This page is designed as a review page, displayed to general users after a complete purchase. It allows users to review the ordered product by giving it a star rating and leaving comments."}
        </p>
      </DetailLayout>

      <DetailLayout
        title="Overview admin page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Overview admin page" : "Overview admin page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 14.24.40.png"
        imageAlt="Overview admin page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Overview admin page" : "Overview admin page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Overview admin page เป็นหน้าที่โชว์สำหรับผู้ดูแลระบบ เมื่อเข้าสู่ระบบเข้ามาในหน้านี้จะขึ้นทันทีเป็นหน้าสำหรับการจัดการผู้ใช้ของระบบทั้งหมดโดยสามารถทำการ เพิ่มผู้ใช้ ลบผู้ใช้ และแก้ไขผู้ใช้ได้ อีกทั้งยังมีสิทธิในการเพิ่มแก้ไข banner ของเว็บได้ด้วย"
            : "This page provides an overview of the admin page design. This page is for system administrators and, upon logging in, immediately displays the page for managing all system users. Users can add, remove, and edit users, and also have the authority to add and edit website banners."}
        </p>
      </DetailLayout>

      <DetailLayout
        title="Add user page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Add user page" : "Add user page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 14.30.09.png"
        imageAlt="Add user page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Add user page" : "Add user page Details"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Add user page เป็นหน้าที่โชว์สำหรับผู้ดูแลระบบ สำหรับทำการเพิ่มข้อมูลผู้ใช้ของระบบด้วยตัวเองโดยจะมีรายละเอียดให้กรอกเพื่อสร้างผู้ใช้รายใหม่"
            : "This page is designed as an Add user page, displayed for system administrators to manually add user information. It will provide details for creating a new user."}
        </p>
      </DetailLayout>

      <DetailLayout
        title="Update user page"
        subtitle={language === 'th' ? "เป็นการออกแบบ Update user page" : "Update user page design"}
        imageSrc="/figma-linegirl/Screenshot 2568-12-16 at 14.31.50.png"
        imageAlt="Update user page"
      >
        <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2">
          {language === 'th' ? "รายละเอียด Update user page" : "Update user page"}
        </h3>
        
        <p>
          {language === 'th'
            ? "ในหน้านี้จะเป็นการออกแบบ Update user page เป็นหน้าที่โชว์สำหรับผู้ดูแลระบบ สำหรับการแก้ไขข้อมูลผู้ใช้เมื่อมามีการสร้างผู้ใช้นั้นไปแล้วสามารถมาแก้ไขได้ทั้ง role ของผู้ใช้สามารถเปลี่ยนรหัสผ่านได้อีกด้วย"
            : "This page is for updating the user page, and it's the page displayed for administrators to modify user information. Once a user has been created, they can edit their role and change their password."}
        </p>
      </DetailLayout>
      
    </div>
  );
}

export default Page;