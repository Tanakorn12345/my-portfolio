import { FaChartLine, FaRocket, FaStar } from 'react-icons/fa'

export default function AdminDashboard() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">แดชบอร์ด (Dashboard)</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">ภาพรวมระบบและการจัดการ Portfolio</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 backdrop-blur-xl flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl">
            <FaRocket />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">สถานะระบบ</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">ออนไลน์</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 backdrop-blur-xl flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl">
            <FaStar />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">สิทธิ์การใช้งาน</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">แอดมินเต็มรูปแบบ</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900/80 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 backdrop-blur-xl flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-2xl">
            <FaChartLine />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">กิจกรรมล่าสุด</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">วันนี้</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900/80 p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white relative z-10">ยินดีต้อนรับสู่ระบบหลังบ้าน 👋</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed relative z-10">
          คุณสามารถจัดการข้อมูล Portfolio ของคุณได้อย่างง่ายดายจากเมนูด้านซ้ายมือ ไม่ว่าจะเป็น การอัปเดตข้อมูลส่วนตัว (Profile), การเพิ่มหรือแก้ไขผลงาน (Projects) และการบันทึกประวัติการฝึกงาน (Internships) ข้อมูลทั้งหมดจะถูกแสดงผลบนเว็บไซต์หลักของคุณแบบเรียลไทม์
        </p>
      </div>
    </div>
  )
}
