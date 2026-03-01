'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MotionWrapper from '@/components/MotionWrapper'

import { 
  FaFacebookF, 
  FaInstagram, 
  FaLine,
  FaCalendarCheck 
} from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

export default function Footer() {
  const [visitCount, setVisitCount] = useState<string>('---')

  // =================================================================
  // 瀏覽人數計算邏輯
  // =================================================================
  useEffect(() => {
    const START_DATE = new Date('2026-01-01T00:00:00'); 
    const START_COUNT = 100;
    const DAILY_INCREMENT = 19;

    const calculateViews = () => {
      const now = new Date();
      const timeDiff = now.getTime() - START_DATE.getTime();
      const daysPassed = Math.max(0, timeDiff / (1000 * 60 * 60 * 24));
      
      const currentViews = Math.floor(START_COUNT + (daysPassed * DAILY_INCREMENT));
      setVisitCount(currentViews.toLocaleString());
    };

    calculateViews();
    const intervalId = setInterval(calculateViews, 60000); 
    return () => clearInterval(intervalId);
  }, [])

  return (
    // 🟢 科技感淺灰底色與細緻邊框 (將原本的 pt-16 改為 pt-2，大幅縮減上方間距)
    <footer className="bg-slate-50 border-t border-slate-100 pt-0 pb-8  relative overflow-hidden font-sans">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* =========================================
            Part 1: 服務導覽 (快速連結)
           ========================================= */}
        <MotionWrapper type="stagger" className="mb-20">
            <MotionWrapper type="fadeInUp">
              <h3 className="text-lg font-bold text-slate-800 text-center mb-8 tracking-[0.2em] uppercase mt-4">
                Quick Explore
              </h3>
            </MotionWrapper>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                {[
                  { name: '關於智網', path: '/about', img: '/images/footer/9.webp' },
                  { name: '自架優點', path: '/advantages', img: '/images/footer/6.webp' },
                  { name: '教學內容', path: '/courses', img: '/images/footer/7.webp' },
                  { name: '報名課程', path: '/enroll', img: '/images/footer/8.webp' }
                ].map((item, idx) => (
                  <MotionWrapper key={idx} type="fadeInUp">
                    <Link href={item.path} className="group rounded-2xl relative h-32 md:h-40 overflow-hidden shadow-sm border-[4px] border-white hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 block">
                      {/* 💡 請確保 public/images/footer/ 下有這些圖片，或自行替換為科技感配圖 */}
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* 覆蓋層：深藍色半透明漸層 */}
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-blue-900/50 transition-colors flex items-center justify-center backdrop-blur-[1px]">
                          <span className="text-white font-bold text-sm md:text-base tracking-widest border-b-2 border-blue-400/0 group-hover:border-blue-400/100 pb-1 transition-all">
                            {item.name}
                          </span>
                      </div>
                    </Link>
                  </MotionWrapper>
                ))}
            </div>
        </MotionWrapper>

        {/* =========================================
            Part 2: 聯絡資訊與數據區
           ========================================= */}
        <MotionWrapper type="fadeInUp" className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-12">
          
          {/* 1. 左側：社群連結與 CTA */}
          <div className="w-full lg:w-auto space-y-5">
            <h4 className="text-[11px] tracking-[0.3em] font-bold text-slate-400">
              CONNECT WITH US
            </h4>
            
            <div className="flex gap-3 items-center flex-wrap">
                {/* 🟢 沿用 Navigation 的科技感社群按鈕 */}
                <a href="https://www.facebook.com/profile.php?id=61588071577543/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-[#1877F2] flex items-center justify-center hover:bg-blue-50 transition-all border border-slate-100 shadow-md">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://line.me/R/ti/p/@yourid" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-[#06C755] flex items-center justify-center hover:bg-green-50 transition-all border border-slate-100 shadow-md">
                  <FaLine size={26} />
                </a>
                
                <Link 
                  href="/enroll" 
                  className="ml-2 px-8 py-3.5 rounded-full text-[12px] font-bold tracking-widest text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
                >
                  <FaCalendarCheck size={14} /> 立即報名
                </Link>
            </div>
          </div>

          {/* 2. 中間：累計瀏覽 (科技感面板) */}
          <div className="flex flex-col items-center justify-center w-full lg:w-auto">
             <div className="bg-white px-6 py-3.5 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm shadow-slate-200/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                </span>
                <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em]">LIVE VIEWS</span>
                {/* 移除 Serif，改用科技感的數字顯示 */}
                <span className="text-slate-800 font-bold text-xl tracking-tight">
                    {visitCount}
                </span>
             </div>
          </div>

          {/* 3. 右側：聯絡資訊 */}
          <div className="text-left lg:text-right text-slate-500 space-y-5 w-full lg:w-auto">
            
            {/* Line 帳號資訊 */}
            <a 
              href="https://line.me/R/ti/p/@yourid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-start lg:items-end gap-1 group transition-all"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                Line 官方帳號
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-[2px] w-6 bg-blue-500/30 hidden lg:block rounded-full"></span>
                <span className="text-[12px] text-blue-600 font-bold tracking-widest bg-blue-50 px-2.5 py-1 rounded-md">
                  @YOUR_LINE_ID
                </span>
              </div>
            </a>

            {/* Email 資訊 */}
            <div className="flex flex-col items-start lg:items-end gap-1 mt-4">
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800 transition-colors duration-300">
                合作與諮詢
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-[2px] w-6 bg-blue-500/30 hidden lg:block rounded-full"></span>
                <a 
                  href="mailto:contact@zhiwang.com" 
                  className="text-[12px] text-blue-600 font-bold tracking-wider bg-blue-50 px-2.5 py-1 rounded-md hover:bg-blue-100 transition-all"
                >
                  contact@zhiwang.com
                </a>
              </div>
            </div>

            {/* 科技感小標語 */}
            <p className="text-[11px] text-slate-400 tracking-wide font-medium pt-2">
              Zero to One. AI-Powered Web Development. <br className="md:hidden" />
              Master Your Digital Assets.
            </p>
          </div>
        </MotionWrapper>

        <div className="border-t border-slate-200 my-8"></div>

        {/* --- 版權聲明 --- */}
        <MotionWrapper type="fadeInUp" className="text-center flex flex-col items-center justify-center gap-2">
          <p className="text-slate-400 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} 智網 Ai 引擎. All rights reserved.
          </p>
          <p className="text-slate-300 text-[9px] tracking-widest">
            MADE WITH AI & NEXT.JS
          </p>
        </MotionWrapper>

      </div>
    </footer>
  )
}