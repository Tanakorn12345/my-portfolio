'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChartPie, FaUserCircle, FaProjectDiagram, FaBriefcase, FaSignOutAlt, FaBars, FaTimes, FaUsers } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export default function AdminClientLayout({ user, children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const NavLinks = () => {
    return (
      <>
        <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium group ${pathname === '/admin' ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20'}`}>
          <FaChartPie className={`text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 ${pathname === '/admin' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
          แดชบอร์ด (Dashboard)
        </Link>

        <Link href="/admin/analytics" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium group ${pathname === '/admin/analytics' ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20'}`}>
          <FaUsers className={`text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 ${pathname === '/admin/analytics' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
          สถิติผู้เข้าชม (Analytics)
        </Link>
        
        <Link href="/admin/profile" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium group ${pathname === '/admin/profile' ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20'}`}>
          <FaUserCircle className={`text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 ${pathname === '/admin/profile' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
          ข้อมูลส่วนตัว (Profile)
        </Link>
        
        <Link href="/admin/projects" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium group ${pathname === '/admin/projects' ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20'}`}>
          <FaProjectDiagram className={`text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 ${pathname === '/admin/projects' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
          ผลงาน (Projects)
        </Link>
        
        <Link href="/admin/internships" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium group ${pathname === '/admin/internships' ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20'}`}>
          <FaBriefcase className={`text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 ${pathname === '/admin/internships' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
          การฝึกงาน (Internships)
        </Link>
      </>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-zinc-950 font-sans">
      {/* Desktop Sidebar */}
      <aside className="w-72 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 hidden md:flex flex-col shadow-sm">
        <div className="p-8 border-b border-gray-100 dark:border-zinc-800/50">
          <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 tracking-tight">Admin<span className="text-gray-900 dark:text-white">Workspace</span></h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
              {user.email.charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{user.email}</p>
              <p className="text-xs text-green-500 font-medium">Administrator</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          <p className="px-4 text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Menu</p>
          <NavLinks />
        </nav>
        
        <div className="p-4 border-t border-gray-100 dark:border-zinc-800/50">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:text-gray-400 dark:hover:text-red-400 dark:hover:bg-red-900/20 rounded-xl transition-all font-medium group">
            <FaSignOutAlt className="text-lg text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
            กลับหน้าเว็บไซต์หลัก
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-zinc-900 shadow-xl z-50 transform transition-transform">
            <div className="absolute top-0 right-0 -mr-12 pt-4">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-black/20 text-white"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close sidebar</span>
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-8 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-6">
                <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 tracking-tight">Admin<span className="text-gray-900 dark:text-white">Workspace</span></h2>
              </div>
              <div className="mt-6 flex items-center gap-3 px-6 pb-6 border-b border-gray-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{user.email}</p>
                  <p className="text-xs text-green-500 font-medium">Administrator</p>
                </div>
              </div>
              <nav className="mt-6 px-4 space-y-1">
                <p className="px-4 text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Menu</p>
                <NavLinks />
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-100 dark:border-zinc-800 p-4">
              <Link href="/" className="flex-shrink-0 w-full group block">
                <div className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:text-gray-400 dark:hover:text-red-400 dark:hover:bg-red-900/20 rounded-xl transition-all font-medium">
                  <FaSignOutAlt className="text-lg text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                  กลับหน้าเว็บไซต์หลัก
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 p-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center">
            <button onClick={toggleMobileMenu} className="p-2 -ml-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg focus:outline-none transition-colors">
              <FaBars className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 ml-2">Admin</h2>
          </div>
          <Link href="/" className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
            <FaSignOutAlt />
          </Link>
        </header>

        <div className="flex-1 p-4 md:p-10 lg:p-12 pb-24 w-full max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
