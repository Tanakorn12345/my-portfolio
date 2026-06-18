'use client'

import { useState, useEffect } from 'react'

export default function InternshipsAdmin() {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [editId, setEditId] = useState(null)
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
    imageUrl: ''
  })
  const [imageFile, setImageFile] = useState(null)

  const handleEdit = (internship) => {
    setEditId(internship.id)
    setFormData({
      company: internship.company || '',
      role: internship.role || '',
      startDate: internship.startDate || '',
      endDate: internship.endDate || '',
      description: internship.description || '',
      imageUrl: internship.imageUrl || ''
    })
    setImageFile(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cancelEdit = () => {
    setEditId(null)
    setFormData({
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',
      imageUrl: ''
    })
    setImageFile(null)
  }

  const fetchInternships = async () => {
    try {
      const res = await fetch(`/api/internships`)
      const data = await res.json()
      setInternships(data)
    } catch (error) {
      console.error('Error fetching internships:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInternships()
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

      const url = editId 
        ? `/api/internships/${editId}` 
        : `/api/internships`
      const method = editId ? 'PUT' : 'POST'

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          imageUrl: finalImageUrl
        })
      })
      
      cancelEdit()
      fetchInternships()
      alert(editId ? 'อัปเดตข้อมูลสำเร็จ!' : 'เพิ่มข้อมูลสำเร็จ!')
    } catch (error) {
      console.error('Error saving internship:', error)
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล')
    }
  }

  const handleDelete = async (id) => {
    if (confirm('คุณต้องการลบข้อมูลนี้ใช่หรือไม่?')) {
      try {
        await fetch(`/api/internships/${id}`, {
          method: 'DELETE'
        })
        fetchInternships()
      } catch (error) {
        console.error('Error deleting internship:', error)
      }
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">จัดการประวัติการฝึกงาน (Internships)</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">เพิ่ม ลบ หรือแก้ไขประวัติการทำงานของคุณ</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-zinc-900/80 p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 mb-10 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-2 h-8 rounded-full ${editId ? 'bg-yellow-400' : 'bg-blue-600'}`}></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{editId ? 'แก้ไขประวัติ' : 'เพิ่มประวัติใหม่'}</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ชื่อบริษัท *</label>
              <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ตำแหน่ง *</label>
              <input required type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">วันเริ่มงาน *</label>
              <input required type="text" placeholder="เช่น 20 พฤษภาคม 2569" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">วันสิ้นสุด *</label>
              <input required type="text" placeholder="เช่น 31 กรกฎาคม 2569" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">โลโก้ (อัปโหลด หรือใส่ URL)</label>
              <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="w-full mb-2 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              <input type="text" placeholder="หรือใส่ URL รูปภาพ" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
              {(imageFile || formData.imageUrl) && (
                 <div className="mt-2 text-sm text-green-600">✓ มีโลโก้เตรียมบันทึกแล้ว</div>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ความรับผิดชอบ (ย่อ) *</label>
              <textarea required rows="6" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
            </div>

          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800/50">
            <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              {editId ? 'อัปเดตข้อมูล' : 'บันทึกข้อมูล'}
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
          <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center text-sm">👔</span>
          รายการประวัติการฝึกงาน
        </h2>
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {internships.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 dark:bg-zinc-800/30 rounded-xl border-2 border-dashed border-gray-200 dark:border-zinc-700">
                <p className="text-gray-500 dark:text-gray-400">ยังไม่มีประวัติการฝึกงาน</p>
              </div>
            ) : internships.map(internship => (
              <div key={internship.id} className="group p-5 bg-white dark:bg-zinc-800/40 border border-gray-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-800/50 rounded-xl transition-all shadow-sm hover:shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start gap-4">
                  {internship.imageUrl ? (
                    <img src={internship.imageUrl} alt={internship.company} className="w-16 h-16 rounded-lg object-contain bg-white dark:bg-zinc-800 p-1" />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-400 text-xs">No img</div>
                  )}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{internship.role} @ {internship.company}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{internship.startDate} - {internship.endDate}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <button onClick={() => handleEdit(internship)} className="w-full sm:w-auto px-4 py-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/40 dark:text-yellow-500 rounded-lg font-medium transition-colors">แก้ไข</button>
                  <button onClick={() => handleDelete(internship.id)} className="w-full sm:w-auto px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 rounded-lg font-medium transition-colors">ลบ</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
