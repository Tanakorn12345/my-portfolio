const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const softwareContent = [
  {
    "id": "sec-1",
    "title": "Use case diagram",
    "subtitle": "เป็นการออกแบบ use case",
    "subtitleEn": "Use case design",
    "imageSrc": "/Screenshot 2568-12-05 at 12.16.19.png",
    "contentTitle": "รายละเอียด Use Case",
    "contentTitleEn": "Use Case Details",
    "description": "เป็นการอธิบายว่าใน Use case ของระบบมีผู้กระทำกับระบบ 3 ตำแหน่งคือ ผู้ใช้งาน เจ้าหน้าที่ และ แอดมินของระบบ",
    "descriptionEn": "This explains that in the system's Use case, there are 3 actors interacting with the system: User, Staff, and System Admin."
  },
  {
    "id": "sec-2",
    "title": "Data flow Level 0 - Context diagram",
    "subtitle": "เป็นการออกแบบ Data flow Level 0 - Context diagram",
    "subtitleEn": "Data flow Level 0 - Context diagram design",
    "imageSrc": "/Screenshot 2568-12-05 at 13.11.18.png",
    "contentTitle": "รายละเอียด Data flow Level 0 - Context diagram",
    "contentTitleEn": "Data flow Level 0 - Context diagram Details",
    "description": "เป็นการอธิบายว่าใน Data flow level 0 - Context diagram มีการโขว์ภาพรวมของระบบว่าแต่ละบทบาทสามารถทำอะไรได้บ้างในระบบและทำงานร่วมกันอย่างไร โดยผู้ใช้งานทั่วไปจะสามารถ สร้างบัญขี ทำการจองห้องได้เป็นต้น ส่วนเจ้าหน้าที่ก็จะมีหน้าที่ในการรับคำขอของผู้ใช้งานที่ส่งเข้ามาเพื่อทำการอนุมัตื ดูแลการจัดการห้องทั้งหมดของระบบ และในส่วนของแอดมินจะมีหน้าที่ดูแลภาพรวมของระบบทั้งหมดเกี่ยวกับการจัดการผู้ใช้งานทั้งหมด",
    "descriptionEn": "This illustrates the system overview, showing what each role can do and how they interact. Users can create accounts and book rooms. Staff are responsible for approving requests and managing rooms. Admins oversee the entire system and manage all user accounts."
  },
  {
    "id": "sec-3",
    "title": "Structure Chart Level 0 - 1",
    "subtitle": "เป็นการออกแบบ Structure Chart Level 0 - 1",
    "subtitleEn": "Structure Chart Level 0 - 1 design",
    "imageSrc": "/Screenshot 2568-12-05 at 13.18.37.png",
    "contentTitle": "รายละเอียด Structure Chart Level 0 - 1",
    "contentTitleEn": "Structure Chart Level 0 - 1 Details",
    "description": "เป็นการอธิบายว่าใน Sructure Chart จะดูว่าเห็นภาพรวมของระบบทั้งหมด ใน data flow level 0 - 1 สำหรับระบบจองห้องประชุม และห้องเรียนภายในมหาวิทยาลัย",
    "descriptionEn": "The Structure Chart provides an overview of the entire system structure corresponding to Data Flow Level 0-1 for the university meeting room and classroom booking system."
  },
  {
    "id": "sec-4",
    "title": "Prototype (Figma)",
    "subtitle": "เป็นการออกแบบ Prototype (Figma)",
    "subtitleEn": "Prototype (Figma) design",
    "imageSrc": "/Screenshot 2568-12-05 at 13.26.49.png",
    "contentTitle": "รายละเอียด Prototype (Figma)",
    "contentTitleEn": "Prototype (Figma) Details",
    "description": "เป็นการออกแบบ Prototype ของเว็บไซต์ก่อนนำไป implement จริงซึ่งจะเน้นความสบายตาอ่านง่าย มีระบบที่ไม่ซับซ้อนหรือ User-Friendly",
    "descriptionEn": "This is the Prototype design of the website before actual implementation, focusing on visual comfort, readability, and a simple, User-Friendly interface.",
    "figmaLink": "https://www.figma.com/design/6BnLg0uEN9Jymy5dwv2y0K/library-systems?node-id=0-1&t=F5siO5Dn1JfOSpaA-1"
  }
];

const softwareFigmaContent = [
  {
    "id": "sec-1",
    "title": "Home page",
    "subtitle": "เป็นการออกแบบ Home page",
    "subtitleEn": "Home page design",
    "imageSrc": "/figma/Screenshot 2568-12-06 at 19.47.15.png",
    "contentTitle": "รายละเอียด Homepage",
    "contentTitleEn": "Homepage Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Homepage จะเป็นการโชว์ห้องทั้งหมดที่มีอยู่ในระบบ และแถบแสดงผลด้านบนจะโชว์ว่าในการจัดการระบบจะมี เจ้าหน้าที่และผู้ดูแลมีฟิลเตอร์ในการกรองห้อง เช่น การเลือกตามเวลา",
    "descriptionEn": "This page designs the Homepage, displaying all available rooms in the system. The top bar indicates system management options for Staff and Admins, including filters for rooms, such as filtering by time."
  },
  {
    "id": "sec-2",
    "title": "Booking page",
    "subtitle": "เป็นการออกแบบ Booking page",
    "subtitleEn": "Booking page design",
    "imageSrc": "/figma/Screenshot 2568-12-06 at 19.52.36.png",
    "contentTitle": "รายละเอียด Booking page",
    "contentTitleEn": "Booking page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Booking page โดยเป็นหน้าสำหรับการเลือกโซนของห้องว่าจะเลือกใช้โซนไหนโดยแบ่งเป็นตามอาคารเช่น อาคาร ICT , อาคาร LIBRARY ก่อนที่จะทำการเลือกห้องในโซนนั้นต่อไป",
    "descriptionEn": "This page designs the Booking page. It serves as the interface for selecting a room zone, categorized by buildings such as the ICT Building or LIBRARY, before proceeding to select a specific room within that zone."
  },
  {
    "id": "sec-3",
    "title": "Zone page",
    "subtitle": "เป็นการออกแบบ Zone page",
    "subtitleEn": "Zone page design",
    "imageSrc": "/figma/Screenshot 2568-12-06 at 20.01.50.png",
    "contentTitle": "รายละเอียด Zone page",
    "contentTitleEn": "Zone page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Zone page ซึ่งพอมีการเลือกอาคารแล้วจะเข้ามาที่หน้านี้ทันทีเพื่อเลือกโซนในอาคารนั้น โดยจะมีการโชว์ห้องที่ยังว่างหรือที่กำลังใช้งานอยู่ด้วยโดยจะมีเวลาให้เลือกด้วยเช่นกัน",
    "descriptionEn": "This page designs the Zone page. Once a building is selected, users land here to choose a specific zone. It displays available or occupied rooms and includes time selection options."
  },
  {
    "id": "sec-4",
    "title": "Review page",
    "subtitle": "เป็นการออกแบบ Review page",
    "subtitleEn": "Review page design",
    "imageSrc": "/figma/Screenshot 2568-12-06 at 20.09.38.png",
    "contentTitle": "รายละเอียด Review page",
    "contentTitleEn": "Review page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Review page สำหรับการใช้งานเสร็จแล้วระบบจะมีการให้ผู้ใช้รีวิวในการใช้ห้องเพื่อคำแนะนำในครั้งต่อไป โดยมีรายละเอียดทั้งชื่อผู้ใช้ ดาวการให้คะแนน และความคิดเห็นเพิ่มเติม และวันที่รีวิว",
    "descriptionEn": "This page designs the Review page. After using a room, the system allows users to leave a review for future reference. Details include username, star rating, additional comments, and the date of the review."
  },
  {
    "id": "sec-5",
    "title": "Staff dashboard page",
    "subtitle": "เป็นการออกแบบ Staff dashboard page",
    "subtitleEn": "Staff dashboard page design",
    "imageSrc": "/figma/Screenshot 2568-12-06 at 20.14.26.png",
    "contentTitle": "รายละเอียด Staff dashboard page",
    "contentTitleEn": "Staff dashboard page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Staff dashboard page สำหรับจัดการระบบจองห้องที่ฝั่ง ผู้ใช้งานทั่วไปได้ส่งคำขอมา จะแสดงคำขอทั้งหมดของผู้ใช้ในหน้านี้ และแสดงประวัติการจองห้องของระบบด้วย",
    "descriptionEn": "This page designs the Staff dashboard page for managing room booking requests sent by general users. It displays all user requests and the system's booking history."
  },
  {
    "id": "sec-6",
    "title": "Admin dashboard page",
    "subtitle": "เป็นการออกแบบ Admin dashboard page",
    "subtitleEn": "Admin dashboard page design",
    "imageSrc": "/figma/Screenshot 2568-12-06 at 20.21.40.png",
    "contentTitle": "รายละเอียด Admin dashboard page",
    "contentTitleEn": "Admin dashboard page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Admin dashboard page สำหรับการจัดการระบบทั้งหมดในบทบาทผู้ดูแลระบบ จะสามารถจัดการผู้ใช้ในระบบเป็นส่วนใหญ่เช่น การแก้ไขข้อมูลผู้ใช้ การเพิ่มผู้ใช้ การลบผู้ใช้",
    "descriptionEn": "This page designs the Admin dashboard page for overall system management by administrators. It allows managing system users, including editing user information, adding users, and deleting users."
  }
];

const linegirlFigmaContent = [
  {
    "id": "sec-1",
    "title": "Home page",
    "subtitle": "เป็นการออกแบบ Home page",
    "subtitleEn": "Home page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 13.45.58.png",
    "contentTitle": "รายละเอียด Homepage",
    "contentTitleEn": "Homepage Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Homepage จะเป็นการโชว์หน้าหลักของเว็บ linegirl โดนด้านบนจะเป็นแถบ navigation bar โดยผู้ใช้จะต้องทำการเข้าสู่ระบบก่อนเท่านั้นจึงจะสามารถเห็นหน้านี้ได้โดยจะโชว์ชื่อผู้ใช้พร้อมคำบอกเวลาและสามารถกดลงชื่อออกได้ถัดมาจะโชว์ร้านอาหารที่มีภายในระบบและจะมีการกรองประเภทของร้านอาหารได้ด้วย",
    "descriptionEn": "This page shows the homepage design, displaying the main page of the linegirl website. The top will feature a navigation bar. Users must log in to see this page; it will display the username along with the time and allow users to log out. Below that, the list of restaurants available in the system will be shown, with the ability to filter by restaurant type."
  },
  {
    "id": "sec-2",
    "title": "Select login page",
    "subtitle": "เป็นการออกแบบ Select login page",
    "subtitleEn": "Select login page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 13.51.06.png",
    "contentTitle": "รายละเอียด Select login page",
    "contentTitleEn": "Select login page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Select login page โดยเป็นหน้าสำหรับการเลือกการล็อคอินเข้าสู้ระบบว่าต้องการแบบไหนดดยมีทั้งหมด 3 แบบคือ ผู้ใช้ทั่วไป ร้านค้า และผู้ดูแลระบบและถ้าหากยังไม่มีบัญชีในระบบจะมีหน้าสำหรับการสร้างบัญชีด้วยเช่นกัน",
    "descriptionEn": "This page shows the design of the Select Login page, where users can choose their preferred login method from three options: General User, Shop, and Administrator. If an account is not yet available, there will also be a page for creating one."
  },
  {
    "id": "sec-3",
    "title": "Create restaurant page",
    "subtitle": "เป็นการออกแบบ Create restaurant page",
    "subtitleEn": "Create restaurant page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16.png",
    "contentTitle": "รายละเอียด Create restaurant page",
    "contentTitleEn": "Create restaurant page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Create restaurant page ซึ่งพอมีการเลือกสร้างบัญชีสำหรับร้านอาหารครั้งแรกและเข้าสู่ระบบใหม่ ระบบจะพามาที่หน้านี้เพื่อสร้างข้อมูลของร้านอาหารโดยมีการกรอกรายละเอียดสำหรับร้านเช่น ขื่อ สาขา รูปภาพ เบอร์ อีเมลและเก็บลงฐานข้อมูล",
    "descriptionEn": "This page shows the design of the Create restaurant page. When a customer creates a restaurant account for the first time and logs in, the system will take them to this page to create restaurant information. This involves filling in details such as name, branch, photos, phone number, and email, and storing the information in the database."
  },
  {
    "id": "sec-4",
    "title": "Dashboard page",
    "subtitle": "เป็นการออกแบบ Dashboard page",
    "subtitleEn": "Dashboard page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 14.04.59.png",
    "contentTitle": "รายละเอียด Dashboard page",
    "contentTitleEn": "Dashboard page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Dashboard page สำหรับการใช้งานจัดการระบบของร้านค้าที่จะโชว์ทั้งยอดขายของวันนี้หรือคุณภาพของสัปดาห์นี้และยังมีโหมดการจัดการออเดอร์รวมและการจัดการเมนูภายในร้านสามารถตั้งเวลาเปิดและปิดของร้านได้ด้วย",
    "descriptionEn": "This page showcases the dashboard design for managing your store, displaying today's sales and this week's quality. It also includes modes for managing aggregated orders and menu items, and allows you to set store opening and closing times."
  },
  {
    "id": "sec-5",
    "title": "Product overview page",
    "subtitle": "เป็นการออกแบบ Product overview page",
    "subtitleEn": "Product overview page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 14.08.58.png",
    "contentTitle": "รายละเอียด Product overview page",
    "contentTitleEn": "Product overview page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Product overview page สำหรับจัดการสินค้าภายในร้านโดยจะโชว์สินค้าที่มีทั้งหมดภายในร้านสามารถทำการแก้ไขสินค้า เพิ่มสินค้า หรือลบสินค้าได้",
    "descriptionEn": "This page is a product overview page designed for managing products in the store. It will display all the products available in the store and allow you to edit, add, or delete products."
  },
  {
    "id": "sec-6",
    "title": "Restaurant page",
    "subtitle": "เป็นการออกแบบ Restaurant page",
    "subtitleEn": "Restaurant page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 14.13.16.png",
    "contentTitle": "รายละเอียด Restaurant page",
    "contentTitleEn": "Restaurant page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Restaurant page เป็หน้าที่โชว์สำหรับผู้ใช้ทั่วไป เมื่อกดร้านค้าจากหน้าหลักมาจะมาเจอหน้าร้านค้า โดยจะแสดงรายละเอียดของร้านค้าเบื้องต้นเช่น สินค้า ชื่อร้านและสาขา เวลาทำการของร้านโดยผู้ใช้ทั่วไปสามารถกดสั่งซื้อสินค้าได้จากหน้านี้่เลย",
    "descriptionEn": "This page is designed for the Restaurant page, which is displayed for general users. When users click on the store link from the main page, they will be taken to the store's page, which will show basic details such as products, store name and branch locations, and opening hours. General users can then place orders directly from this page."
  },
  {
    "id": "sec-7",
    "title": "Order page",
    "subtitle": "เป็นการออกแบบ Order page",
    "subtitleEn": "Order page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 14.17.21.png",
    "contentTitle": "รายละเอียด Order page",
    "contentTitleEn": "Order page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Order page เป็หน้าที่โชว์สำหรับผู้ใช้ทั่วไป เมื่อมีการสั่งอาหารจากหน้าร้านค้าแล้วจะมีออเดอร์เพิ่มเข้ามาในหน้านี้ดดนสามารถตรวจสอบการสั่งซื้อของเราได้ว่ามีอะไรบ้าง โดยสามารถเลือกการชำระเงินได้ทั้งแบบเงินสด และ พร้อมเพย์จากนั้นจึงกดสั่งซื้อ",
    "descriptionEn": "This page is designed as an Order page, which is displayed to general users. Once an order is placed from the restaurant, it will be added to this page, allowing users to check their order details. Payment options include cash and PromptPay, after which the user can proceed to checkout."
  },
  {
    "id": "sec-8",
    "title": "Review page",
    "subtitle": "เป็นการออกแบบ Review page",
    "subtitleEn": "Review page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 14.21.22.png",
    "contentTitle": "รายละเอียด Review page",
    "contentTitleEn": "Review page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Review page เป็นหน้าที่โชว์สำหรับผู้ใช้ทั่วไป เมื่อทำการสั่งซื้อเสร็จเรียบร้อยแล้วจะพามาที่หน้าสำหรับรีวิวสินค้าที่ได้สั่งไปมีรายละเอียดคือ สามารถกรอกดาวเพื่อให้คะแนนได้และแสดงความคิดเห็นได้ด้วย",
    "descriptionEn": "This page is designed as a review page, displayed to general users after a complete purchase. It allows users to review the ordered product by giving it a star rating and leaving comments."
  },
  {
    "id": "sec-9",
    "title": "Overview admin page",
    "subtitle": "เป็นการออกแบบ Overview admin page",
    "subtitleEn": "Overview admin page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 14.24.40.png",
    "contentTitle": "รายละเอียด Overview admin page",
    "contentTitleEn": "Overview admin page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Overview admin page เป็นหน้าที่โชว์สำหรับผู้ดูแลระบบ เมื่อเข้าสู่ระบบเข้ามาในหน้านี้จะขึ้นทันทีเป็นหน้าสำหรับการจัดการผู้ใช้ของระบบทั้งหมดโดยสามารถทำการ เพิ่มผู้ใช้ ลบผู้ใช้ และแก้ไขผู้ใช้ได้ อีกทั้งยังมีสิทธิในการเพิ่มแก้ไข banner ของเว็บได้ด้วย",
    "descriptionEn": "This page provides an overview of the admin page design. This page is for system administrators and, upon logging in, immediately displays the page for managing all system users. Users can add, remove, and edit users, and also have the authority to add and edit website banners."
  },
  {
    "id": "sec-10",
    "title": "Add user page",
    "subtitle": "เป็นการออกแบบ Add user page",
    "subtitleEn": "Add user page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 14.30.09.png",
    "contentTitle": "รายละเอียด Add user page",
    "contentTitleEn": "Add user page Details",
    "description": "ในหน้านี้จะเป็นการออกแบบ Add user page เป็นหน้าที่โชว์สำหรับผู้ดูแลระบบ สำหรับทำการเพิ่มข้อมูลผู้ใช้ของระบบด้วยตัวเองโดยจะมีรายละเอียดให้กรอกเพื่อสร้างผู้ใช้รายใหม่",
    "descriptionEn": "This page is designed as an Add user page, displayed for system administrators to manually add user information. It will provide details for creating a new user."
  },
  {
    "id": "sec-11",
    "title": "Update user page",
    "subtitle": "เป็นการออกแบบ Update user page",
    "subtitleEn": "Update user page design",
    "imageSrc": "/figma-linegirl/Screenshot 2568-12-16 at 14.31.50.png",
    "contentTitle": "รายละเอียด Update user page",
    "contentTitleEn": "Update user page",
    "description": "ในหน้านี้จะเป็นการออกแบบ Update user page เป็นหน้าที่โชว์สำหรับผู้ดูแลระบบ สำหรับการแก้ไขข้อมูลผู้ใช้เมื่อมามีการสร้างผู้ใช้นั้นไปแล้วสามารถมาแก้ไขได้ทั้ง role ของผู้ใช้สามารถเปลี่ยนรหัสผ่านได้อีกด้วย",
    "descriptionEn": "This page is for updating the user page, and it's the page displayed for administrators to modify user information. Once a user has been created, they can edit their role and change their password."
  }
];

async function run() {
  await prisma.project.update({
    where: { id: '42e0bc75-40ff-45a2-bd4c-edc60563f6b7' },
    data: { content: JSON.stringify(softwareContent) }
  });

  await prisma.project.update({
    where: { id: '8f150fc9-f3bb-47dc-8ec8-57451d79cd16' },
    data: { content: JSON.stringify(softwareFigmaContent) }
  });

  await prisma.project.update({
    where: { id: '4914372b-fb5f-4088-9cfb-c540cbe5d3cd' },
    data: { content: JSON.stringify(linegirlFigmaContent) }
  });

  console.log("Migration successful!");
}

run().catch(console.error).finally(() => process.exit(0));
