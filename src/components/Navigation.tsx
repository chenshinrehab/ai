'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import { usePathname } from 'next/navigation'

import { 
  FaFacebookF, 
  FaLine, 
  FaHouse,      
  FaChevronDown, 
  FaCaretRight 
} from "react-icons/fa6";

type SubItem = {
  name: string;
  path: string;
}

type NavItem = {
  name: string;
  path: string;
  subItems?: SubItem[];
}

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname?.startsWith(path)
  }

  const navItems: NavItem[] = [
    { 
        name: '關於智網', 
        path: '/about',
        subItems: [
            { name: '我的理念', path: '/about/concept' },
            { name: '成果展示', path: '/about/portfolio' },
        ]
    },
    { 
        name: '自架優點', 
        path: '/pro', 
        subItems: [
            { name: '新世代架構', path: '/pro/next' },
            { name: 'SEO 強化', path: '/pro/seo' },
            { name: '功能多樣', path: '/pro/function' }
        ]
    },
    { 
        name: '教學內容', 
        path: '/courses',
        subItems: [
            { name: '課程大綱', path: '/courses/syllabus' },
            { name: '服務內容', path: '/courses/services' },
        ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 transition-all duration-300 shadow-sm shadow-blue-900/5 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- Logo 與頂部區塊 --- */}
        <div className="flex items-center justify-between py-3 md:py-4 border-b border-slate-50 relative">
          
          {/* 左側標題區塊：限制最大寬度防止擠壓右側 */}
          <Link href="/" className="flex items-center gap-2 md:gap-4 group md:absolute md:left-1/2 md:-translate-x-1/2 z-10 max-w-[65%] md:max-w-none">
              <div className="relative w-9 h-9 md:w-16 md:h-16 overflow-hidden rounded-xl border border-slate-100 shadow-sm bg-white shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/logo.webp" 
                    alt="智網 Ai 引擎 Logo" 
                    fill 
                    priority
                    sizes="(max-width: 768px) 36px, 64px"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
              </div>
              <div className="flex flex-col items-start md:items-center justify-center overflow-hidden">
                <div className="text-[15px] md:text-2xl font-bold text-slate-900 tracking-tight leading-tight truncate w-full">
                  智網 Ai 引擎
                </div>
                <p className="text-[9px] md:text-[12px] text-teal-700 tracking-tight md:tracking-[0.2em] mt-0.5 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  加速排名登頂，精準獲客
                </p>
              </div>
          </Link>

          {/* 右側社群按鈕 */}
          <div className="flex items-center gap-1.5 md:gap-4 ml-auto z-20 shrink-0">
              <Link href="/" className="hidden md:flex w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-slate-400 items-center justify-center hover:bg-slate-50 transition-all border border-slate-100 shadow-sm">
                <FaHouse size={20} />
              </Link>

              <a href="https://www.facebook.com/profile.php?id=61588071577543/" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white text-[#1877F2] flex items-center justify-center hover:bg-blue-50 transition-all border border-blue-50 shadow-sm">
                <FaFacebookF size={14} className="md:hidden" />
                <FaFacebookF size={22} className="hidden md:block" />
              </a>

              <a href="https://line.me/R/ti/p/@yourid" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white text-[#06C755] flex items-center justify-center hover:bg-green-50 transition-all border border-green-50 shadow-sm">
                <FaLine size={18} className="md:hidden" />
                <FaLine size={28} className="hidden md:block" />
              </a>
          </div>
        </div>

        {/* --- 導覽選單 --- */}
        {/* 🟢 修正：no-scrollbar 樣式已移至 globals.css，這裡直接套用 */}
        <nav className="py-2 relative w-full overflow-x-auto no-scrollbar scroll-smooth">
            <ul className="flex justify-start md:justify-center items-center gap-1 md:gap-4 min-w-max md:min-w-0 px-1">
              {navItems.map((item) => (
                <li key={item.path} className="relative group">
                    <Link 
                      href={item.path} 
                      className={`
                        flex items-center justify-center px-3 md:px-5 py-2 text-[12px] md:text-[15px] rounded-full transition-all whitespace-nowrap tracking-wide font-medium
                        ${isActive(item.path) 
                          ? 'text-blue-600 bg-blue-50 font-bold' 
                          : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}
                      `}
                    >
                      {item.name}
                      {item.subItems && <FaChevronDown size={10} className="hidden md:block ml-1.5 opacity-40 group-hover:rotate-180 transition-transform duration-300" />}
                    </Link>

                    {item.subItems && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-blue-900/5 overflow-hidden z-[60] opacity-0 invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-300 transform md:group-hover:translate-y-0 translate-y-2">
                        <div className="py-2">
                            {item.subItems.map((sub) => (
                                <Link 
                                    key={sub.path} href={sub.path}
                                    className="block px-5 py-2.5 text-[14px] text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                >
                                    <FaCaretRight size={12} className="inline-block mr-2 text-blue-400 opacity-70" />
                                    {sub.name}
                                </Link>
                            ))}
                        </div>
                      </div>
                    )}
                </li>
              ))}
              
              <li className="pl-2">
                <Link 
                  href="/enroll" 
                  className="flex items-center justify-center py-1.5 px-4 md:py-2.5 md:px-8 bg-blue-600 text-white rounded-full text-[12px] md:text-[14px] font-bold tracking-widest hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all uppercase whitespace-nowrap shadow-md"
                >
                  報名課程
                </Link>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  )
}