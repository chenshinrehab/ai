'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function CoursesDirectoryPage() {
  // 🟢 教學內容與服務導覽項目
  const directoryItems = [
    {
      slug: 'syllabus',
      title: '課程大綱',
      subtitle: 'COURSE SYLLABUS',
      description: '循序漸進的實戰教學。第一堂課即贈送價值數萬元的 Next.js 基礎架構，帶你在電腦終端機實際把網頁架設跑起來！後續將深入教學如何與 AI 精準溝通、美化網頁、擴充多樣化功能，並全面強化 SEO 體質。',
      image: '/images/courses/1.webp', // 💡 請替換為您的圖片路徑
      features: ['贈送頂級架構', 'AI 協作技巧', '實戰 SEO 優化'],
    },
    {
      slug: 'services',
      title: '服務內容',
      subtitle: 'OUR SERVICES',
      description: '除了完整教學，我們更提供「一對一陪跑專案」帶著你實際做！服務涵蓋：協助將舊有 WordPress 無痛轉換至新架構、深度 SEO 強化建議、店家自動化流程改善，以及後續的專屬網頁維修與維護。',
      image: '/images/courses/2.webp', // 💡 請替換為您的圖片路徑
      features: ['一對一專案陪跑', '舊站無痛轉換', '自動化流程改善'],
    }
  ]

  return (
    // 🟢 科技感淺灰底色與網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：靜態柔光 */}
      <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[60%] -right-32 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 relative z-10">
        
        {/* --- 頁面標頭：精簡為快速淡入 --- */}
        <MotionWrapper type="fadeIn" className="text-center mb-16 space-y-3">
          <span className="text-indigo-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">
            Our Courses & Services
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            教學內容
          </h1>
          <div className="w-16 h-[4px] bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mx-auto mt-6"></div>
        </MotionWrapper>

        {/* --- 項目列表：交錯排列 --- */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {directoryItems.map((item, idx) => (
            <MotionWrapper key={item.slug} type="fadeIn">
              <Link 
                href={`/courses/${item.slug}`} // 🟢 路徑已更新為 /courses/...
                className={`group flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-white rounded-[2rem] overflow-hidden shadow-md border border-slate-100 hover:border-indigo-200 transition-all duration-300 block`}
              >
                {/* 圖片區塊 (40%) */}
                <div className="w-full md:w-[40%] relative min-h-[240px] md:min-h-full overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-indigo-900/5 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                {/* 文字內容區塊 (60%) */}
                <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <span className="text-indigo-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase block">
                      {item.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-200 tracking-tight">
                      {item.title}
                    </h2>
                  </div>

                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* 特色標籤 */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.features.map((feature, fIdx) => (
                      <span 
                        key={fIdx} 
                        className="text-[10px] md:text-xs font-bold tracking-widest text-indigo-600 border border-indigo-100 px-3 md:px-4 py-1.5 rounded-full bg-indigo-50/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 視覺引導按鈕 */}
                  <div className="pt-4 mt-auto">
                    <div className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-800 border-b-2 border-slate-200 pb-1 group-hover:text-indigo-600 group-hover:border-indigo-600 transition-all uppercase tracking-wider">
                      探索更多 <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>

      </main>
    </div>
  )
}