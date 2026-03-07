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

export default function WpVsNextPage() {
  const comparisonItems = [
    {
      icon: <FaRocket />,
      color: "bg-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
      title: "極致的載入速度與流暢體驗",
      content: <><b>WordPress 的痛點：</b>每次造訪都需要伺服器執行 PHP 並撈取資料，加上過多的佈景與外掛，常導致載入緩慢。<br /><br /><b>Next.js 的優勢：</b>支援靜態生成 (SSG)，網頁點擊前就預先就緒，提供秒開體驗，大幅降低跳出率。</>
    },
    {
      icon: <FaChartLine />,
      color: "bg-indigo-500",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      title: "卓越的搜尋引擎排名 (SEO)",
      content: <><b>WordPress 的痛點：</b>先天架構容易造成程式碼冗長，在 Google 重視「核心網頁指標」的現在，常成為排名的致命傷。<br /><br /><b>Next.js 的優勢：</b>速度就是王道。乾淨的程式碼與精準的 Meta 控制，大幅提升關鍵字曝光率與 AI 搜尋可見度。</>
    },
    {
      icon: <FaShieldHalved />,
      color: "bg-teal-500",
      bg: "bg-teal-50",
      text: "text-teal-600",
      title: "堅若磐石的企業級資安防護",
      content: <><b>WordPress 的痛點：</b>駭客的最愛。只要外掛有漏洞或忘記更新，整個網站與客戶資料庫就面臨風險。<br /><br /><b>Next.js 的優勢：</b>前後端分離，前端為純靜態檔案，駭客找不到資料庫入口，從根本杜絕被攻擊的機會。</>
    },
    {
      icon: <FaCubes />,
      color: "bg-purple-500",
      bg: "bg-purple-50",
      text: "text-purple-600",
      title: "擺脫外掛地獄與維護噩夢",
      content: <><b>WordPress 的痛點：</b>增加功能就得裝外掛，外掛衝突常導致網站崩潰白屏，維護成本極高。<br /><br /><b>Next.js 的優勢：</b>針對需求精準開發，無痛擴充功能且系統穩定，不再擔心更新後網頁跑版。</>
    },
    {
      icon: <FaPalette />,
      color: "bg-rose-500",
      bg: "bg-rose-50",
      text: "text-rose-600",
      title: "完全客製化，展現極致專業",
      content: <><b>WordPress 的痛點：</b>高度依賴現成佈景，導致網站有「套版感」，難以在競爭對手中脫穎而出。<br /><br /><b>Next.js 的優勢：</b>100% 的設計自由。打造符合品牌識別且互動獨特的視覺效果，展現專業說服力。</>
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 靜態背景裝飾 */}
      <div className="absolute top-[5%] -left-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-[40%] -right-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-50/50 rounded-full blur-3xl pointer-events-none z-0"></div>

      <main className="max-w-4xl mx-auto px-4 md:px-6 pt-10 md:pt-16 relative z-10">
        <article>
          
          {/* ==========================================
              標題區塊 (靜態 div)
             ========================================== */}
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] px-6 md:px-16 py-12 md:py-20 shadow-md border border-slate-100 text-center relative overflow-hidden">
            <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
              Architecture Evolution
            </span>
            <h1 className="text-2xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              告別過時的笨重框架，<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                擁抱 Next.js 極速體驗
              </span>
            </h1>
            <div className="w-16 h-[4px] bg-blue-500 rounded-full mx-auto mb-10"></div>
            
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              選擇 WordPress 就像租一間附好家具但受限的公寓；而選擇 Next.js，則是打造一棟極速、安全且完全自主掌控的現代化數位大樓。
            </p>

            {/* 圖片展示 */}
            <div className="relative aspect-[4/3] md:aspect-[16/9] w-[calc(100%+3rem)] -ml-6 md:w-full md:ml-0 rounded-none md:rounded-2xl overflow-hidden border-y md:border border-slate-200 bg-slate-50">
  <Image 
    src="/images/pro/1.webp" 
    alt="Next.js 效能展示"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 1200px"
    className="object-cover object-top" // 確保圖片從頂部開始裁切，保留重要資訊
  />
</div>
          </div>

          {/* ==========================================
              核心內文區塊 (靜態 div)
             ========================================== */}
          <div className="mt-12 space-y-6 md:space-y-8">
            {comparisonItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1.5 md:w-2 h-full ${item.color} opacity-80`}></div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 ${item.text}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 tracking-tight text-center md:text-left">
                      {item.title}
                    </h2>
                    <div className="text-slate-600 font-normal leading-relaxed text-sm md:text-base space-y-4">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ==========================================
              特色標籤
             ========================================== */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 pt-12">
            {['秒開極速體驗', '無敵 SEO 優化', '企業級資安', '100% 掌握設計'].map((tag, i) => (
              <span key={i} className="text-[10px] md:text-xs font-bold tracking-widest text-blue-600 border border-blue-100 px-4 py-2 rounded-full bg-blue-50/50">
                # {tag}
              </span>
            ))}
          </div>

          {/* ==========================================
              底部 CTA 區 (靜態 div)
             ========================================== */}
          <div className="mt-16 text-center border-t border-slate-200 pt-16">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              準備好升級你的 brand 門面了嗎？
            </h3>
            <p className="text-slate-500 text-sm mb-10 font-medium">
              透過 AI 賦能與 Next.js 架構，打造專屬於您的頂級數位資產。
            </p>
            <Link 
              href="/enroll" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-blue-700 transition-colors shadow-md active:scale-95"
            >
              了解升級方案 <FaArrowRight size={14} />
            </Link>
          </div>

        </article>
      </main>
    </div>
  );
}