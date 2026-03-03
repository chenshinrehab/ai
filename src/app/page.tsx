'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MotionWrapper from '@/components/MotionWrapper'; 
import { AnimatePresence, motion } from 'framer-motion';
import { 
  FaStar, 
  FaCircleCheck, 
  FaSquareParking, 
  FaCircleInfo, 
  FaRobot, 
  FaShieldHalved, 
  FaCommentDots,
  FaMagnifyingGlassChart,
  FaArrowRight
} from "react-icons/fa6";

// 💡 服務內容資料庫：已補上對應的跳轉連結
const serviceItems = [
  {
    id: 'ai-dev',
    title: '醫師個人網頁實測', 
    desc: '零基礎也能寫出專業程式碼',
    tag: 'MEDICAL',
    image: '/images/about/2.webp', // 請確保路徑正確
    link: 'https://www.dryichen.com.tw/'
  },
  {
    id: 'seo-mastery',
    title: '歐洲包車旅遊導覽', 
    desc: '掌握搜尋引擎曝光的真實邏輯',
    tag: 'TRAVEL',
    image: '/images/about/3.webp', // 請確保路徑正確
    link: 'https://europe-navy.vercel.app/'
  },
  {
    id: 'ownership',
    title: '網頁架設教學與 SEO', 
    desc: '網域與程式碼永遠屬於你',
    tag: 'EDUCATION',
    image: '/images/about/6.webp', // 請確保路徑正確
    link: 'https://ai-zeta-dusky-55.vercel.app/'
  }
];

export default function Home() {
  // --- 🔴 核心輪播邏輯優化：參考歐洲旅遊版本 ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 每次渲染時清除舊計時器
    if (timerRef.current) clearInterval(timerRef.current);

    // 設定 4 秒切換一次
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceItems.length);
    }, 4000); 

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const currentService = serviceItems[currentIndex];
  // --- 🔴 邏輯結束 ---

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 pb-16 relative overflow-x-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾 */}
      <div className="absolute top-[10%] -left-48 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-[50%] -right-48 w-[500px] h-[500px] bg-indigo-400/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <main className="max-w-6xl mx-auto px-6 pt-10 space-y-12 md:space-y-16 relative z-10">
        
        {/* --- Section 1: Hero --- */}
        <MotionWrapper type="fadeInUp">
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            
            {/* 🟢 輪播圖片區塊：導入 AnimatePresence 實現輕柔換場 */}
            <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-[8px] border-white bg-white group">
                <Link 
                  href={currentService.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-full h-full cursor-pointer overflow-hidden"
                >
                    {/* 使用 AnimatePresence 處理換場動畫 */}
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={currentIndex} // key 改變時觸發動畫
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1,
                          transition: { duration: 1.5, ease: "easeOut" } // 🟢 輕柔浮現
                        }}
                        exit={{ 
                          opacity: 0,
                          transition: { duration: 0.8, ease: "easeIn" }  // 🟢 俐落退場
                        }}
                        className="relative w-full h-full"
                      >
                        {/* 底層文字備份 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                           <span className="text-blue-300 font-bold tracking-widest text-lg">{currentService.title}</span>
                        </div>

                        {/* 圖片 */}
                        <Image 
                          src={currentService.image} 
                          alt={currentService.title} 
                          fill 
                          priority
                          className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                        /> 
                        
                        {/* 漸層遮罩 */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      </motion.div>
                    </AnimatePresence>

                    {/* 左下角標籤：放在 AnimatePresence 外層確保標籤本身不隨圖片閃爍，或放在內層隨圖片換內容 */}
                    <div className="absolute bottom-6 left-6 z-10">
                      <span className="bg-white/95 text-blue-700 text-[10px] font-bold tracking-[0.2em] px-4 py-2 rounded-full uppercase border border-blue-100/50 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex items-center gap-2">
                        {currentService.tag} · 點擊參觀 <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                </Link>
            </div>

            <div className="md:w-1/2 space-y-6 py-6">
              <div className="flex items-center gap-2.5 text-blue-600">
                <FaStar size={14} className="opacity-80" />
                <span className="text-xs tracking-[0.3em] uppercase font-bold">AI Web Design Agency</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.3] tracking-tight">
                奪回網站主導權，<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">零基礎也能打造極速網站。</span>
              </h1>    
              <p className="text-base md:text-lg leading-relaxed text-slate-600 font-light max-w-lg">
                我不懂程式碼，但我學會了與 AI 協作。現在我將這套邏輯教給你，從網域申請到 SEO 優化，完全掌控自己的數位資產。
              </p>

              <div className="grid grid-cols-1 gap-4 pt-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4 text-base">
                  <FaCircleCheck className="text-blue-500 shrink-0 mt-1" size={20} />
                  <span className="font-medium text-slate-800">協助從 0 到 1 完整架構規劃，架設成本
                  <span className="text-blue-600 font-bold text-xl md:text-2xl mx-1 underline underline-offset-4 decoration-2">0</span> 元
                  </span>
                </div>
                <div className="flex items-start gap-4 text-base">
                  <FaSquareParking className="text-indigo-500 shrink-0 mt-1" size={20} />
                  <span className="font-medium text-slate-800 leading-relaxed">
                    擺脫高昂年費，每年維護成本不到 
                    <span className="text-blue-600 font-bold text-xl md:text-2xl mx-1 underline underline-offset-4 decoration-2">1,000</span> 
                    <span className="text-blue-600 font-bold">元</span>
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-sm tracking-widest font-bold uppercase">
                  開始你的架站計畫
                </button>
              </div>
            </div>
          </section>
        </MotionWrapper>

        {/* --- Section 2: 核心價值 --- */}
        <MotionWrapper type="fadeInUp">
          <section className="bg-white rounded-[2.5rem] px-8 py-10 md:px-12 md:py-12 border border-slate-100 shadow-xl shadow-blue-900/5 flex flex-col lg:flex-row gap-10 items-center overflow-hidden">
            <div className="lg:w-[40%] space-y-4 text-left order-2 lg:order-1">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-[1.3] tracking-tight">
                  把錢花在刀口上，<br />
                  <span className="text-blue-600">把技術留給自己。</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light mt-4">
                  過往找行銷公司網站老是改不動？合約到期就被「綁架」？自己懂邏輯，搭配 AI，你就是最好的維護工程師。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50 mt-4">
                {['# 程式碼掌控', '# 免費主機', '# AI 除錯', '# 自主 SEO'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-50/50 border border-blue-100 text-blue-600 rounded-full text-[10px] font-bold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-[60%] w-full order-1 lg:order-2">
              <div className="relative rounded-[2rem] overflow-hidden bg-slate-50 p-5 md:p-8 border border-white shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 rounded-2xl space-y-3 border border-red-100">
                    <h4 className="text-red-500 font-bold text-lg md:text-xl flex items-center gap-2">❌ 傳統外包網頁</h4>
                    <ul className="text-slate-500 text-sm md:text-base space-y-2.5 leading-relaxed">
                      <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-300 shrink-0" />每年數萬元維護費與主機費</li>
                      <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-300 shrink-0" />網域與原始碼權限被公司掌握</li>
                      <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-300 shrink-0" />小改動需排程等待且額外收費</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl space-y-3 border border-emerald-100">
                    <h4 className="text-emerald-700 font-bold text-lg md:text-xl flex items-center gap-2">✅ AI 協作自主架站</h4>
                    <ul className="text-slate-700 text-sm md:text-base space-y-2.5 leading-relaxed">
                      <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />每年僅需網域費 (低於 NT$1,000)</li>
                      <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />100% 原始碼所有權，隨時搬遷</li>
                      <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />AI 輔助，5 分鐘內完成即時修改</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </MotionWrapper>

        {/* --- Section 3: 專業核心服務 --- */}
        <section className="py-2"> 
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
              {[
                { icon: <FaRobot />, title: "AI 詠唱開發", desc: "不需要死背代碼，教你如何精準與 AI 對話，從 0 產出專業網頁程式。" },
                { icon: <FaMagnifyingGlassChart />, title: "SEO 與 GEO 優化", desc: "搞懂搜尋引擎運作與地理位置優化，讓你的網站在 AI 與搜尋世界中曝光。" },
                { icon: <FaShieldHalved />, title: "資產安全掌控", desc: "教學如何將網站部署在安全且免費的雲端平台，不被任何行銷合約束縛。" }
              ].map((item, idx) => (
                <MotionWrapper 
                  key={idx} 
                  type="fadeInUp" 
                  delay={idx * 100}
                  className="space-y-3 text-center bg-white p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors shadow-sm"
                >
                  <div className="text-blue-500 text-3xl mb-3 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg tracking-wide text-slate-900 font-bold">{item.title}</h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed font-light mt-2">{item.desc}</p>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section 4: 常見問題 --- */}
        <MotionWrapper type="fadeInUp">
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-blue-900/5 relative">
            <div className="flex items-center gap-4 mb-10">
              <FaCircleInfo className="text-blue-500" size={28} />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">常見問題與須知</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-blue-700 text-lg">Q: 完全不會寫程式真的可以嗎？</h4>
                <p className="text-slate-600 leading-relaxed text-sm">我也是新手出身！我會教你如何使用 AI 作為你的大腦，你只需要掌握邏輯，程式碼交給 AI 寫。</p>
              </div>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-blue-700 text-lg">Q: 為什麼費用這麼便宜？</h4>
                <p className="text-slate-600 leading-relaxed text-sm">因為我們教你跳過「中間商」，直接使用雲端大廠的免費託管服務，你只需支付網域所有權費用。</p>
              </div>
            </div>
          </section>
        </MotionWrapper>

      </main>

      {/* --- 懸浮諮詢按鈕 --- */}
      <MotionWrapper type="scale" className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <a 
          href="https://line.me/R/ti/p/@yourid" 
          className="bg-blue-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-xl hover:scale-110 active:scale-90 transition-transform flex items-center justify-center border-2 border-white"
        >
          <FaCommentDots className="text-[24px] md:text-[28px]" />
        </a>
      </MotionWrapper>
    </div>
  );
}