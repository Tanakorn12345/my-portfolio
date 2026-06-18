'use client'

import { useState, useEffect } from 'react'
import ManageContentModal from './ManageContentModal'

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [editId, setEditId] = useState(null)
  const [managingContent, setManagingContent] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    projectUrl: '',
    githubUrl: '',
    type: 'website',
    status: 'success',
    tags: ''
  })
  const [imageFile, setImageFile] = useState(null)

  const handleEdit = (project) => {
    setEditId(project.id)
    setFormData({
      title: project.title || '',
      description: project.description || '',
      imageUrl: project.imageUrl || '',
      projectUrl: project.projectUrl || '',
      githubUrl: project.githubUrl || '',
      type: project.tags?.[0] || 'website',
      status: project.tags?.[1] || 'success',
      tags: project.tags ? project.tags.slice(2).join(', ') : ''
    })
    setImageFile(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cancelEdit = () => {
    setEditId(null)
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      projectUrl: '',
      githubUrl: '',
      type: 'website',
      status: 'success',
      tags: ''
    })
    setImageFile(null)
  }

  const fetchProjects = async () => {
    try {
      const res = await fetch(`/api/projects`)
      const data = await res.json()
      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
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

      const customTagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      const tagsArray = [formData.type, formData.status, ...customTagsArray]
      
      const url = editId 
        ? `/api/projects/${editId}` 
        : `/api/projects`
      const method = editId ? 'PUT' : 'POST'

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          imageUrl: finalImageUrl,
          projectUrl: formData.projectUrl,
          githubUrl: formData.githubUrl,
          tags: tagsArray
        })
      })
      
      cancelEdit()
      fetchProjects()
      alert(editId ? 'อัปเดตโปรเจ็กต์สำเร็จ!' : 'เพิ่มโปรเจ็กต์สำเร็จ!')
    } catch (error) {
      console.error('Error saving project:', error)
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล')
    }
  }

  const handleSaveContent = async (projectId, newContentString) => {
    try {
      // First fetch the existing project to keep other fields intact
      const res = await fetch(`/api/projects/${projectId}`)
      const project = await res.json()
      
      await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...project,
          content: newContentString
        })
      })
      
      setManagingContent(null)
      fetchProjects()
      alert('อัปเดตเนื้อหาสำเร็จ!')
    } catch (error) {
      console.error('Error saving content:', error)
      alert('เกิดข้อผิดพลาดในการบันทึกเนื้อหา')
    }
  }

  const handleDelete = async (id) => {
    if (confirm('คุณต้องการลบโปรเจ็กต์นี้ใช่หรือไม่?')) {
      try {
        await fetch(`/api/projects/${id}`, {
          method: 'DELETE'
        })
        fetchProjects()
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">จัดการผลงาน (Projects)</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">เพิ่ม ลบ หรือแก้ไขผลงานของคุณที่จะแสดงในหน้าเว็บไซต์</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-zinc-900/80 p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 mb-10 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-2 h-8 rounded-full ${editId ? 'bg-yellow-400' : 'bg-blue-600'}`}></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{editId ? 'แก้ไขโปรเจ็กต์' : 'เพิ่มโปรเจ็กต์ใหม่'}</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ชื่อโปรเจ็กต์ *</label>
              <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-gray-50 dark:bg-neutral-700 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">รูปภาพ (อัปโหลด หรือใส่ URL)</label>
              <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="w-full mb-2 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              <input type="text" placeholder="หรือใส่ URL รูปภาพ" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-gray-50 dark:bg-neutral-700 dark:text-white" />
              {(imageFile || formData.imageUrl) && (
                 <div className="mt-2 text-sm text-green-600">✓ มีรูปภาพเตรียมบันทึกแล้ว</div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ลิงก์เว็บไซต์ (ถ้ามี)</label>
              <input type="text" value={formData.projectUrl} onChange={e => setFormData({...formData, projectUrl: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-gray-50 dark:bg-neutral-700 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ลิงก์ GitHub (ถ้ามี)</label>
              <input type="text" value={formData.githubUrl} onChange={e => setFormData({...formData, githubUrl: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-gray-50 dark:bg-neutral-700 dark:text-white" />
            </div>
            
            {/* --- NEW FIELDS FOR STATUS AND TYPE --- */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ประเภท (Type)</label>
              <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-gray-50 dark:bg-neutral-700 dark:text-white">
                <option value="website">Website (ไปเว็บไซต์ภายนอก)</option>
                <option value="github">GitHub (ไปที่ Git Repository)</option>
                <option value="internal">Internal (รายละเอียดในเว็บนี้)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">สถานะ (Status)</label>
              <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-gray-50 dark:bg-neutral-700 dark:text-white">
                <option value="success">✅ เสร็จสมบูรณ์ (Success)</option>
                <option value="in-progress">⏳ กำลังดำเนินการ (In Progress)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">รายละเอียด (Description) *</label>
              <textarea required rows="4" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-gray-50 dark:bg-neutral-700 dark:text-white" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">เครื่องมือที่ใช้ (Tags) - คั่นด้วยลูกน้ำ (,)</label>
              <input type="text" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} placeholder="React, Next.js, Tailwind" className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800/50">
            <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              {editId ? 'อัปเดตโปรเจ็กต์' : 'บันทึกโปรเจ็กต์'}
            </button>
            {editId && (
              <button type="button" onClick={cancelEdit} className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all">
                ยกเลิก
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white dark:bg-zinc-900/80 p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 backdrop-blur-xl">
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center text-sm">📋</span>
          รายการโปรเจ็กต์
        </h2>
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {projects.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 dark:bg-zinc-800/30 rounded-xl border-2 border-dashed border-gray-200 dark:border-zinc-700">
                <p className="text-gray-500 dark:text-gray-400">ยังไม่มีโปรเจ็กต์ เริ่มสร้างผลงานแรกของคุณเลย!</p>
              </div>
            ) : projects.map(project => (
              <div key={project.id} className="group p-5 bg-white dark:bg-zinc-800/40 border border-gray-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-800/50 rounded-xl transition-all shadow-sm hover:shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start gap-4">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="w-16 h-16 rounded-lg object-cover bg-gray-100 dark:bg-zinc-800" />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-400 text-xs">No img</div>
                  )}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-1">{project.description}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <button onClick={() => setManagingContent(project)} className="w-full sm:w-auto px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 dark:text-blue-400 rounded-lg font-medium transition-colors">เนื้อหาข้างใน</button>
                  <button onClick={() => handleEdit(project)} className="w-full sm:w-auto px-4 py-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/40 dark:text-yellow-500 rounded-lg font-medium transition-colors">แก้ไขปก</button>
                  <button onClick={() => handleDelete(project.id)} className="w-full sm:w-auto px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 rounded-lg font-medium transition-colors">ลบ</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ManageContentModal 
        project={managingContent} 
        onClose={() => setManagingContent(null)} 
        onSave={handleSaveContent} 
      />
    </div>
  )
}
