const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding data...');

  // --- Seed Projects ---
  const projects = [
    {
      title: "LINE GIRL",
      imageUrl: "/ภาพถ่ายหน้าจอ 2568-11-09 เวลา 20.17.49.png",
      description: "โปรเจกต์นี้จะเกี่ยวข้องกับงานภายในคลาสเรียนของผมครับ คือ การออกแบบเว็บแอปพลิเคชัน ซึ่งมีต้นแบบเป็นธุรกิจ Line Man แต่เป็นการสั่งอาหารและรับที่สาขาเท่านั้น ซึ่งผมรับผิดชอบในส่วน front-end โดยการออกแบบให้สอดคล้องกับ UX/UI ของเว็บไซต์ในต้นแบบ และเชื่อมต่อกับ back-end เพื่อให้เว็บไซต์สามารถใช้งานได้จริง สิ่งที่พิเศษของโปรเจกต์นี้คือการจัดการระบบที่ง่ายและการจัดการผู้ใช้งานอย่างเป็นระบบ มีการแยกบทบาทในแอพที่ชัดเจน รวมถึงการใช้โมเดล Agile ในการทำงานของทีมพัฒนา ดูรายละเอียดเพิ่มเติมได้ที่ลิงก์ GitHub",
      githubUrl: "https://github.com/Tanakorn12345/testweb",
      projectUrl: "",
      tags: ["github", "success"],
      order: 1
    },
    {
      title: "Software engineering (Booking room)",
      imageUrl: "/Screenshot 2568-12-06 at 20.23.54.png",
      description: "โปรเจ็กต์นี้เกี่ยวกับงานภายในคลาสของผมครับ คือ การทำระบบการจัดการจองห้องประชุมและห้องเรียนภายในมหาวิทยาลัย เพื่อแก้ปัญหาการจองห้องที่ซับซ้อนและลดความผิดพลาดในการจัดการตารางเวลา โดยมีการใช้ Use Case Diagram และ Data Flow Diagram (DFD Level 0-2) เพื่อจำลองการไหลของข้อมูลและการทำงานของระบบ มีการจัดทำ Structure Chart เพื่อวางโครงสร้างโมดูลการทำงาน เช่น การจอง และยังมีการออกแบบระบบให้รองรับการทำงานผ่าน Web Application และมีการเชื่อมต่อฐานข้อมูล (เช่น Google Firebase)",
      projectUrl: "/Software",
      githubUrl: "",
      tags: ["website", "success"],
      order: 2
    },
    {
      title: "Figma design in Software engineering",
      imageUrl: "/Screenshot 2568-12-05 at 11.46.12.png",
      description: "โปรเจ็กต์นี้เกี่ยวกับงานภายในคลาสของผมครับ คือ การทำระบบการจัดการจองห้องประชุมและห้องเรียนภายในมหาวิทยาลัย ในส่วนของการออกแบบ Prototype ก่อนนำไป implememt จริง โดยมีการออกแบบให้ใช้ง่าย มีระบบที่ไม่ซับซ้อน สามารถจัดการได้ง่าย",
      projectUrl: "/Software/Figma",
      githubUrl: "",
      tags: ["website", "success"],
      order: 3
    },
    {
      title: "Figma design in Line girl",
      imageUrl: "/figma-linegirl/Screenshot 2568-12-16 at 13.45.58.png",
      description: "โปรเจ็กต์นี้เกี่ยวกับงานภายในคลาสของผมครับ คือ การออกแบบเว็บแอปพลิเคชัน ซึ่งมีต้นแบบเป็นธุรกิจ Line Man โดยในส่วนนี้คือการออกแบบ UX/UI ของเว็บก่อนนำไป implement ดีไซน์ที่ดูสบายตา ใช้งานง่าย ไม่ซับซ้อน พร้อมระบบจัดการหลังบ้านที่ชัดเจน เพื่อให้มั่นใจในประสิทธิภาพของ Flow การทำงานก่อนเริ่มเขียนโค้ดจริง",
      projectUrl: "/linegirl/figma",
      githubUrl: "",
      tags: ["website", "success"],
      order: 4
    },
    {
      title: "Mobile application 'PetPoint'",
      imageUrl: "/figma-linegirl/Screenshot 2568-12-16 at 13.45.58.png",
      description: "โปรเจ็กต์นี้เกี่ยวกับงานภายในคลาสของผมครับ คือ การออกแบบเว็บแอปพลิเคชัน ซึ่งมีต้นแบบเป็นธุรกิจ Line Man โดยในส่วนนี้คือการออกแบบ UX/UI ของเว็บก่อนนำไป implement ดีไซน์ที่ดูสบายตา ใช้งานง่าย ไม่ซับซ้อน พร้อมระบบจัดการหลังบ้านที่ชัดเจน เพื่อให้มั่นใจในประสิทธิภาพของ Flow การทำงานก่อนเริ่มเขียนโค้ดจริง",
      projectUrl: "",
      githubUrl: "",
      tags: ["website", "in-progress"],
      order: 5
    }
  ];

  for (const p of projects) {
    await prisma.project.create({ data: p });
  }
  console.log('Seeded projects');

  // --- Seed Internships ---
  const internships = [
    {
      role: "IT Support Intern", 
      company: "บริษัท เอ็กซ์ซี จำกัด",
      startDate: "20 พฤษภาคม 2569",
      endDate: "31 กรกฎาคม 2569",
      description: "พัฒนาระบบและแอปพลิเคชันภายในของกระทรวงฯ เพื่อเพิ่มประสิทธิภาพในการดำเนินงาน\nทำงานร่วมกับทีมผู้เชี่ยวชาญด้าน IT ในการจัดการระบบฐานข้อมูลและการรักษาความปลอดภัยของข้อมูล (Cybersecurity)\nเรียนรู้และประยุกต์ใช้เทคโนโลยีสมัยใหม่ในการแก้ปัญหาจริงระดับองค์กร",
      order: 1
    }
  ];

  for (const i of internships) {
    await prisma.internship.create({ data: i });
  }
  console.log('Seeded internships');

  // --- Seed Profile (partial data based on page.jsx) ---
  const profileCount = await prisma.profile.count();
  if (profileCount === 0) {
    await prisma.profile.create({
      data: {
        name: "นายธนกร ทิพย์วารีรัตนะ",
        title: "Front-end Developer",
        bio: "โดยผมมีความสนใจทางด้านการพัฒนาด้านเว็บแอพพลิเคชั่นทางด้าน Front-end เพราะผมมีทักษะทางด้านการดีไซน์และการใช้ framework ทางด้าน front-end เป็นหลักและพร้อมเรียนรู้ framework ใหม่ๆในอนาคตครับ",
        email: "tanakorn.tip@student.mahidol.edu",
        github: "https://github.com/Tanakorn12345",
        linkedin: "https://www.linkedin.com/in/tanakorn-tipwarreerattana-1a6053364",
      }
    });
    console.log('Seeded profile');
  }

  console.log('Done!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
