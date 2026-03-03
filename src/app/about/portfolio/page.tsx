'use client'
import Image from 'next/image' 
import React from 'react'
import Link from 'next/link'
import { 
  FaArrowRight, 
  FaCircleCheck, 
  FaRobot, 
  FaStethoscope, 
  FaPlaneDeparture,
  FaArrowUpRightFromSquare,
  FaGraduationCap,
  FaCode,
  FaServer
} from 'react-icons/fa6'

export default function PortfolioPage() {
  return (
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：靜態柔光 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-5xl mx-auto px-6 py-10 md:py-16 relative z-10">
        
        {/* ==========================================
            頁面標頭：靜態 div
           ========================================== */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">
            Our Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            成果展示
          </h1>
          <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mt-6"></div>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-6 font-medium tracking-wide">
            從醫療專業到頂級旅遊，看看我們如何透過 Next.js 現代化架構與 AI 協作，打造出極速、高轉換率且 100% 自主掌控的網站。
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          
          {/* ==========================================
              展示一：醫師個人與診所頁面 (靜態 div)
             ========================================== */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 overflow-hidden">
            
            <div className="flex flex-col lg:flex-row">
              {/* 🟢 左側：網頁預覽圖 - 移除 Scale 動畫 */}
              <a 
                href="https://www.dryichen.com.tw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-100 group overflow-hidden block"
              >
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
                
                <img
                  src="/images/about/2.webp"
                  alt="專業醫師網站"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                
                <div className="absolute top-0 left-0 w-full h-8 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 gap-2 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
              </a>

              {/* 右側：文字說明 */}
              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <FaStethoscope size={24} />
                </div>
                
                <a href="https://www.dryichen.com.tw/" target="_blank" rel="noopener noreferrer" className="group inline-block mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                    專業醫師與診所網站
                  </h2>
                </a>

                <p className="text-slate-600 leading-relaxed mb-6 font-normal">
                  完全捨棄傳統外包與笨重的 WordPress，從零開始透過 AI 協作寫出的現代化醫療網站。針對在地化 SEO（GEO）深度優化，讓有復健需求的患者能第一時間找到診所。
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Next.js 極速渲染，提升患者瀏覽體驗',
                    '運用 AI 精準生成線上初診評估單',
                    '100% 掌握原始碼，無高昂維護年費'
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                      <FaCircleCheck className="text-teal-500 shrink-0 mt-1" size={16} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a 
                    href="https://www.dryichen.com.tw/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold tracking-widest hover:bg-blue-600 transition-all duration-200 shadow-md group"
                  >
                    點我觀看 <FaArrowUpRightFromSquare size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-[10px] font-bold tracking-widest rounded-md uppercase">
                    # MEDICAL & HEALTHCARE
                  </span>
                </div>
              </div>
            </div>

            {/* 下半部：網頁成果展示 */}
            <div className="bg-slate-50 border-t border-slate-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <FaRobot className="text-blue-500" size={20} />
                <h3 className="text-lg font-bold text-slate-800">網頁實際成果展示</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { src: "/images/about/6.webp", text: "AI推薦病患來診所" },
                  { src: "/images/about/4.webp", text: "PRP在區域推薦第一名" },
                  { src: "/images/about/5.webp", text: "震波在區域推薦第一名" }
                ].map((img, idx) => (
                  <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <Image 
                      src={img.src} 
                      alt={img.text}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-4 z-10">
                      <p className="text-white text-xs font-bold tracking-wide">{img.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==========================================
              展示二：歐洲包車旅遊頁面 (靜態 div)
             ========================================== */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 overflow-hidden flex flex-col lg:flex-row">
            {/* 🟢 左側：網頁預覽圖 */}
            <a 
              href="https://europe-navy.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-100 group overflow-hidden order-1 lg:order-2 block"
            >
              <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
              <img
                src="/images/about/3.webp"
                alt="優雅歐洲包車旅遊平台"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute top-0 left-0 w-full h-8 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 gap-2 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
            </a>

            {/* 右側：文字說明 */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <FaPlaneDeparture size={24} />
              </div>
              
              <a href="https://europe-navy.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-block mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-teal-600 transition-colors duration-200">
                  優雅歐洲漫行 - 頂級旅遊服務平台
                </h2>
              </a>

              <p className="text-slate-600 leading-relaxed mb-6 font-normal">
                專為歐洲高端包車客製化打造。結合 AI 自動生成的旅遊路線結構化資料（Schema），讓網站在視覺與自然搜尋排名達到平衡。
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Framer Motion 流暢的視覺動畫體驗',
                  '結構化資料（JSON-LD）強化自然搜尋排名',
                  '高效能架構，大量高畫質圖片依然秒速載入'
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                    <FaCircleCheck className="text-blue-500 shrink-0 mt-1" size={16} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="https://europe-navy.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold tracking-widest hover:bg-teal-600 transition-all duration-200 shadow-md group"
                >
                  點我觀看 <FaArrowUpRightFromSquare size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 text-[10px] font-bold tracking-widest rounded-md uppercase">
                  # TRAVEL & LUXURY
                </span>
              </div>
            </div>
          </div>


          {/* ==========================================
              展示三：網頁製作教學與 SEO 強化平台 (靜態 div)
             ========================================== */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 overflow-hidden flex flex-col lg:flex-row">
            {/* 🟢 左側：網頁預覽圖 (維持交錯佈局，若展示二圖在右，此處可維持圖在左) */}
            <a 
              href="https://ai-zeta-dusky-55.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-100 group overflow-hidden block"
            >
              <div className="absolute inset-0 bg-indigo-900/5 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
              <img
                src="/images/about/6.webp" // 請確保圖片路徑正確或替換
                alt="Next.js 網頁架設教學與 SEO 強化"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* 瀏覽器頂部 UI */}
              <div className="absolute top-0 left-0 w-full h-8 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 gap-2 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
            </a>

            {/* 右側：文字說明 */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <FaGraduationCap size={24} /> 
              </div>
              
              <a href="https://ai-zeta-dusky-55.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-block mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                  Next.js 全方位網頁架設 - 從零開始的 SEO 教學
                </h2>
              </a>

              <p className="text-slate-600 leading-relaxed mb-6 font-normal">
                致力於推廣「不需寫程式也能架站」的高階架構。教導新手如何利用最新 Next.js 技術實現閃電般的載入速度，並透過實戰 SEO 策略讓搜尋排名自然提升。
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '專為新手設計的 Next.js 無程式碼/低程式碼邏輯',
                  '深度 SEO 強化技術，包含核心網頁指標 (CWV) 優化',
                  '整合最新 AI 工具，自動化產出高品質行銷內容'
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                    <FaCircleCheck className="text-indigo-500 shrink-0 mt-1" size={16} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="https://ai-zeta-dusky-55.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold tracking-widest hover:bg-indigo-600 transition-all duration-200 shadow-md group"
                >
                  點我觀看 <FaArrowUpRightFromSquare size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 text-[10px] font-bold tracking-widest rounded-md uppercase">
                  # SEO & EDUCATION
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* --- 底部引導區：靜態 div --- */}
        <div className="mt-20 text-center">
            <Link 
              href="/enroll" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
            >
              我也想擁有自己的網站 <FaArrowRight size={14} />
            </Link>
        </div>

      </main>
    </div>
  )
}