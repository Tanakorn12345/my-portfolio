'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaArrowLeft, FaCalendarAlt, FaBuilding } from 'react-icons/fa'
import { useLanguage } from '@/app/context/LanguageContext'

export default function InternshipDetail() {
  const { id } = useParams()
  const router = useRouter()
  const [internship, setInternship] = useState(null)
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const fetchInternship = async () => {
      try {
        const res = await fetch('/api/internships/${id}`)
        if (!res.ok) {
          router.push('/')
          return
        }
        const data = await res.json()
        setInternship(data)
      } catch (error) {
        console.error('Error fetching internship:', error)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchInternship()
  }, [id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-zinc-950">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    )
  }

  if (!internship) return null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors"
        >
          <FaArrowLeft />
          {language === 'th' ? 'กลับ' : 'Back'}
        </button>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 pb-10 border-b border-gray-100 dark:border-zinc-800">
            {internship.imageUrl ? (
              <div className="w-24 h-24 relative rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                <Image src={internship.imageUrl} alt={internship.company} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <FaBuilding className="text-3xl text-gray-400" />
              </div>
            )}
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {internship.role}
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-3">
                {internship.company}
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <FaCalendarAlt />
                <span>{internship.startDate} - {internship.endDate}</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              {language === 'th' ? 'ความรับผิดชอบ' : 'Responsibilities'}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              {internship.description}
            </p>
          </div>


          
        </div>
      </div>
    </div>
  )
}
