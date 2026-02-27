'use client'

import React from 'react'
import * as Fa from "react-icons/fa";

export default function BookingPage() {
  const webBookingUrl = 'https://reg.forcestar.com.tw/appointment/7/reserve'

  return (
    <div className="flex-grow pt-0 pb-12 px-4 bg-white min-h-screen text-slate-900">
      <main className="max-w-5xl mx-auto py-12">
        
        {/* 標題區 */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              馬上預約 <span className="text-slate-400 text-lg font-normal ml-2"></span>
            </h1>
          </div>
          
          <p className="text-slate-600 text-lg max-w-2xl">
            為了節省您寶貴的等待時間，建議多加利用網路掛號、手機 App 或 Line 官方帳號進行預約。
          </p>

        </div>

        {/* 網路掛號區塊 */}
        <div className="mb-10 w-full">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-200">
                       <Fa.FaGlobe size={28} className="text-slate-700" />
                    </div>
                    <div>
                       <h2 className="text-2xl font-bold text-slate-900 mb-1">網路掛號系統</h2>
                       <p className="text-slate-600">直接點擊即可進行預約。</p>
                    </div>
                 </div>

                 <a 
                   href= "https://www.spongebobmovie.tw/home"
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="whitespace-nowrap px-8 py-4 bg-slate-900 text-white text-lg rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2 active:scale-95" >
                   <Fa.FaMousePointer /> 立即前往預約
                 </a>
              </div>
            </div>
        </div>

        {/* APP 與 Line 列表 */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Line Block */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:border-slate-400 transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <Fa.FaLine size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Line 官方帳號</h3>
            <p className="text-slate-500 text-sm mb-6">加入好友，一鍵預約</p>
            
            <div className="p-2 bg-white rounded-xl mb-6 border border-slate-100 shadow-sm">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://page.line.me/554cchde" 
                  className="w-32 h-32 object-contain" 
                  alt=""
                />
            </div>
            
            <a 
              href="https://page.line.me/554cchde" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800"
            >

              <Fa.FaUserPlus size={18} /> 加入好友
            </a>
          </div>

          {/* iOS Block */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:border-slate-400 transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              {/* 修改點：加上 Fa. */}
              <Fa.FaApple size={32} className="text-slate-900" />
            </div>
            <h3 className="text-xl font-bold mb-2">iOS App</h3>
            <p className="text-slate-500 text-sm mb-6">iPhone 用戶專用</p>
            
            <div className="p-2 bg-white rounded-xl mb-6 border border-slate-100 shadow-sm">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com/tw/app/line/id443904275" 
                  className="w-32 h-32 object-contain" 
                  alt=""
                />
            </div>
            
            <a 
              href="https://apps.apple.com/tw/app/line/id443904275" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800"
            >
              <Fa.FaDownload size={16} /> 點擊下載
            </a>
          </div>

          {/* Android Block */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:border-slate-400 transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <Fa.FaAndroid size={32} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Android App</h3>
            <p className="text-slate-500 text-sm mb-6">安卓手機用戶專用</p>
            
            <div className="p-2 bg-white rounded-xl mb-6 border border-slate-100 shadow-sm">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=jp.naver.line.android&pcampaignid=web_share" 
                  className="w-32 h-32 object-contain" 
                  alt=""
                />
            </div>
            
            <a 
              href="https://play.google.com/store/apps/details?id=jp.naver.line.android&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800"
            >
              <Fa.FaDownload size={16} /> 點擊下載
            </a>
          </div>

        </div>
      </main>
    </div>
  )
}