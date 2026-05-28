import React from 'react';
import Image from 'next/image'; // เพิ่ม import Image

// เพิ่ม logoSrc เข้ามาใน props
const InternshipSection = ({ role, company, duration, responsibilities, techStack, logoSrc }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
        
        {/* ส่วนโลโก้และข้อความ (ใช้ Flex เพื่อให้อยู่บรรทัดเดียวกัน) */}
        <div className="flex items-center gap-5">
          {/* ตรวจสอบว่ามี logoSrc ส่งมาไหม ถ้ามีให้แสดงโลโก้ */}
          {logoSrc && (
            <div className="relative w-16 h-16 flex-shrink-0 bg-gray-50 dark:bg-gray-700 rounded-lg p-1">
              <Image 
                src={logoSrc} 
                alt={`${company} logo`} 
                fill 
                className="object-contain p-1"
              />
            </div>
          )}
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {role}
            </h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
              {company}
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 whitespace-nowrap">
          <span className="text-sm font-medium px-4 py-2 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full">
            {duration}
          </span>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Responsibilities & Achievements:
        </h4>
        <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
          {responsibilities.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      {techStack && techStack.length > 0 && (
        <div className="mt-6 pt-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipSection;