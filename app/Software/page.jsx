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
        const res = await fetch(`/api/projects`);
        const data = await res.json();
        // Find the project that matches this URL
        const project = data.find(p => p.projectUrl === '/Software');
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
      <div className="pt-24 pb-16 space-y-24 md:space-y-32">

      {projectData && projectData.length > 0 ? (
        projectData.map((section, index) => (
          <DetailLayout
            key={section.id || index}
            index={index}
            title={language === 'th' && section.titleTh ? section.titleTh : section.title}
            subtitle={language === 'th' ? section.subtitle : section.subtitleEn}
            imageSrc={section.imageSrc}
            imageAlt={section.title}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'th' ? section.contentTitle : section.contentTitleEn}
            </h3>
            
            <p className="mb-8 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {language === 'th' ? section.description : section.descriptionEn}
            </p>

            {section.figmaLink && (
              <div className="flex mt-8">
                <a
                  href={section.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-[#F24E1E] hover:bg-[#E03E0E] text-white rounded-2xl transition-all shadow-xl shadow-[#F24E1E]/30 hover:shadow-[#F24E1E]/50 hover:-translate-y-1"
                >
                  <FaFigma className="text-xl group-hover:scale-110 transition-transform" />
                  <span className="font-bold tracking-wide">View in Figma</span>
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
    </div>
  );
}

export default Page;