"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub ,FaLaptopCode
} from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiMysql, SiVite } from "react-icons/si";

export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Front-end",
      icon: <FaReact className="text-sky-500 text-3xl" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 80, color: "bg-orange-500" },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85, color: "bg-blue-500" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: 65, color: "bg-yellow-400" },
      ],
    },
    {
      title: "Back-end",
      icon: <FaNodeJs className="text-green-600 text-3xl" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 50, color: "bg-green-500" },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 75, color: "bg-blue-600" },
      ],
    },
    {
      title: "Framework",
      icon: <SiNextdotjs className="text-gray-800 text-3xl" />,
      skills: [
        { name: "React.js", icon: <FaReact className="text-sky-500" />, level: 80, color: "bg-sky-500" },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" />, level: 80, color: "bg-gray-800" },
        { name: "Vite", icon: <SiVite className="text-purple-500" />, level: 70, color: "bg-purple-500" },
      ],
    },
    {
      title: "Version Control",
      icon: <FaGitAlt className="text-orange-500 text-3xl" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 70, color: "bg-orange-500" },
        { name: "GitHub", icon: <FaGithub className="text-gray-800" />, level: 70, color: "bg-gray-800" },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-white px-10 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 border-b-4 border-blue-500 inline-flex pb-2 gap-3">
        <FaLaptopCode className="text-blue-500" /> 
        SKILLS
        </h2>

        <div className="space-y-12">
          {skillGroups.map((group, i) => (
            <div key={i}>
              {/* หัวข้อพร้อม icon */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                {group.icon} {group.title}
              </h3>

              <div className="space-y-6">
                {group.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                        <span className="text-2xl">{skill.icon}</span> {skill.name}
                      </div>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-4 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
