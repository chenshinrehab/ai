'use client'

import React, { useState } from 'react'
import { 
  FaRocket, 
  FaChartLine, 
  FaArrowRight,
  FaRobot,
  FaWrench,
  FaRotate,
  FaUser,
  FaEnvelope,
  FaLightbulb,
  FaCircleCheck,
  FaXmark
} from 'react-icons/fa6'

export default function ServicesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Google Form 提交網址
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeez9GeHp84B2AOqlxzvGCkIRA2e7yzhHtv0NcVEi4eh5Lzzw/formResponse"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formElement = e.currentTarget
    const formData = new FormData(formElement)
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    
    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      })
      setIsSuccess(true)
      formElement.reset() 
    } catch (error) {
      console.error('Submit Error:', error)
      alert("提交發生錯誤，請稍後再試。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 背景裝飾 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 pt-10 md:pt-16 relative">
        <article className="relative z-10">
          
          {/* ==========================================
              標題區塊：服務宣言
             ========================================== */}
          <div className="bg-white rounded-[2.5rem] px-0 md:px-16 py-10 md:py-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden">
            <div className="px-6 md:px-0">
              <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Professional Services
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                不只是教學，<br className="hidden md:block" />
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-teal-500">
                  更是您最強大的技術後盾
                </span>
              </h1>
              <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mb-8"></div>
              
              <p className="text-slate-500 text-[17px] md:text-xl font-medium max-w-none md:max-w-4xl mx-auto tracking-normal leading-relaxed mb-10 text-justify md:text-center">
                除了提供完善的系統教學，我們更提供一系列的實戰代工與升級服務。<br className="hidden md:block" />
                無論是舊站翻新、自動化導入還是日常維護，我們都能為您量身打造最佳解方。
              </p>
            </div>
          </div>

          {/* ==========================================
              核心內文區塊：服務項目與價格
             ========================================== */}
          <div className="mt-12 space-y-8">
            
            {/* 服務 1：陪跑專案 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mb-2 md:mb-0">
                  <FaRocket size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight text-center md:text-left">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500">
                      一對一專案陪跑 (手把手實戰)
                    </span>
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    不想自己摸索？我們提供專屬的「陪跑服務」，實際帶著你從規劃、開發到上線，全程一對一指導。<br />
                    不只是給你釣竿，我們直接帶你釣到第一條大魚，確保你的網站具備最高水準的商業轉換力。
                  </p>
                </div>
              </div>
            </div>

            {/* 服務 2：WordPress 轉換 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 mb-2 md:mb-0">
                  <FaRotate size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight text-center md:text-left">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-600 to-purple-500">
                      WordPress 舊站無痛升級 Next.js
                    </span>
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    受夠了 WordPress 的緩慢載入、外掛衝突與高昂的主機費用嗎？<br />
                    我們協助將您的舊網站資料完整搬遷，全面升級至 Next.js 現代化極速架構。保留既有 SEO 權重，同時讓網頁效能突破天際。
                  </p>
                </div>
              </div>
            </div>

            {/* 服務 3：SEO 強化建議 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 group-hover:bg-teal-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 mb-2 md:mb-0">
                  <FaChartLine size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight text-center md:text-left">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-600 to-emerald-500">
                      深度 SEO 排名優化與健檢
                    </span>
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    針對您現有的網站進行全方位健檢，找出讓搜尋排名卡關的致命傷。<br />
                    包含：導入 JSON-LD 結構化資料、Meta 標籤重構、AEO/GEO 生成式搜尋引擎優化策略，精準餵食 AI，提升自然流量。
                  </p>
                </div>
              </div>
            </div>

            {/* 服務 4：自動化流程改善 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500 group-hover:bg-purple-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0 text-purple-600 mb-2 md:mb-0">
                  <FaRobot size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight text-center md:text-left">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-pink-500">
                      店家自動化流程導入
                    </span>
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    還在人工回覆訊息、手動抄寫客戶名單，手動打報告？<br />
                    我們協助您依據店家開發出客制自動化的程式機器人，增加作業效率，大幅降低行政成本。
                  </p>
                </div>
              </div>
            </div>

            {/* 服務 5：網頁維護與維修 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 group-hover:bg-rose-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0 text-rose-600 mb-2 md:mb-0">
                  <FaWrench size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight text-center md:text-left">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-600 to-orange-500">
                      網頁故障排除與長期維護
                    </span>
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    網站突然掛掉？版面跑掉？功能異常？<br />
                    我們提供單次的技術救援，以及彈性的長期網頁維護方案。協助升級套件、監測效能，讓您的數位資產隨時保持在最健康的狀態。
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 特色標籤 */}
          <div className="flex flex-wrap justify-center gap-3 pt-12">
            {[
              '一對一指導', '無痛搬站', 'SEO 排名搶佔', '自動化營運', '技術救援', '合約透明'
            ].map((f: string, i: number) => (
              <div key={i}>
                <span className="text-[11px] md:text-xs font-bold tracking-widest text-blue-600 border border-blue-100 px-5 py-2 rounded-full bg-blue-50/50 shadow-sm hover:bg-blue-100 transition-colors cursor-default inline-block">
                  # {f}
                </span>
              </div>
            ))}
          </div>

          {/* ==========================================
              底部諮詢表單區
             ========================================== */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                準備好讓您的網站煥然一新了嗎？
              </h3>
              <p className="text-slate-500 text-sm md:text-base font-medium tracking-wide">
                填寫下方需求單，填寫後會有專人與您聯絡。
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FaUser className="text-blue-500" /> 姓名 <span className="text-red-500">*</span>
                  </label>
                  <input required type="text" name="entry.766354392" placeholder="請輸入您的真實姓名" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FaEnvelope className="text-blue-500" /> 聯絡信箱 <span className="text-red-500">*</span>
                  </label>
                  <input required type="email" name="entry.1759210350" placeholder="example@gmail.com" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FaLightbulb className="text-blue-500" /> 需求 <span className="text-red-500">*</span>
                  </label>
                  <textarea required name="entry.1137938265" rows={4} placeholder="告訴我們您的需求..." className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-[14px] font-bold tracking-[0.2em] transition-all shadow-md ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-blue-600 active:scale-95'}`}>
                  {isSubmitting ? '資料送出中...' : '提交需求單，專人聯絡'} {!isSubmitting && <FaArrowRight size={14} />}
                </button>
              </form>
            </div>
          </div>

        </article>
      </main>

      {/* 成功彈窗 */}
      {isSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-md p-8 text-center shadow-2xl relative">
            <button onClick={() => setIsSuccess(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"><FaXmark size={24} /></button>
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"><FaCircleCheck className="text-green-500" size={40} /></div>
            <h2 className="text-2xl font-bold mb-4">需求已送出！</h2>
            <p className="text-slate-600 mb-8">專人將會盡快與您聯繫。</p>
            <button onClick={() => setIsSuccess(false)} className="block w-full px-6 py-3.5 bg-slate-900 text-white rounded-xl font-bold">確定</button>
          </div>
        </div>
      )}

    </div>
  );
}