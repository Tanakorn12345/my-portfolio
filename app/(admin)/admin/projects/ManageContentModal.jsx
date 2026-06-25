import { useState, useEffect } from 'react'
import { FaTrash, FaPlus, FaSave, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function ManageContentModal({ project, onClose, onSave }) {
  const [sections, setSections] = useState([])
  const [expandedIndex, setExpandedIndex] = useState(0)

  useEffect(() => {
    if (project) {
      try {
        if (project.content) {
          const parsed = JSON.parse(project.content)
          if (Array.isArray(parsed)) {
            setSections(parsed)
          } else {
            // fallback if it was a single object
            setSections([parsed])
          }
        } else {
          setSections([])
        }
      } catch (e) {
        console.error('Error parsing content JSON', e)
        setSections([])
      }
    }
  }, [project])

  if (!project) return null

  const handleAddSection = () => {
    setSections([...sections, {
      id: `sec-${Date.now()}`,
      title: '',
      subtitle: '',
      subtitleEn: '',
      imageSrc: '',
      contentTitle: '',
      contentTitleEn: '',
      description: '',
      descriptionEn: '',
      figmaLink: ''
    }])
    setExpandedIndex(sections.length)
  }

  const handleRemoveSection = (indexToRemove) => {
    if (confirm('คุณต้องการลบเนื้อหาส่วนนี้ใช่หรือไม่?')) {
      setSections(sections.filter((_, idx) => idx !== indexToRemove))
    }
  }

  const handleChange = (index, field, value) => {
    const newSections = [...sections]
    newSections[index][field] = value
    setSections(newSections)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(project.id, JSON.stringify(sections))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-zinc-800">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">จัดการเนื้อหาข้างใน</h2>
            <p className="text-gray-500 text-sm mt-1">โปรเจ็กต์: {project.title}</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white bg-gray-50 hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-full transition-colors">
            <FaTimes />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 dark:bg-zinc-950/50">
          {sections.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              ไม่มีเนื้อหาข้างใน กรุณากดปุ่มเพิ่มเนื้อหา
            </div>
          ) : (
            <div className="space-y-4">
              {sections.map((sec, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
                  <div 
                    className="flex justify-between items-center p-4 bg-gray-50 dark:bg-zinc-800/50 cursor-pointer"
                    onClick={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      ส่วนที่ {idx + 1}: {sec.title || '(ไม่มีชื่อ)'}
                    </h3>
                    <div className="flex items-center gap-3">
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleRemoveSection(idx); }}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <FaTrash />
                      </button>
                      {expandedIndex === idx ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                    </div>
                  </div>

                  {expandedIndex === idx && (
                    <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title (EN / Default)</label>
                        <input type="text" value={sec.title || ''} onChange={e => handleChange(idx, 'title', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title (TH)</label>
                        <input type="text" value={sec.titleTh || ''} onChange={e => handleChange(idx, 'titleTh', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL (รูประหว่างเนื้อหา)</label>
                        <input type="text" value={sec.imageSrc || ''} onChange={e => handleChange(idx, 'imageSrc', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subtitle (TH)</label>
                        <input type="text" value={sec.subtitle || ''} onChange={e => handleChange(idx, 'subtitle', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subtitle (EN)</label>
                        <input type="text" value={sec.subtitleEn || ''} onChange={e => handleChange(idx, 'subtitleEn', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Content Title (TH)</label>
                        <input type="text" value={sec.contentTitle || ''} onChange={e => handleChange(idx, 'contentTitle', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Content Title (EN)</label>
                        <input type="text" value={sec.contentTitleEn || ''} onChange={e => handleChange(idx, 'contentTitleEn', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description (TH)</label>
                        <textarea rows="3" value={sec.description || ''} onChange={e => handleChange(idx, 'description', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description (EN)</label>
                        <textarea rows="3" value={sec.descriptionEn || ''} onChange={e => handleChange(idx, 'descriptionEn', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Figma Link (ถ้ามี)</label>
                        <input type="text" value={sec.figmaLink || ''} onChange={e => handleChange(idx, 'figmaLink', e.target.value)} className="w-full p-2 border dark:border-zinc-700 rounded bg-transparent text-gray-900 dark:text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 text-center">
            <button 
              type="button" 
              onClick={handleAddSection}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors font-medium text-sm"
            >
              <FaPlus />
              เพิ่มเนื้อหาส่วนใหม่
            </button>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 dark:border-zinc-800 flex justify-end gap-3 bg-white dark:bg-zinc-900 rounded-b-2xl">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
            ยกเลิก
          </button>
          <button onClick={handleSubmit} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all active:scale-95">
            <FaSave />
            บันทึกการเปลี่ยนแปลง
          </button>
        </div>
      </div>
    </div>
  )
}
