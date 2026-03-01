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
  FaArrowUpRightFromSquare, // 🟢 新增跳出視窗的圖標
  FaCode,
  FaServer
} from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function PortfolioPage() {
  return (
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <main className="max-w-5xl mx-auto px-6 py-10 md:py-16 relative z-10">
        
        {/* ==========================================
            頁面標頭
           ========================================== */}
        <MotionWrapper type="fadeInUp" className="text-center mb-16 space-y-3">
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
        </MotionWrapper>

        <div className="space-y-16 md:space-y-24">
          
          {/* ==========================================
              展示一：醫師個人與診所頁面 (Dr. Yichen)
             ========================================== */}
          <MotionWrapper type="fadeInUp">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 overflow-hidden">
              
              <div className="flex flex-col lg:flex-row">
                {/* 🟢 左側：網頁預覽圖 (可點擊超連結) */}
                <a 
                  href="https://www.dryichen.com.tw/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-100 group overflow-hidden block"
                >
                  <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  
                  {/* 🟢 使用動態截圖 API 解決圖片空白問題，免放本機圖檔 */}
                  <img
                    src="/images/about/2.webp"
                    alt="專業醫師網站"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* 模擬瀏覽器頂部 UI */}
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
                  
                  {/* 🟢 標題 (可點擊超連結) */}
                  <a href="https://www.dryichen.com.tw/" target="_blank" rel="noopener noreferrer" className="group inline-block mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      專業醫師與診所網站
                    </h2>
                  </a>

                  <p className="text-slate-600 leading-relaxed mb-6 font-normal">
                    完全捨棄傳統外包與笨重的 WordPress，從零開始透過 AI 協作寫出的現代化醫療網站。不僅大幅提升了網頁載入速度，更針對在地化 SEO（GEO）進行了深度優化，讓有復健需求的患者能第一時間在搜尋引擎上找到診所。
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

                  {/* 🟢 文字最下面新增按鈕：點我觀看 */}
                  <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <a 
                      href="https://www.dryichen.com.tw/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold tracking-widest hover:bg-blue-600 transition-all shadow-md group"
                    >
                      點我觀看 <FaArrowUpRightFromSquare size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-[10px] font-bold tracking-widest rounded-md uppercase">
                      # MEDICAL & HEALTHCARE
                    </span>
                  </div>
                </div>
              </div>
{/* 下半部：AI 協作花絮 */}
{/* 下半部：AI 協作花絮 */}
<div className="bg-slate-50 border-t border-slate-100 p-8 md:p-10">
  <div className="flex items-center gap-3 mb-6">
    <FaRobot className="text-blue-500" size={20} />
    <h3 className="text-lg font-bold text-slate-800">網頁實際成果展示</h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    {/* 圖片 1 - 將 aspect-video 改為 aspect-[4/3] */}
    <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <Image 
        src="/images/about/6.webp" 
        alt="AI推薦病患來診所"
        fill
        className="object-contain transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-4 z-10">
        <p className="text-white text-xs font-bold tracking-wide">AI推薦病患來診所</p>
      </div>
    </div>

    {/* 圖片 2 - 將 aspect-video 改為 aspect-[4/3] */}
    <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <Image 
        src="/images/about/4.webp" 
        alt="PRP在區域推薦第一名"
        fill
        className="object-contain transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-4 z-10">
        <p className="text-white text-xs font-bold tracking-wide">PRP在區域推薦第一名</p>
      </div>
    </div>

    {/* 圖片 3 - 將 aspect-video 改為 aspect-[4/3] */}
    <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <Image 
        src="/images/about/5.webp" 
        alt="震波在區域推薦第一名"
        fill
        className="object-contain transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-4 z-10">
        <p className="text-white text-xs font-bold tracking-wide">震波在區域推薦第一名</p>
      </div>
    </div>

  </div>
</div>
            </div>
          </MotionWrapper>

          {/* ==========================================
              展示二：歐洲包車旅遊頁面 (Europe Navy)
             ========================================== */}
          <MotionWrapper type="fadeInUp">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 overflow-hidden flex flex-col lg:flex-row">
              
              {/* 🟢 左側：網頁預覽圖 (可點擊超連結) */}
              <a 
                href="https://europe-navy.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-100 group overflow-hidden order-1 lg:order-2 block"
              >
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                
                {/* 🟢 動態截圖 API */}
                <img
                  src="/images/about/3.webp"
                  alt="優雅歐洲包車旅遊平台"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
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
                
                {/* 🟢 標題 (可點擊超連結) */}
                <a href="https://europe-navy.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-block mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-teal-600 transition-colors">
                    優雅歐洲漫行 - 頂級旅遊服務平台
                  </h2>
                </a>

                <p className="text-slate-600 leading-relaxed mb-6 font-normal">
                  一個專為歐洲高端包車客製化打造的展示網站。在這個專案中，我們運用了大量的流暢動畫與高質感 UI 元件，結合 AI 自動生成的旅遊路線結構化資料（Schema），讓網站在視覺上都達到了極致的平衡。
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

                {/* 🟢 文字最下面新增按鈕：點我觀看 */}
                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a 
                    href="https://europe-navy.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold tracking-widest hover:bg-teal-600 transition-all shadow-md group"
                  >
                    點我觀看 <FaArrowUpRightFromSquare size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 text-[10px] font-bold tracking-widest rounded-md uppercase">
                    # TRAVEL & LUXURY
                  </span>
                </div>
              </div>

            </div>
          </MotionWrapper>

        </div>

        {/* --- 底部引導區 --- */}
        <MotionWrapper type="fadeInUp" className="mt-20 text-center">
            <Link 
              href="/enroll" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all shadow-md uppercase active:scale-95"
            >
              我也想擁有自己的網站 <FaArrowRight size={14} />
            </Link>
        </MotionWrapper>

      </main>
    </div>
  )
}