'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import { 
  FaRocket, 
  FaChartLine, 
  FaShieldHalved, 
  FaCubes, 
  FaPalette,
  FaArrowRight
} from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function WpVsNextPage() {
  return (
    // 🟢 修正：加入 overflow-x-hidden 確保背景裝飾球不會撐開手機版網頁
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：確保 pointer-events-none 防止干擾點擊 */}
      <div className="absolute top-[5%] -left-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-400/20 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] -right-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-400/10 rounded-full blur-3xl opacity-50 pointer-events-none z-0"></div>

      <main className="max-w-4xl mx-auto px-4 md:px-6 pt-10 md:pt-16 relative z-10">
        <article>
          
          {/* ==========================================
              標題區塊：技術宣言
             ========================================== */}
          <MotionWrapper 
            type="fadeInUp" 
            className="bg-white rounded-[2rem] md:rounded-[2.5rem] px-0 md:px-16 py-10 md:py-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden"
          >
            {/* 文字區塊 */}
            <div className="px-6 md:px-0">
              <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Architecture Evolution
              </span>
              <h1 className="text-2xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                告別過時的笨重框架，<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  擁抱 Next.js 極速體驗
                </span>
              </h1>
              <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mb-8"></div>
              
              <p className="text-slate-500 text-lg md:text-2xl font-medium max-w-none md:max-w-5xl mx-auto tracking-tight leading-snug md:leading-normal mb-10">
                選擇 WordPress 就像租一間附好家具但受限的公寓；而選擇 Next.js，則是打造一棟極速、安全且完全符合專業形象的現代化數位大樓。
              </p>
            </div>

            {/* 圖片區塊：修正手機版貼邊問題 */}
            <div className="relative aspect-[16/9] md:aspect-[4/3] w-full overflow-hidden border-y md:border border-slate-200 bg-slate-50">
              <Image 
                src="/images/pro/1.webp" 
                alt="Next.js 效能展示"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </MotionWrapper>

          {/* ==========================================
              核心內文區塊：五大優勢比較
             ========================================== */}
          <div className="mt-12 space-y-6 md:space-y-8">
            
            {/* 比較項目模板：封裝邏輯確保一致性 */}
            {[
              {
                icon: <FaRocket />,
                color: "bg-blue-500",
                bg: "bg-blue-50",
                text: "text-blue-600",
                title: "極致的載入速度與流暢體驗",
                content: <><b>WordPress 的痛點：</b>每次造訪都需要伺服器執行 PHP 並撈取資料，加上過多的佈景與外掛，常導致網站載入緩慢。<br /><br /><b>Next.js 的優勢：</b>支援靜態生成 (SSG)，網頁點擊前就預先就緒。提供秒開體驗，大幅降低跳出率。</>
              },
              {
                icon: <FaChartLine />,
                color: "bg-indigo-500",
                bg: "bg-indigo-50",
                text: "text-indigo-600",
                title: "卓越的搜尋引擎排名 (SEO)",
                content: <><b>WordPress 的痛點：</b>先天架構容易造成程式碼冗長，在 Google 重視「核心網頁指標」的現在，常成為排名的致命傷。<br /><br /><b>Next.js 的優勢：</b>速度就是 SEO 的王道。乾淨的程式碼與精準的 Meta 標籤控制，大幅提升關鍵字曝光率。</>
              },
              {
                icon: <FaShieldHalved />,
                color: "bg-teal-500",
                bg: "bg-teal-50",
                text: "text-teal-600",
                title: "堅若磐石的企業級資安防護",
                content: <><b>WordPress 的痛點：</b>駭客的最愛。只要外掛有漏洞或忘記更新，整個網站與客戶資料庫就面臨風險。<br /><br /><b>Next.js 的優勢：</b>採用前後端分離架構，前端為靜態檔案，駭客找不到資料庫入口，從根本杜絕威脅。</>
              },
              {
                icon: <FaCubes />,
                color: "bg-purple-500",
                bg: "bg-purple-50",
                text: "text-purple-600",
                title: "擺脫外掛地獄與維護噩夢",
                content: <><b>WordPress 的痛點：</b>增加功能就得裝外掛，外掛衝突常導致網站崩潰白屏。<br /><br /><b>Next.js 的優勢：</b>針對需求精準開發，沒有外掛包袱。系統穩定且維護成本大幅降低。</>
              },
              {
                icon: <FaPalette />,
                color: "bg-rose-500",
                bg: "bg-rose-50",
                text: "text-rose-600",
                title: "完全客製化，展現極致專業",
                content: <><b>WordPress 的痛點：</b>高度依賴現成佈景，導致網站有「套版感」，難以在競爭者中脫穎而出。<br /><br /><b>Next.js 的優勢：</b>100% 的前端掌控權。打造符合品牌識別且互動獨特的網站，展現專業說服力。</>
              }
            ].map((item, index) => (
              <MotionWrapper key={index} type="fadeInUp" className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-1.5 md:w-2 h-full ${item.color} opacity-80`}></div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${item.bg} flex items-center justify-center shrink-0 ${item.text}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 font-normal leading-relaxed text-sm md:text-base text-justify md:text-left">
                      {item.content}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* ==========================================
              特色標籤群
             ========================================== */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 pt-12">
            {[
              '秒開極速體驗', 
              '無敵 SEO 優化', 
              '企業級防護', 
              '100% 掌握設計'
            ].map((tag, i) => (
              <span key={i} className="text-[10px] md:text-xs font-bold tracking-widest text-blue-600 border border-blue-100 px-4 py-2 rounded-full bg-blue-50/50 shadow-sm">
                # {tag}
              </span>
            ))}
          </div>

          {/* ==========================================
              底部 CTA 諮詢區
             ========================================== */}
          <MotionWrapper type="fadeInUp" className="mt-16 text-center border-t border-slate-200 pt-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              準備好升級你的品牌門面了嗎？
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-medium px-4">
              透過 AI 賦能與 Next.js 架構，打造專屬於你的頂級數位資產。
            </p>
            <Link 
              href="/enroll" 
              className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-3 md:py-4 bg-slate-900 text-white rounded-full text-[12px] md:text-[13px] font-bold tracking-[0.2em] hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              了解升級方案 <FaArrowRight size={16} />
            </Link>
          </MotionWrapper>

        </article>
      </main>
    </div>
  );
}