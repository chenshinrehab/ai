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
      slug: 'next',
      title: '次世代架構',
      subtitle: 'NEXT-GEN ARCHITECTURE',
      description: '告別過時笨重的 WordPress！採用 Next.js 現代化框架，不僅網頁載入極速順暢，徹底擺脫無止盡的外掛更新與臃腫代碼，更能打造出兼具美觀與效能的頂級網站。',
      image: '/images/pro/2.webp', // 請替換為您的圖片路徑
      features: ['Next.js 框架', '告別外掛包袱', '極速網頁體驗'],
    },
    {
      slug: 'seo',
      title: 'SEO 與 AI 強化',
      subtitle: 'SEO & AEO OPTIMIZATION',
      description: '在 AI 時代，擁有好網站還不夠。自架網頁讓你擁有 100% 的底層自由度，能精準埋設 Schema 結構化資料，全方位掌握 SEO、GEO（在地化）及 AEO（AI 搜尋），讓受眾與 AI 都能第一時間找到你。',
      image: '/images/pro/3.webp', // 請替換為您的圖片路徑
      features: ['精準 Schema', 'AEO/GEO 佈局', '掌握流量密碼'],
    },
    {
      slug: 'function',
      title: '功能隨心所欲',
      subtitle: 'DIVERSE FEATURES',
      description: '不再受限於套版軟體的死板框架！有了 AI 的協作，從懸浮視窗、預約系統到專屬的動態特效，你幾乎可以毫無限制地擴充任何想要的功能。（內含豐富功能展示影片）',
      image: '/images/pro/4.webp', // 請替換為您的圖片路徑
      features: ['高度客製化', 'AI 輔助開發', '無痛擴充功能'],
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
            Advantages of Next.js
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            自架優點
          </h1>
          <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mt-6"></div>
        </MotionWrapper>

        {/* --- 項目列表：交錯排列科技卡片 --- */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {directoryItems.map((item, idx) => (
            <MotionWrapper key={item.slug} type="fadeInUp">
              <Link 
                href={`/pro/${item.slug}`}
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