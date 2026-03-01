'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function AboutDirectoryPage() {
  // 🟢 更新為智網的服務導覽項目
  const directoryItems = [
    {
      slug: 'concept',
      title: '我的理念',
      subtitle: 'OUR VISION',
      description: '我不懂程式碼，但我學會了與 AI 協作。幫助你掌握數位資產，拒絕被行銷公司綁架的技術賦能計畫。',
      image: '/images/about/1.webp', // 請替換為您的圖片路徑
      features: ['零基礎架站', '掌控數位資產', '超低維護成本'],
    },
    {
      slug: 'portfolio',
      title: '成果展示',
      subtitle: 'PORTFOLIO',
      description: '看看我們如何透過 Next.js 現代化架構與 AI 協助，打造出極速、高轉換率且具備完美 SEO 體質的現代化網站。',
      image: '/images/about/3.webp', // 請替換為您的圖片路徑
      features: ['極速渲染', 'SEO 滿分', '自適應設計'],
    }
  ]

  return (
    // 🟢 科技感淺灰底色與網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾 */}
      <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-[60%] -right-32 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 relative z-10">
        
        {/* --- 頁面標頭 --- */}
        <MotionWrapper type="fadeInUp" className="text-center mb-16 space-y-3">
          <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">
            About Zhiwang
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            關於智網
          </h1>
          <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mt-6"></div>
        </MotionWrapper>

        {/* --- 項目列表：交錯排列科技卡片 --- */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {directoryItems.map((item, idx) => (
            <MotionWrapper key={item.slug} type="fadeInUp">
              <Link 
                href={`/about/${item.slug}`}
                // 🟢 偶數靠左、奇數靠右的交錯排版
                className={`group flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-blue-900/5 border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 block`}
              >
                {/* 圖片區塊 (40%) */}
                <div className="w-full md:w-[40%] relative min-h-[240px] md:min-h-full overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  {/* 💡 確保有圖檔再解除註解 Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* 文字內容區塊 (60%) */}
                <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <span className="text-blue-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase block">
                      {item.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
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
                        className="text-[10px] md:text-xs font-bold tracking-widest text-blue-600 border border-blue-100 px-3 md:px-4 py-1.5 rounded-full bg-blue-50/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 視覺引導按鈕 */}
                  <div className="pt-4 mt-auto">
                    <div className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-800 border-b-2 border-slate-200 pb-1 group-hover:text-blue-600 group-hover:border-blue-600 transition-all uppercase tracking-wider">
                      探索更多 <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1.5" />
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