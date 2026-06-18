'use client'

import { useState, useEffect } from 'react'
import { FaMobileAlt, FaDesktop, FaTabletAlt, FaGlobe, FaClock, FaApple, FaWindows, FaAndroid } from 'react-icons/fa'
import { useLanguage } from '@/app/context/LanguageContext'

export default function AnalyticsAdmin() {
  const [visitors, setVisitors] = useState([])
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    fetchVisitors()
  }, [])

  const fetchVisitors = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/visitors`)
      const data = await res.json()
      setVisitors(data)
    } catch (error) {
      console.error('Error fetching visitors:', error)
    } finally {
      setLoading(false)
    }
  }

  const getDeviceIcon = (deviceStr) => {
    const d = (deviceStr || '').toLowerCase()
    if (d.includes('mobile') || d.includes('phone') || d.includes('iphone')) return <FaMobileAlt className="text-blue-500" />
    if (d.includes('tablet') || d.includes('ipad')) return <FaTabletAlt className="text-purple-500" />
    return <FaDesktop className="text-gray-500" />
  }

  const getOsIcon = (osStr) => {
    const o = (osStr || '').toLowerCase()
    if (o.includes('ios') || o.includes('mac')) return <FaApple className="text-gray-800 dark:text-gray-200" />
    if (o.includes('windows')) return <FaWindows className="text-blue-600" />
    if (o.includes('android')) return <FaAndroid className="text-green-500" />
    return <FaGlobe className="text-gray-400" />
  }

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {language === 'th' ? 'สถิติผู้เข้าชม' : 'Visitor Analytics'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {language === 'th' ? 'ดูข้อมูลผู้เข้าชมเว็บไซต์ล่าสุด รุ่นมือถือ และเบราว์เซอร์' : 'View latest website visitors, device models, and browsers'}
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 px-6 py-3 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">เข้าชมทั้งหมด</p>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{visitors.length} ครั้ง</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900/80 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 overflow-hidden backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-300 text-sm border-b border-gray-100 dark:border-zinc-700">
                <th className="px-6 py-4 font-semibold">เวลาเข้าชม</th>
                <th className="px-6 py-4 font-semibold">อุปกรณ์ (Device)</th>
                <th className="px-6 py-4 font-semibold">ระบบปฏิบัติการ (OS)</th>
                <th className="px-6 py-4 font-semibold">เบราว์เซอร์</th>
                <th className="px-6 py-4 font-semibold">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800/50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                    กำลังโหลดข้อมูล...
                  </td>
                </tr>
              ) : visitors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                    ยังไม่มีข้อมูลผู้เข้าชม
                  </td>
                </tr>
              ) : (
                visitors.map((visitor) => (
                  <tr key={visitor.id} className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-400" />
                        {new Date(visitor.visitedAt).toLocaleString('th-TH')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white font-medium">
                      <div className="flex items-center gap-2">
                        {getDeviceIcon(visitor.device)}
                        {visitor.device || 'Unknown'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        {getOsIcon(visitor.os)}
                        {visitor.os || 'Unknown'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {visitor.browser || 'Unknown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-500 font-mono text-xs">
                      {visitor.ipAddress || 'N/A'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
