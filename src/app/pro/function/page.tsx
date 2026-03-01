'use client'

import React from 'react'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { FaRocket, FaCode, FaArrowRight } from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'
import Script from 'next/script'

// 💡 假設你將原本的 europeCountries 換成了網站功能的資料庫
// import { featureCategories } from '@/data/features' 
// 這裡暫時用 any 模擬資料，請替換回你實際的資料來源
const featureCategories: any = {}; 

export default function FeatureDetailPage() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : '';
  
  // 💡 讀取分類資料 (請替換為你的實際資料庫變數)
  const category = featureCategories[id] || {
    title: '網站進階功能展示',
    subtitle: 'ADVANCED FEATURES',
    description: '透過 Next.js 與 AI 協作，為您的網站解鎖無限可能。',
    features: [
      {
        id: 'f1',
        name: 'AI串接功能',
        description: '串聯訓練好的API key，可在網站內直接運行AI，展示顧客需要的內容。',
        videoId: '您的YouTube影片ID_1' // 💡 填入 YouTube 影片 ID
      },
      {
        id: 'f2',
        name: '首頁圖片輪撥',
        description: '可以展示各種商品，並可點選超連結到商品頁面',
        videoId: '您的YouTube影片ID_2'
      },
      {
        id: 'f3',
        name: '首頁跑馬燈',
        description: '設定重要的通知或公告，讓顧客第一時間掌握重要資訊',
        videoId: '您的YouTube影片ID_2'
      },
      {
        id: 'f4',
        name: '安裝插件功能',
        description: '額外插入各種計算評估工具，增加用戶黏著度',
        videoId: '您的YouTube影片ID_2'
      },
      {
        id: 'f5',
        name: '動態生成網頁對應的QR code',
        description: '讓客戶現場想要更深入閱讀該頁面，讓馬上進入客戶手機內',
        videoId: '您的YouTube影片ID_2'
      },
      {
        id: 'f6',
        name: '網頁間串接',
        description: '輕鬆設定代碼，發布文章後，對應的網頁也會跑出相關卡片連結',
        videoId: '您的YouTube影片ID_2'
      },
      {
        id: 'f7',
        name: '頁面分享功能',
        description: '客戶覺得該頁面很棒，可以直接串聯臉書或是line直接分享',
        videoId: '您的YouTube影片ID_2'
      },
      {
        id: 'f8',
        name: '串接google 表單功能',
        description: '不需要額外跳轉到其他連接，網頁內填寫完直接送出',
        videoId: '您的YouTube影片ID_2'
      }
    ]
  };

  if (!id && !category) return notFound();

  const features = category.features;

  // ==========================================
  // 💡 建立結構化資料 (Schema.org) - 改為 VideoObject
  // ==========================================
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
        // 自動抓取 YouTube 預設縮圖作為 Schema 縮圖
        "thumbnailUrl": `https://img.youtube.com/vi/${feature.videoId}/hqdefault.jpg`,
        "embedUrl": `https://www.youtube.com/embed/${feature.videoId}`,
        "uploadDate": new Date().toISOString() // 建議如果資料庫有建檔日期可以替換此處
      }
    }))
  };

  return (
    // 🟢 科技感淺灰底色與細緻網格 (與首頁風格統一)
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾光暈 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      {/* 💡 插入 JSON-LD Schema (支援 VideoObject) */}
      <Script
        id="feature-video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
        
        {/* ==========================================
            頁面標頭
           ========================================== */}
        <MotionWrapper type="fadeInUp" className="text-center mb-16 space-y-3">
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
        </MotionWrapper>

        {/* ==========================================
            功能展示內容區塊 (包含 YouTube 影片)
           ========================================== */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature: any, idx: number) => (
            <MotionWrapper key={feature.id || idx} type="fadeInUp">
              
              {/* 🟢 卡片式設計，並保留左右交錯的排版 (idx % 2 === 1 反轉) */}
              <div className={`bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 overflow-hidden flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* 左側/上側：YouTube 影片區塊 */}
                <div className="w-full lg:w-1/2 relative aspect-video bg-slate-900 group overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100">
                  {/* 💡 嵌入 YouTube 影片 */}
                  {feature.videoId ? (
                    <iframe 
                      src={`https://www.youtube.com/embed/${feature.videoId}?rel=0`}
                      title={feature.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    ></iframe>
                  ) : (
                    // 影片未填寫時的預設佔位符
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                      <FaCode size={48} className="mb-4 opacity-50" />
                      <p className="text-sm tracking-widest font-bold">VIDEO COMING SOON</p>
                    </div>
                  )}
                  {/* 模擬瀏覽器頂部 UI (增加科技感，可選保留) */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-black/40 backdrop-blur-md flex items-center px-4 gap-2 z-20 pointer-events-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* 右側/下側：文字說明 */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                  {/* 裝飾性 Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <FaRocket size={24} />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                    {feature.name}
                  </h2>
                  
                  {/* 🟢 改為現在的 text-slate-600 乾淨排版 */}
                  <p className="text-slate-600 leading-relaxed mb-6 font-normal text-[15px] md:text-[16px] text-justify md:text-left">
                    {feature.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest rounded-md uppercase">
                      # ADVANCED FEATURE
                    </span>
                  </div>
                </div>

              </div>
            </MotionWrapper>
          ))}
        </div>


{/* 🟢 「想看更多」展示方塊：純文字滿版設計，並加入上方間距 mt-16 */}
<MotionWrapper type="fadeInUp" className="mt-16 md:mt-24">
  <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-blue-900/5 p-8 md:p-16 text-center relative overflow-hidden group">
    
    {/* 背景裝飾：淡淡的科技感光暈 */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-60"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -ml-16 -mb-16 opacity-60"></div>

    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      {/* 裝飾性 Icon */}
      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shadow-sm">
        <FaRocket size={26} />
      </div>
      
      <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
        探索更多實戰案例與客製化可能
      </h2>
      
      <p className="text-slate-600 leading-relaxed mb-10 font-normal text-[16px] md:text-[18px]">
        除了上述展示的功能，不如直接到網頁體驗。
        <br className="hidden md:block" />
        點擊下方連結，看看 Next.js 如何在不同產業中發揮最強大的數位價值。
      </p>
      
      {/* 連結按鈕組 */}
      <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
        <a 
          href="https://www.dryichen.com.tw/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-3 group/btn"
        >
          醫師個人網頁實測 <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
        <a 
          href="https://europe-navy.vercel.app/europe/italy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-3 group/btn"
        >
          歐洲包車旅遊導覽 <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>

        <a 
          href="/booking" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all shadow-md uppercase active:scale-95"
        >
          打造你的專屬功能 <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
</MotionWrapper>


      </main>
    </div>
  )
}