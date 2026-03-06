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
  FaXmark,
  FaLine
} from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function EnrollPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // 💡 已為您更新真實的 Google 表單提交網址
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/1L2kNoNHoL980bha46GTsFtA8tAy4j_Hq9reoNARVCOY/formResponse"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formElement = e.currentTarget
    const formData = new FormData(formElement)
    
    // 💡 改用 URLSearchParams 確保編碼正確，提高寫入成功率
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    
    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      })
      
      setIsSuccess(true)
      formElement.reset() // 成功後重置表單
    } catch (error) {
      console.error('Submit Error:', error)
      alert("報名送出發生錯誤，請稍後再試。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
<div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-3xl mx-auto px-6 pt-10 md:pt-16 relative z-10">
        
      <MotionWrapper type="fadeIn" className="text-center mb-10">
          <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            Join The Masterclass
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            打造你的專屬功能，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
  立刻報名實戰課程
</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl mx-auto mb-0"> {/* 減少了下邊距 mb-10 -> mb-6 */}
            填寫下方基本資料，我們將盡快與您聯繫並開通課程權限。
          </p>

          {/* 調整後的按鈕區域 */}
          <div className="flex justify-center mt-2"> {/* 減少了上邊距 mt-8 -> mt-4 */}
            <a 
              href="https://seo-scorer-henna.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-2.5 font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-500 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            > {/* py-4 -> py-2.5 讓高度變矮 */}
              免費評估我的網站
              <svg 
                className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </MotionWrapper>

        <MotionWrapper type="fadeInUp">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. 姓名 */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FaUser className="text-blue-500" /> 姓名 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required 
                    type="text" 
                    name="entry.413289709" 
                    placeholder="請輸入您的真實姓名"
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                {/* 2. 聯絡信箱 */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FaEnvelope className="text-blue-500" /> 聯絡信箱 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required 
                    type="email" 
                    name="entry.563683635" 
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
                <input 
                  required 
                  type="text" 
                  name="entry.1742848305" 
                  placeholder="例如：行銷人員、診所醫師、中小企業主..."
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>

              {/* 4. 想學的東西 */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <FaLightbulb className="text-blue-500" /> 最想學的東西 / 遇到什麼困難？ <span className="text-red-500">*</span>
                </label>
                <textarea 
                  required 
                  name="entry.172077763" 
                  rows={4}
                  placeholder="告訴我們您目前的痛點，或期望在課程中學到什麼技能..."
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                ></textarea>
              </div>
{/* 5. 臉書帳號 */}
<div className="space-y-3">
  {/* 使用 justify-start 讓標籤與按鈕緊靠 */}
  <div className="flex items-center justify-start gap-3">
    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
      臉書帳號名稱 / 連結 <span className="text-red-500">*</span>
    </label>
    {/* 臉書圖標按鈕：緊跟文字 */}
    <a 
      href="https://www.facebook.com/profile.php?id=61588071577543&locale=zh_TW" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
      title="點擊前往臉書專頁"
    >
      <FaFacebook className="text-2xl" /> 
      <span className="text-xs font-bold">點擊前往</span>
    </a>
  </div>
  <input 
    required 
    type="text" 
    name="entry.282687606" 
    placeholder="請輸入您的 FB 名稱 "
    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
  />
</div>

{/* 6. LINE 帳號 */}
<div className="space-y-3">
  {/* 使用 justify-start 讓標籤與按鈕緊靠 */}
  <div className="flex items-center justify-start gap-3">
    <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
      LINE ID / 顯示名稱 <span className="text-red-500">*</span>
    </label>
    {/* LINE 圖標按鈕：緊跟文字，強制指定綠色 */}
    <a 
      href="https://line.me/R/ti/p/@591caxlt" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
      title="點擊加入 LINE 好友"
    >
      {/* 強制 text-green-600 確保在手機端也是綠色 */}
      <FaLine className="text-2xl text-green-600 group-hover:text-white" />
      <span className="text-xs font-bold">點擊加好友</span>
    </a>
  </div>
  <input 
    required 
    type="text" 
    name="entry.2101562578" 
    placeholder="請輸入您的 LINE 名稱"
    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all"
  />
</div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mt-4">
                <p className="text-[13px] text-indigo-700 font-medium leading-relaxed">
                  🚀 <b>報名最後一步：</b><br />
                  最新課程內容與重要教學都會發布在粉專與官方 LINE！<br />
                  請確保您已完成：<br />
                  <span className="inline-block mt-1">✅ <b>按讚追蹤臉書粉專</b></span><br />
                  <span className="inline-block">✅ <b>加入官方 LINE 帳號</b></span><br />
                  <span className="block mt-2 text-red-600 font-bold underline">※ 經工作人員核對確認後，才算報名成功喔！</span>
                </p>
              </div>

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

      {isSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-md p-8 md:p-10 text-center shadow-2xl relative animate-in zoom-in-95 duration-300">
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