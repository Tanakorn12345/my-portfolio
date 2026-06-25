'use client'

import { useState, useEffect } from 'react'

export default function ProfileAdmin() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    email: ''
  })

  const fetchProfile = async () => {
    try {
      const res = await fetch(`/api/profile`)
      const data = await res.json()
      if (data.id) {
        setProfile(data)
        setFormData({
          name: data.name || '',
          bio: data.bio || '',
          email: data.email || ''
        })
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = profile?.id 
        ? `/api/profile/${profile.id}` 
        : `/api/profile`
      const method = profile?.id ? 'PUT' : 'POST'

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      fetchProfile()
      alert('บันทึกข้อมูลส่วนตัวสำเร็จ!')
    } catch (error) {
      console.error('Error saving profile:', error)
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล')
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">จัดการข้อมูลส่วนตัว (Profile)</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">อัปเดตข้อมูลส่วนตัวและประวัติย่อของคุณ</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-zinc-900/80 p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 mb-10 backdrop-blur-xl">
        {loading ? <p className="text-gray-500">กำลังโหลดข้อมูล...</p> : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ชื่อ-นามสกุล *</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">อีเมล</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">ประวัติย่อ (Bio) *</label>
                <textarea required rows="4" value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-gray-50/50 dark:bg-zinc-800/50 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none" />
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800/50">
              <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                บันทึกข้อมูลส่วนตัว
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
