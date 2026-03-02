'use client'

import React from 'react'
import Link from 'next/link'
import { 
  FaRocket, 
  FaChartLine, 
  FaShieldHalved, 
  FaCubes, 
  FaArrowRight,
  FaRobot,
  FaWrench,
  FaRotate
} from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function ServicesPage() {
  return (
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：優化為 pointer-events-none 並簡化渲染壓力 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 pt-10 md:pt-16 relative">
        <article className="relative z-10">
          
          {/* ==========================================
              標題區塊：服務宣言（使用快速淡入）
             ========================================== */}
          <MotionWrapper 
            type="fadeIn" 
            className="bg-white rounded-[2.5rem] px-0 md:px-16 py-10 md:py-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden"
          >
            <div className="px-6 md:px-0">
              <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Professional Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                不只是教學，<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  更是您最強大的技術後盾
                </span>
              </h1>
              <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mb-8"></div>
              
              <p className="text-slate-500 text-[17px] md:text-xl font-medium max-w-none md:max-w-4xl mx-auto tracking-normal leading-relaxed mb-10 text-justify md:text-center">
                除了提供完善的系統教學，我們更提供一系列的實戰代工與升級服務。<br className="hidden md:block" />
                無論是舊站翻新、自動化導入還是日常維護，我們都能為您量身打造最佳解方。
              </p>
            </div>
          </MotionWrapper>

          {/* ==========================================
              核心內文區塊：服務項目與價格
             ========================================== */}
          <div className="mt-12 space-y-8">
            
            {/* 服務 1：陪跑專案 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mb-2 md:mb-0">
                  <FaRocket size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    一對一專案陪跑 (手把手實戰)
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    不想自己摸索？我們提供專屬的「陪跑服務」，實際帶著你從規劃、開發到上線，全程一對一指導。<br />
                    不只是給你釣竿，我們直接帶你釣到第一條大魚，確保你的網站具備最高水準的商業轉換力。
                  </p>
                  {/* 價格區塊 */}
                  <div className="mt-5 pt-5 border-t border-slate-100 flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-sm font-bold text-slate-400 tracking-wider">專案報價：</span>
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 tracking-tight">
                      NT$ 29,800
                    </span>
                    <span className="text-sm font-bold text-slate-400">起</span>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* 服務 2：WordPress 轉換 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 mb-2 md:mb-0">
                  <FaRotate size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    WordPress 舊站無痛升級 Next.js
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    受夠了 WordPress 的緩慢載入、外掛衝突與高昂的主機費用嗎？<br />
                    我們協助將您的舊網站資料完整搬遷，全面升級至 Next.js 現代化極速架構。保留既有 SEO 權重，同時讓網頁效能突破天際。
                  </p>
                  {/* 價格區塊 */}
                  <div className="mt-5 pt-5 border-t border-slate-100 flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-sm font-bold text-slate-400 tracking-wider">升級報價：</span>
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 tracking-tight">
                      NT$ 15,000
                    </span>
                    <span className="text-sm font-bold text-slate-400">起</span>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* 服務 3：SEO 強化建議 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 group-hover:bg-teal-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 mb-2 md:mb-0">
                  <FaChartLine size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    深度 SEO 排名優化與健檢
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    針對您現有的網站進行全方位健檢，找出讓搜尋排名卡關的致命傷。<br />
                    包含：導入 JSON-LD 結構化資料、Meta 標籤重構、AEO/GEO 生成式搜尋引擎優化策略，精準餵食 AI，提升自然流量。
                  </p>
                  {/* 價格區塊 */}
                  <div className="mt-5 pt-5 border-t border-slate-100 flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-sm font-bold text-slate-400 tracking-wider">健檢報價：</span>
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-400 tracking-tight">
                      NT$ 8,800
                    </span>
                    <span className="text-sm font-bold text-slate-400">起</span>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* 服務 4：自動化流程改善 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500 group-hover:bg-purple-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0 text-purple-600 mb-2 md:mb-0">
                  <FaRobot size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    店家自動化流程導入
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    還在人工回覆訊息、手動抄寫客戶名單？<br />
                    我們協助您串接 LINE Bot 客服、自動化寄信系統、Google 試算表即時連動，大幅降低行政成本，打造 24/7 不間斷的營業自動化機器。
                  </p>
                  {/* 價格區塊 */}
                  <div className="mt-5 pt-5 border-t border-slate-100 flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-sm font-bold text-slate-400 tracking-wider">導入報價：</span>
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 tracking-tight">
                      NT$ 12,000
                    </span>
                    <span className="text-sm font-bold text-slate-400">起</span>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* 服務 5：網頁維護與維修 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 group-hover:bg-rose-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0 text-rose-600 mb-2 md:mb-0">
                  <FaWrench size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    網頁故障排除與長期維護
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    網站突然掛掉？版面跑掉？功能異常？<br />
                    我們提供單次的技術救援，以及彈性的長期網頁維護方案。定期幫您備份、升級套件、監測效能，讓您的數位資產隨時保持在最健康的狀態。
                  </p>
                  {/* 價格區塊 */}
                  <div className="mt-5 pt-5 border-t border-slate-100 flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-sm font-bold text-slate-400 tracking-wider">單次維修：</span>
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400 tracking-tight">
                      NT$ 3,000
                    </span>
                    <span className="text-sm font-bold text-slate-400">起</span>
                  </div>
                </div>
              </div>
            </MotionWrapper>

          </div>

          {/* ==========================================
              特色標籤群（使用輕量淡入）
             ========================================== */}
          <div className="flex flex-wrap justify-center gap-3 pt-12">
            {[
              '一對一指導', 
              '無痛搬站', 
              'SEO 排名搶佔', 
              '自動化營運',
              '技術救援',
              '合約透明'
            ].map((f: string, i: number) => (
              <MotionWrapper key={i} type="fadeIn" delay={i * 0.05}>
                <span className="text-[11px] md:text-xs font-bold tracking-widest text-blue-600 border border-blue-100 px-5 py-2 rounded-full bg-blue-50/50 shadow-sm hover:bg-blue-100 transition-colors cursor-default inline-block">
                  # {f}
                </span>
              </MotionWrapper>
            ))}
          </div>

          {/* ==========================================
              底部 CTA 諮詢區
             ========================================== */}
          <MotionWrapper type="fadeInUp" className="mt-16 text-center border-t border-slate-200 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              準備好讓您的網站煥然一新了嗎？
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-medium tracking-wide">
              點擊下方按鈕，與我們聊聊您的需求，為您量身規劃最佳方案。
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all shadow-md uppercase active:scale-95"
            >
              立刻預約免費諮詢 <FaArrowRight size={16} />
            </Link>
          </MotionWrapper>

        </article>
      </main>
    </div>
  );
}