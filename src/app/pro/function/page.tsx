'use client'

import React from 'react'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { FaRocket, FaCode, FaArrowRight } from 'react-icons/fa6'
import Script from 'next/script'

// 💡 資料庫模擬 (請替換回實際資料來源)
const featureCategories: any = {}; 

export default function FeatureDetailPage() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : '';
  
  const category = featureCategories[id] || {
    title: '網站進階功能展示',
    subtitle: 'ADVANCED FEATURES',
    description: '透過 Next.js 與 AI 協作，為您的網站解鎖無限可能。',
    features: [
      { id: 'f1', name: 'AI串接功能', description: '串聯訓練好的API key，可在網站內直接運行AI，展示顧客需要的內容。', videoId: 'SKpwgkslIv0' },
      { id: 'f2', name: '首頁圖片輪撥', description: '可以展示各種商品，並可點選超連結到商品頁面', videoId: 'IoEOQL3JAlc' },
      { id: 'f3', name: '首頁跑馬燈', description: '設定重要的通知或公告，讓顧客第一時間掌握重要資訊', videoId: 'sPeH8fGKtec' },
      { id: 'f4', name: '安裝插件功能', description: '額外插入各種計算評估工具，增加用戶黏著度', videoId: 'T5F-z4LdhS0' },
      { id: 'f5', name: '動態生成網頁對應的QR code', description: '讓客戶現場想要更深入閱讀該頁面，讓馬上進入客戶手機內，只有電腦板顯示，手機版本隱藏', videoId: 'GssQiig1T6M' },
      { id: 'f6', name: '網頁間串接', description: '輕鬆設定代碼，發布文章後，自動在對應的網頁也會跑出相關卡片連結', videoId: '2izJlPjRb7Y' },
      { id: 'f7', name: '頁面分享功能', description: '客戶覺得該頁面很棒，可以直接串聯臉書或是line直接分享', videoId: '04fhqd7jw6o' },
      { id: 'f8', name: '串接google 表單功能', description: '不需要額外跳轉到其他連接，網頁內填寫完直接送出', videoId: 'kqm0wgF_jV4' }
    ]
  };

  if (!id && !category) return notFound();

  const features = category.features;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": category.title,
    "description": category.description,
    "itemListElement": features.map((feature: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "VideoObject",
        "name": feature.name,
        "description": feature.description,
        "thumbnailUrl": `https://img.youtube.com/vi/${feature.videoId}/hqdefault.jpg`,
        "embedUrl": `https://www.youtube.com/embed/${feature.videoId}`,
        "uploadDate": new Date().toISOString()
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：靜態柔光 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <Script
        id="feature-video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
        
        {/* --- 頁面標頭 --- */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            {category.subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            {category.title}
          </h1>
          <div className="w-16 h-[4px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mt-6"></div>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-6 font-medium tracking-wide">
            {category.description}
          </p>
        </div>

        {/* --- 功能展示內容區塊 --- */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature: any, idx: number) => (
            <div key={feature.id || idx}>
              <div className={`bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-blue-900/5 overflow-hidden flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* 影片區塊 */}
                <div className="w-full lg:w-1/2 relative aspect-video bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-100">
                  {feature.videoId ? (
                    <iframe 
                      src={`https://www.youtube.com/embed/${feature.videoId}?rel=0&loading=lazy`}
                      title={feature.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    ></iframe>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 z-10">
                      <FaCode size={48} className="mb-4 opacity-50" />
                      <p className="text-sm tracking-widest font-bold">VIDEO COMING SOON</p>
                    </div>
                  )}
                  {/* 模擬瀏覽器頂部 UI */}
                  <div className="absolute top-0 left-0 w-full h-6 bg-black/10 backdrop-blur-sm flex items-center px-4 gap-1.5 z-20 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                  </div>
                </div>

                {/* 文字說明區塊 */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="hidden md:flex w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 items-center justify-center mb-6">
                    <FaRocket size={24} />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                    {feature.name}
                  </h2>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 font-normal text-[15px] md:text-[16px]">
                    {feature.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="hidden md:inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest rounded-md uppercase">
                      # ADVANCED FEATURE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- 底部展示方塊 --- */}
        <div className="mt-16 md:mt-24">
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 p-8 md:p-16 text-center relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -ml-16 -mb-16 opacity-40"></div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="hidden md:flex w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 items-center justify-center mb-8">
                <FaRocket size={26} />
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                探索更多實戰案例與客製化可能
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-10 font-normal text-[16px] md:text-[18px]">
                除了上述展示的功能，不如直接到網頁體驗。
                <br className="hidden md:block" />
                看看 Next.js 如何在不同產業中發揮最強大的數位價值。
              </p>
              
              <div className="flex flex-col md:flex-row flex-wrap gap-5 w-full justify-center items-center">
                <a 
                  href="https://www.dryichen.com.tw/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-[300px] md:max-w-none md:w-auto md:min-w-[220px] py-3.5 bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl font-bold text-sm hover:from-indigo-600 hover:to-purple-600 transition-all duration-500 shadow-[0_4px_15px_rgba(79,70,229,0.3)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.5)] flex items-center justify-center gap-3 group/btn whitespace-nowrap border border-white/10"
                >
                  醫師個人網頁實測 <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="https://europe-navy.vercel.app/europe/italy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-[300px] md:max-w-none md:w-auto md:min-w-[220px] py-3.5 bg-gradient-to-br from-teal-900 to-emerald-800 text-white rounded-xl font-bold text-sm hover:from-teal-500 hover:to-emerald-400 transition-all duration-500 shadow-[0_4px_15px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3 group/btn whitespace-nowrap border border-white/10"
                >
                  歐洲包車旅遊導覽 <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://ai-zeta-dusky-55.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-[300px] md:max-w-none md:w-auto md:min-w-[220px] py-3.5 bg-gradient-to-br from-orange-900 to-red-800 text-white rounded-xl font-bold text-sm hover:from-orange-500 hover:to-pink-500 transition-all duration-500 shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.5)] flex items-center justify-center gap-3 group/btn whitespace-nowrap border border-white/10"
                >
                  網頁製作與行銷 <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <Link 
                  href="/enroll" 
                  className="w-full max-w-[300px] md:max-w-none md:w-auto md:min-w-[260px] py-3.5 bg-white text-blue-600 rounded-xl text-[14px] font-black tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.8)] flex items-center justify-center gap-3 group whitespace-nowrap border-2 border-blue-600 hover:border-transparent relative overflow-hidden active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    打造你的專屬功能 <FaRocket size={14} className="group-hover:animate-bounce" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}