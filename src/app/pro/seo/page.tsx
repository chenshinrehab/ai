'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import { 
  FaRocket, 
  FaChartLine, 
  FaShieldHalved, 
  FaCubes, 
  FaArrowRight,
  FaRobot
} from 'react-icons/fa6'

export default function AiSeoPage() {
  return (
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：優化為 pointer-events-none 並簡化渲染壓力 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 pt-10 md:pt-16 relative">
        <article className="relative z-10">
          
          {/* ==========================================
              標題區塊 (靜態 div)
             ========================================== */}
          <div className="bg-white rounded-[2.5rem] px-0 md:px-16 py-10 md:py-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden">
            <div className="px-6 md:px-0">
              <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                The AI Traffic Revolution
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                漂亮的網頁很多，<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  但能「被看見」的很少
                </span>
              </h1>
              <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mb-8"></div>
              
              <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-none md:max-w-5xl mx-auto tracking-tighter md:tracking-tight leading-snug md:leading-normal mb-10 text-justify md:text-center">
                在 AI 時代，遊戲規則已經改變。您的網站不僅要給「人」看，更要給「AI」看。<br className="hidden md:block" />
                如果沒有做好底層架構，再優質的服務只是一座無人知曉的數位孤島
              </p>
            </div>
          </div>

          {/* ==========================================
              核心內文區塊
             ========================================== */}
          <div className="mt-12 space-y-8">
            
            {/* 觀點 1：爬蟲友善 (靜態 div) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mb-2 md:mb-0">
                  <FaRobot size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    完美契合搜尋引擎與 AI 爬蟲 (SSR / SSG)
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    傳統的單頁應用程式 (SPA) 在載入時多半是空白的，需要等待瀏覽器運算，AI 爬蟲往往沒有耐心等待。<br /><br />
                    <b>Next.js 的優勢：</b>內建強大的伺服器端渲染 (SSR) 與靜態生成 (SSG) 技術。當 AI 機器人造訪時，看到的是瞬間準備好的完整 HTML 內容，這讓 AI 能毫無阻礙地讀取並收錄您的專業知識。
                  </p>
                </div>
              </div>
            </div>

            {/* 觀點 2：SEO 掌控權 (靜態 div) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 mb-2 md:mb-0">
                  <FaCubes size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    後台程式碼級別的 SEO 絕對掌控權
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    在 WordPress 裡，您只能被動依賴 SEO 外掛提供的有限欄位。一旦版圖擴大，這些限制就會成為優化的瓶頸。<br /><br />
                    <b>Next.js 的優勢：</b>透過 Metadata API，開發者擁有 100% 的標籤掌控權。我們可以有系統地在底層程式碼中，為每一項服務、每一篇文章自動生成最精準的標題、描述與社群分享圖，將搜尋引擎的曝光效益極大化。
                  </p>
                </div>
              </div>
            </div>

            {/* 觀點 3：AEO & GEO (靜態 div) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 group-hover:bg-teal-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 mb-2 md:mb-0">
                  <FaChartLine size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    精準餵食 AI，稱霸 AEO 與 GEO 排名
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    要讓 ChatGPT 或 Google AI Overviews 推薦您，重點在於解答引擎優化 (AEO) 與生成式引擎優化 (GEO)。<br /><br />
                    <b>Next.js 的優勢：</b>我們能在程式碼中乾淨俐落地植入 JSON-LD 結構化資料。這就像是遞給 AI 一張數位名片，清楚告訴它：「這是一家專業的復健科診所」、「這是主治項目與真實評價」。當 AI 徹底理解您的實體屬性，您的品牌就會成為它的首選解答。
                  </p>
                </div>
              </div>
            </div>

            {/* 觀點 4：Core Web Vitals (靜態 div) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500 group-hover:bg-purple-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0 text-purple-600 mb-2 md:mb-0">
                  <FaRocket size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    輕鬆滿分通過「核心網頁指標」測試
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    Google 早就將網站的載入速度與流暢度（如 LCP、CLS）列為影響排名的硬性指標。肥大的傳統網站往往在這裡慘遭降級。<br /><br />
                    <b>Next.js 的優勢：</b>內建革命性的圖片最佳化 (Image Optimization) 與程式碼自動分割技術。它會自動壓縮龐大資源並分批載入，輕而易舉地在 PageSpeed Insights 測驗中拿下高分，用硬實力輾壓競爭對手。
                  </p>
                </div>
              </div>
            </div>

            {/* 觀點 5：穩定與資安 (靜態 div) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 group-hover:bg-rose-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0 text-rose-600 mb-2 md:mb-0">
                  <FaShieldHalved size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    高度安全，確保流量與排名穩如泰山
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    如果網站經常因為外掛衝突當機，或者被駭客植入惡意程式，您辛苦累積的 SEO 排名將會瞬間雪崩。<br /><br />
                    <b>Next.js 的優勢：</b>搭配現代化雲端部署，其無頭式 (Headless) 架構讓前端與資料庫完美隔離。沒有傳統的後台入口供駭客暴力破解，網站永遠保持在最快、最安全的狀態，讓 AI 爬蟲隨時都能安心造訪。
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ==========================================
              特色標籤群 (靜態 div)
             ========================================== */}
          <div className="flex flex-wrap justify-center gap-3 pt-12">
            {[
              '傳統 SEO 優化', 
              'AEO 解答引擎優化', 
              'GEO 生成式搜尋引擎', 
              'JSON-LD 結構化資料'
            ].map((f: string, i: number) => (
              <div key={i}>
                <span className="text-[11px] md:text-xs font-bold tracking-widest text-blue-600 border border-blue-100 px-5 py-2 rounded-full bg-blue-50/50 shadow-sm hover:bg-blue-100 transition-colors cursor-default inline-block">
                  # {f}
                </span>
              </div>
            ))}
          </div>

          {/* ==========================================
              底部 CTA 諮詢區 (靜態 div)
             ========================================== */}
          <div className="mt-16 text-center border-t border-slate-200 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              準備好讓 AI 認識你了嗎？
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-medium tracking-wide">
              運用 Next.js 極速架構，奪回數位時代的流量掌控權。
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-slate-800 hover:shadow-lg transition-all shadow-md uppercase active:scale-95"
            >
              啟動架站計畫 <FaArrowRight size={16} />
            </Link>
          </div>

        </article>
      </main>
    </div>
  );
}