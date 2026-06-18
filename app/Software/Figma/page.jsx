"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "@/app/components/Navbar";
import DetailLayout from "@/app/components/DetailLayout";
import { FaFigma } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";

function Page() {
  const { language } = useLanguage();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/projects');
        const data = await res.json();
        const project = data.find(p => p.projectUrl === '/Software/Figma');
        if (project && project.content) {
          setProjectData(JSON.parse(project.content));
        }
      } catch (error) {
        console.error('Error fetching project content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />
      {projectData && projectData.length > 0 ? (
        projectData.map((section, index) => (
          <DetailLayout
            key={section.id || index}
            title={language === 'th' && section.titleTh ? section.titleTh : section.title}
            subtitle={language === 'th' ? section.subtitle : section.subtitleEn}
            imageSrc={section.imageSrc}
            imageAlt={section.title}
          >
            <h3 className="text-2xl font-semibold text-blue-500 border-b pb-2 dark:text-blue-400 dark:border-zinc-800">
              {language === 'th' ? section.contentTitle : section.contentTitleEn}
            </h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {language === 'th' ? section.description : section.descriptionEn}
            </p>
            {section.figmaLink && (
              <div className="flex">
                <a
                  href={section.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  <FaFigma className="text-xl" />
                  <span>View in Figma</span>
                </a>
              </div>
            )}
          </DetailLayout>
        ))
      ) : (
        <div className="flex items-center justify-center min-h-[50vh] text-gray-500 dark:text-gray-400">
          <p>ไม่มีเนื้อหาสำหรับโปรเจ็กต์นี้ (No content available)</p>
        </div>
      )}
    </div>
  );
}

export default Page;