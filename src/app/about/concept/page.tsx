'use client'

import React from 'react'
import Link from 'next/link'
import { 
  FaCalendarCheck, 
  FaCode, 
  FaShieldHalved, 
  FaRocket 
} from 'react-icons/fa6'

export default function ConceptPage() {
  return (
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：低負荷靜態渲染 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 pt-10 md:pt-16 relative">
        <article className="relative z-10">
          
          {/* ==========================================
              標題區塊：我的理念 (改為靜態 div)
             ========================================== */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden">
            <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
              Our Vision & Origin
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              奪回網站控制權，<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                從零到一的 AI 架站革命
              </span>
            </h1>
            <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mb-8"></div>
            <p className="text-slate-500 !text-xl md:!text-2xl font-medium !max-w-none md:!max-w-5xl mx-auto !tracking-tighter md:!tracking-tight !leading-snug md:!leading-normal !px-0 md:!px-8 text-center block w-full">
              我不懂程式碼，但我學會了與 AI 協作。這不是傳統的程式課程，而是一場幫助你掌握數位資產、拒絕被行銷公司綁架的技術賦能計畫。
            </p>
          </div>

          {/* ==========================================
              核心內文區塊：三大理念 (改為靜態 div)
             ========================================== */}
          <div className="mt-12 space-y-8">
            
            {/* 理念 1：從零到一與低成本 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mb-2 md:mb-0">
                  <FaCode size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    零基礎也能駕馭：AI 協作與超低維護成本
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    我本身完全不會寫程式。為了搞懂網頁運作邏輯，我苦心鑽研數個月，並頻繁諮詢工程師朋友，才終於看透 SEO 與 GEO 的底層運作。正因爲我走過這條路，我比任何人都清楚「新手該如何入門」。
                    <br /><br />
                    透過這套服務，你不需要死背語法，我會教你如何有效對 AI 下達指令（Prompt）、修改程式碼與精準除錯。你的網站在 AI 的協助下將擁有極高曝光度，而<b>每年的維護花費，只有購買網域的不到 1,000 元台幣</b>。
                  </p>
                </div>
              </div>
            </div>

            {/* 理念 2：拒絕行銷綁架 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 mb-2 md:mb-0">
                  <FaShieldHalved size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    告別黑箱作業：100% 掌握原始碼與網域
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    你有過找網路行銷公司的慘痛經驗嗎？花了大錢，結果發現<b>網域和程式碼根本不在自己手裡</b>，合約一到期，累積的心血瞬間歸零。
                    <br /><br />
                    即使只是想微調一個功能，也要來回溝通數週，效果卻不盡人意。更糟的是，你根本無從得知他們是否真的有在做 SEO 維護。學會這套系統後，你將完全掌握自己的數位資產；就算未來需要外包，你也能具備「看懂架構」的能力，有效地找出錯誤並與行銷公司對等溝通。
                  </p>
                </div>
              </div>
            </div>

            {/* 理念 3：Next.js vs WordPress */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 group-hover:bg-teal-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 mb-2 md:mb-0">
                  <FaRocket size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    擁抱 Next.js：告別過時笨重的 WordPress
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    一開始嘗試自架網頁時，我也用過 WordPress。但我發現光是處理排版就耗費大量心力——電腦版調好，手機版又跑位。為了增加一個小小的「懸浮按鈕」，就得安裝一個外掛。外掛越裝越多，導致程式碼臃腫、架構過時，不僅拖慢了網站載入速度，更嚴重影響了用戶體驗與 SEO 排名。
                    <br /><br />
                    轉向 <b>Next.js 現代化框架</b>後，一切迎刃而解。網頁運作極度順暢，樣式風格可以自由變換，想增加什麼功能都能透過 AI 快速實現。它更方便我們植入結構化資料（Schema）給搜尋引擎爬蟲讀取，而且後續的維護其實一點也不難！
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ==========================================
              特色標籤群
             ========================================== */}
          <div className="flex flex-wrap justify-center gap-3 pt-12">
            {[
              '零基礎架站', 
              'AI 協作開發', 
              '100% 原始碼所有權', 
              'Next.js 企業級架構', 
              'SEO 真實優化'
            ].map((f: string, i: number) => (
              <span key={i} className="text-[11px] md:text-xs font-bold tracking-widest text-blue-600 border border-blue-100 px-5 py-2 rounded-full bg-blue-50/50 shadow-sm hover:bg-blue-100 transition-colors cursor-default">
                # {f}
              </span>
            ))}
          </div>

          {/* ==========================================
              底部 CTA 諮詢區
             ========================================== */}
          <div className="mt-16 text-center border-t border-slate-200 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              準備好掌握你的數位資產了嗎？
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-medium tracking-wide">
              從網域申請到上線部署，AI 將是你最強大的首席工程師。
            </p>
            <Link 
              href="/enroll" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-blue-700 hover:shadow-lg transition-all shadow-md uppercase active:scale-95"
            >
              <FaCalendarCheck size={16} /> 開始架站計畫
            </Link>
          </div>

        </article>
      </main>
    </div>
  );
}