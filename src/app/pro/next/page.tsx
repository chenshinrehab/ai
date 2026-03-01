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
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：清新的藍色與靛色柔光 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 pt-10 md:pt-16 relative">
        <article className="relative z-10">
          
          {/* ==========================================
              標題區塊：技術宣言
             ========================================== */}
        <MotionWrapper 
  type="fadeInUp" 
  className="bg-white rounded-[2.5rem] px-0 md:px-16 py-10 md:py-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden"
>
  {/* 🟢 文字區塊：單獨加上 px-6 讓手機版文字恢復留白，md:px-0 因為外層已經有 md:px-16 了 */}
  <div className="px-6 md:px-0">
    <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
      Architecture Evolution
    </span>
    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
      告別過時的笨重框架，<br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
        擁抱 Next.js 極速體驗
      </span>
    </h1>
    <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mb-8"></div>
    
    <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-none md:max-w-5xl mx-auto tracking-tighter md:tracking-tight leading-snug md:leading-normal mb-10">
      選擇 WordPress 就像租一間附好家具但受限的公寓；而選擇 Next.js，則是從零開始，打造一棟極速、安全且完全符合您專業形象的現代化數位大樓。
    </p>
  </div>

  {/* 🟢 圖片區塊：維持 px-0，所以它會直接貼齊 MotionWrapper 的邊緣 */}
  <div className="group relative aspect-[4/3] w-full rounded-none md:rounded-xl overflow-hidden border-none md:border border-slate-200 bg-white shadow-none md:shadow-sm">
    <Image 
      src="/images/pro/1.webp" 
      alt="AI推薦病患來診所"
      fill
      className="object-cover transition-transform duration-700"
    />
  </div>
</MotionWrapper>
          {/* ==========================================
              核心內文區塊：五大優勢比較
             ========================================== */}
          <div className="mt-12 space-y-8">
            
            {/* 比較 1：效能與速度 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mb-2 md:mb-0">
                  <FaRocket size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    極致的載入速度與流暢體驗
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    <b>WordPress 的痛點：</b>每次造訪都需要伺服器執行 PHP 並撈取資料，加上過多的佈景與外掛，常導致網站臃腫、載入緩慢。
                    <br /><br />
                    <b>Next.js 的優勢：</b>支援靜態生成 (SSG) 與伺服器渲染 (SSR)，網頁在點擊前就預先準備就緒。點開瞬間「秒開」，提供宛如原生 App 般滑順的瀏覽體驗，大幅降低跳出率。
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* 比較 2：SEO 表現 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 mb-2 md:mb-0">
                  <FaChartLine size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    卓越的搜尋引擎排名 (SEO)
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    <b>WordPress 的痛點：</b>先天架構容易造成程式碼冗長，在 Google 越來越看重「核心網頁指標」的現在，常常成為排名的致命傷。
                    <br /><br />
                    <b>Next.js 的優勢：</b>速度就是 SEO 的王道。乾淨的程式碼能輕鬆在 PageSpeed 拿下高分，且能精準控制每個頁面的 Meta 標籤與結構化資料 (Schema)，大幅提升地區性搜尋 (Local SEO) 與專業關鍵字的曝光率。
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* 比較 3：資訊安全 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 group-hover:bg-teal-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 mb-2 md:mb-0">
                  <FaShieldHalved size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    堅若磐石的企業級資安防護
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    <b>WordPress 的痛點：</b>作為市佔最高的平台，它是駭客的最愛。只要一個外掛有漏洞或忘記更新，整個網站與客戶資料庫就面臨極大風險。
                    <br /><br />
                    <b>Next.js 的優勢：</b>採用前後端分離 (Headless) 架構，前端多為靜態檔案。駭客找不到資料庫入口，也沒有傳統的後台登入頁面可以暴力破解，從根本上杜絕了大部分的資安威脅。
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* 比較 4：維護與穩定性 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500 group-hover:bg-purple-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0 text-purple-600 mb-2 md:mb-0">
                  <FaCubes size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    擺脫「外掛地獄」與維護噩夢
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    <b>WordPress 的痛點：</b>增加功能就得裝外掛，外掛之間常互相衝突。每次系統更新都要提心吊膽，深怕網站崩潰出現白屏死機。
                    <br /><br />
                    <b>Next.js 的優勢：</b>沒有外掛包袱。利用乾淨的程式碼針對需求精準開發，搭配 Vercel 等現代化雲端平台，部署與版本控制完全自動化。後續不僅穩定，維護成本反而大幅降低。
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* 比較 5：客製化與專業感 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 group-hover:bg-rose-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0 text-rose-600 mb-2 md:mb-0">
                  <FaPalette size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    完全客製化，展現極致品牌專業
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    <b>WordPress 的痛點：</b>高度依賴現成的佈景主題，導致網站常常有一種「套版感」，難以在眾多競爭者中脫穎而出。
                    <br /><br />
                    <b>Next.js 的優勢：</b>給予開發者 100% 的前端掌控權。您可以打造出完全符合品牌識別 (CI)、介面精緻且互動獨特的網站。對於重視質感的專業領域，這是展現說服力的最強武器。
                  </p>
                </div>
              </div>
            </MotionWrapper>

          </div>

          {/* ==========================================
              特色標籤群
             ========================================== */}
          <div className="flex flex-wrap justify-center gap-3 pt-12">
            {[
              '秒開極速體驗', 
              '無敵 SEO 優化', 
              '企業級防護', 
              '100% 掌握設計'
            ].map((f: string, i: number) => (
              <span key={i} className="text-[11px] md:text-xs font-bold tracking-widest text-blue-600 border border-blue-100 px-5 py-2 rounded-full bg-blue-50/50 shadow-sm hover:bg-blue-100 transition-colors cursor-default">
                # {f}
              </span>
            ))}
          </div>

          {/* ==========================================
              底部 CTA 諮詢區
             ========================================== */}
          <MotionWrapper type="fadeInUp" className="mt-16 text-center border-t border-slate-200 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              準備好升級你的品牌門面了嗎？
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-medium tracking-wide">
              透過 AI 賦能與 Next.js 架構，打造專屬於你的頂級數位資產。
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all shadow-md uppercase active:scale-95"
            >
              了解升級方案 <FaArrowRight size={16} />
            </Link>
          </MotionWrapper>

        </article>
      </main>
    </div>
  );
}