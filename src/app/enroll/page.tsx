'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaLightbulb,
  FaFacebook,
  FaCircleCheck,
  FaXmark
} from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function EnrollPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // 💡 請將下方的 FORM_ID 替換為您的真實 Google 表單 ID
  // 例如：1FAIpQLScXXXXXXX_XXXXXXXXXXXXXXXX
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/您的_FORM_ID_請替換到這裡/formResponse"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      // 使用 no-cors 模式發送 POST 請求，這樣就不會跳轉到 Google 表單的完成頁面
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })
      // 成功後顯示彈出視窗
      setIsSuccess(true)
    } catch (error) {
      console.error('Submit Error:', error)
      alert("報名送出發生錯誤，請稍後再試。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-3xl mx-auto px-6 pt-10 md:pt-16 relative z-10">
        
        {/* ==========================================
            標題區塊
           ========================================== */}
        <MotionWrapper type="fadeIn" className="text-center mb-10">
          <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            Join The Masterclass
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            打造你的專屬功能，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              立刻報名實戰課程
            </span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            填寫下方基本資料，我們將盡快與您聯繫並開通課程權限。
          </p>
        </MotionWrapper>

        {/* ==========================================
            報名表單區塊
           ========================================== */}
        <MotionWrapper type="fadeInUp">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden">
            
            {/* 裝飾光暈 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. 姓名 */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FaUser className="text-blue-500" /> 姓名 <span className="text-red-500">*</span>
                  </label>
                  {/* 💡 請將 name="entry.1111111" 替換為您的 Google 表單真實 entry 號碼 */}
                  <input 
                    required 
                    type="text" 
                    name="entry.1111111" 
                    placeholder="請輸入您的真實姓名"
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                {/* 2. 聯絡信箱 */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FaEnvelope className="text-blue-500" /> 聯絡信箱 <span className="text-red-500">*</span>
                  </label>
                  {/* 💡 請替換 entry */}
                  <input 
                    required 
                    type="email" 
                    name="entry.2222222" 
                    placeholder="example@gmail.com"
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                  <p className="text-[11px] text-slate-500 pl-1">※ 必填，才能把您加入課程與分享講義檔案喔！</p>
                </div>
              </div>

              {/* 3. 職業類別 */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <FaBriefcase className="text-blue-500" /> 職業類別 <span className="text-red-500">*</span>
                </label>
                {/* 💡 請替換 entry */}
                <input 
                  required 
                  type="text" 
                  name="entry.3333333" 
                  placeholder="例如：行銷人員、診所醫師、中小企業主..."
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>

              {/* 4. 想學的東西 */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <FaLightbulb className="text-blue-500" /> 最想學的東西 / 遇到什麼困難？ <span className="text-red-500">*</span>
                </label>
                {/* 💡 請替換 entry */}
                <textarea 
                  required 
                  name="entry.4444444" 
                  rows={4}
                  placeholder="告訴我們您目前的痛點，或期望在課程中學到什麼技能..."
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                ></textarea>
              </div>

              {/* 5. 臉書帳號 */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <FaFacebook className="text-blue-500" /> 臉書帳號名稱 / 連結 <span className="text-red-500">*</span>
                </label>
                {/* 💡 請替換 entry */}
                <input 
                  required 
                  type="text" 
                  name="entry.5555555" 
                  placeholder="請輸入您的 FB 名稱或個人主頁網址"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 mt-2">
                  <p className="text-[12px] text-indigo-700 font-medium leading-relaxed">
                    🚀 <b>重要提醒：</b>最新課程內容跟教學都會發布在粉專上！<br />
                    我們需要核對您是否有按讚追蹤，確認完成後才算報名成功喔！
                  </p>
                </div>
              </div>

              {/* 提交按鈕 */}
              <div className="pt-6 border-t border-slate-100">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-[14px] font-bold tracking-[0.2em] transition-all shadow-md uppercase
                    ${isSubmitting 
                      ? 'bg-slate-400 text-white cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-indigo-600 active:scale-[0.98]'
                    }
                  `}
                >
                  {isSubmitting ? '資料送出中...' : '確認送出報名表'} 
                  {!isSubmitting && <FaArrowRight size={14} />}
                </button>
              </div>

            </form>
          </div>
        </MotionWrapper>

      </main>

      {/* ==========================================
          報名成功彈出視窗 (Modal)
         ========================================== */}
      {isSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-md p-8 md:p-10 text-center shadow-2xl relative animate-in zoom-in-95 duration-300">
            {/* 關閉按鈕 */}
            <button 
              onClick={() => setIsSuccess(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <FaXmark size={24} />
            </button>
            
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCircleCheck className="text-green-500" size={40} />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
              報名資料已送出！
            </h2>
            <p className="text-slate-600 font-normal leading-relaxed mb-8">
              感謝您的填寫。請務必確認您已按讚追蹤我們的臉書粉專，我們會盡快審核並透過 Email 發送課程通知與相關檔案給您。
            </p>

            <Link 
              href="/"
              className="block w-full px-6 py-3.5 bg-slate-900 text-white rounded-xl font-bold tracking-widest hover:bg-blue-600 transition-colors"
            >
              回首頁
            </Link>
          </div>
        </div>
      )}

    </div>
  )
}