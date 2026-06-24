'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaGlobe, FaArrowLeft, FaEdit, FaSave, FaTimes, FaFigma } from 'react-icons/fa'
import { useLanguage } from '@/app/context/LanguageContext'
import { createClient } from '@/utils/supabase/client'
import DetailLayout from '@/app/components/DetailLayout'

export default function ProjectDetail() {
  const { id } = useParams()
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    projectUrl: '',
    githubUrl: '',
    tags: ''
  })
  const [imageFile, setImageFile] = useState(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const fetchProject = async () => {
    try {
      const res = await fetch(`/api/projects/${id}`)
      if (!res.ok) {
        router.push('/')
        return
      }
      const data = await res.json()
      setProject(data)
      setFormData({
        title: data.title || '',
        description: data.description || '',
        imageUrl: data.imageUrl || '',
        projectUrl: data.projectUrl || '',
        githubUrl: data.githubUrl || '',
        tags: data.tags ? data.tags.join(', ') : ''
      })
    } catch (error) {
      console.error('Error fetching project:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) fetchProject()

    const checkAdmin = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user && user.email === 'hoing11111@gmail.com') {
        setIsAdmin(true)
      }
    }
    checkAdmin()
  }, [id, router])

  const handleSave = async () => {
    setIsSaving(true)
    try {
      let finalImageUrl = formData.imageUrl;
      if (imageFile) {
        const uploadData = new FormData();
        uploadData.append('image', imageFile);
        const uploadRes = await fetch(`/api/upload`, {
          method: 'POST',
          body: uploadData
        });
        const uploadResult = await uploadRes.json();
        if (uploadResult.imageUrl) {
          finalImageUrl = uploadResult.imageUrl;
        }
      }

      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)

      const res = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          imageUrl: finalImageUrl,
          tags: tagsArray
        })
      })

      if (res.ok) {
        setIsEditing(false)
        setImageFile(null)
        await fetchProject()
        alert(language === 'th' ? 'บันทึกข้อมูลเรียบร้อย!' : 'Saved successfully!')
      }
    } catch (error) {
      console.error('Error saving:', error)
      alert('เกิดข้อผิดพลาดในการบันทึก')
    } finally {
      setIsSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-zinc-950">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    )
  }

  if (!project) return null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaArrowLeft />
            {language === 'th' ? 'กลับ' : 'Back'}
          </button>

          {!isEditing ? (
            isAdmin && (
              <button 
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 hover:bg-yellow-200 rounded-lg transition-colors font-medium shadow-sm"
              >
                <FaEdit />
                {language === 'th' ? 'แก้ไข' : 'Edit'}
              </button>
            )
          ) : (
            <div className="flex gap-2">
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors font-medium disabled:opacity-50"
              >
                <FaSave />
                {isSaving ? (language === 'th' ? 'กำลังบันทึก...' : 'Saving...') : (language === 'th' ? 'บันทึก' : 'Save')}
              </button>
              <button 
                onClick={() => {
                  setIsEditing(false)
                  setImageFile(null)
                  // Reset form data to original
                  setFormData({
                    title: project.title || '',
                    description: project.description || '',
                    imageUrl: project.imageUrl || '',
                    projectUrl: project.projectUrl || '',
                    githubUrl: project.githubUrl || '',
                    tags: project.tags ? project.tags.join(', ') : ''
                  })
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700 rounded-lg transition-colors font-medium"
              >
                <FaTimes />
                {language === 'th' ? 'ยกเลิก' : 'Cancel'}
              </button>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden">
          {/* IMAGE SECTION */}
          {isEditing ? (
            <div className="p-8 border-b dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">รูปภาพหน้าปก (อัปโหลด หรือ URL)</label>
              <div className="space-y-3">
                <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                <input type="text" placeholder="หรือใส่ URL รูปภาพ" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 dark:text-white" />
              </div>
            </div>
          ) : (
            project.imageUrl && (
              <div className="relative w-full h-64 md:h-96">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            )
          )}
          
          <div className="p-8 md:p-12">
            {/* TITLE */}
            {isEditing ? (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ชื่อโปรเจ็กต์</label>
                <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full text-2xl font-bold px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 dark:text-white" />
              </div>
            ) : (
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
            )}
            
            {/* TAGS */}
            {isEditing ? (
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">เครื่องมือ (Tags) - คั่นด้วยลูกน้ำ</label>
                <input type="text" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 dark:text-white" />
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags && project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* DESCRIPTION */}
            {isEditing ? (
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">รายละเอียด (Description)</label>
                <textarea rows="10" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full text-lg px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 dark:text-white leading-relaxed" />
              </div>
            ) : (
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light whitespace-pre-wrap">
                {project.description}
              </p>
            )}

            {/* LINKS */}
            {isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ลิงก์เว็บไซต์</label>
                  <input type="text" value={formData.projectUrl} onChange={e => setFormData({...formData, projectUrl: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ลิงก์ GitHub</label>
                  <input type="text" value={formData.githubUrl} onChange={e => setFormData({...formData, githubUrl: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 dark:text-white" />
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-100 dark:border-zinc-800 pb-12">
                {project.projectUrl && (
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
                  >
                    <FaGlobe className="text-xl group-hover:rotate-12 transition-transform" />
                    <span className="font-bold">{language === 'th' ? 'เยี่ยมชมเว็บไซต์' : 'Visit Website'}</span>
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="group flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:bg-black dark:hover:bg-gray-100 transition-all shadow-xl shadow-gray-900/20 dark:shadow-white/20 hover:shadow-gray-900/40 hover:-translate-y-1"
                  >
                    <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="font-bold">GitHub Repository</span>
                  </Link>
                )}
              </div>
            )}

            {/* SECTIONS FROM PROJECT.CONTENT */}
            {!isEditing && project.content && (() => {
              try {
                const projectData = JSON.parse(project.content);
                if (projectData && projectData.length > 0) {
                  return (
                    <div className="mt-8 space-y-24 md:space-y-32">
                      {projectData.map((section, index) => (
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
                      ))}
                    </div>
                  );
                }
              } catch (e) {
                console.error("Error parsing project.content", e);
              }
              return null;
            })()}

          </div>
        </div>
      </div>
    </div>
  )
}
