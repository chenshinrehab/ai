'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import { 
  FaRocket, 
  FaChartLine, 
  FaCubes, 
  FaArrowRight,
  FaTerminal
} from 'react-icons/fa6'

export default function CourseSyllabusPage() {
  return (
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 pt-10 md:pt-16 relative">
        <article className="relative z-10">
          
          {/* ==========================================
              標題區塊：技術宣言 (H1)
              ========================================== */}
          <div className="bg-white rounded-[2.5rem] px-6 md:px-16 py-10 md:py-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden">
            <div className="px-2 md:px-0">
              <span className="text-indigo-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Step-by-Step Masterclass
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                從零到一的架站實戰，<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
                  掌握 AI 時代的開發超能力
                </span>
              </h1>
              <div className="w-16 h-[4px] bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mx-auto mb-8"></div>
              
              <p className="text-slate-500 text-[16px] md:text-xl font-medium max-w-none md:max-w-3xl mx-auto tracking-normal leading-relaxed text-justify md:text-center">
                這不是一堂充滿艱澀理論的傳統程式課。<br className="hidden md:block" />
                我們將循序漸進，從贈送頂級架構到終端機實作，教你如何用 AI 當大腦，打造出極速、高轉換且具備完美 SEO 體質的現代化網站。
              </p>
            </div>
          </div>

          {/* ==========================================
              核心內文區塊：三大階段課程大綱
              ========================================== */}
          <div className="mt-12 space-y-10">
            
            {/* --- 階段 1：基礎架構與本地運行 (H2) --- */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all hover:shadow-md">
  {/* 左側玫瑰色裝飾條 */}
  <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 group-hover:bg-rose-600 transition-colors"></div>
  
  {/* 標題與文字區塊 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 mb-8 border-b border-slate-100 pb-0">
    <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0 text-rose-600">
      <FaTerminal size={22} />
    </div>
    <div className="w-full text-center md:text-left">
      <h2 className="text-2xl font-bold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-500 to-yellow-400">
        第一階段：網站建置與基礎架構
      </h2>
      <p className="text-rose-600/80 font-bold text-sm tracking-wide">
        從 0 到 1 的突破，打好完美地基
      </p>
      <p className="text-slate-500 mt-3 text-[15px] leading-relaxed mb-0">
        讓完全沒有基礎的學生能跑起高質量的網站，並讓已有網站的學生找到優化方向。
      </p>
    </div>
  </div>

  {/* --- 圖片展示區塊：採用統一的大圖風格 --- */}
  {/* -ml-6: 避開左側 rose-500 裝飾線，留出呼吸空間
      w-[calc(100%+3.5rem)]: 手機版視覺最大化
  */}
  <div className="relative aspect-[4/3] md:aspect-[16/9] w-[calc(100%+3.5rem)] -ml-6 md:w-full md:ml-0 -mt-4 mb-8 group-hover:scale-[1.01] transition-transform duration-300">
    
    {/* 圓角框容器：保留圓弧角設計 */}
    <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
      <Image 
        src="/images/courses/6.webp" 
        alt="第一階段：網站建置與基礎架構"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 800px"
        /* object-contain: 確保架構圖表文字完整顯示
           p-2: 讓內容不貼死圓角框，看起來更高級
        */
        className="object-contain p-2 md:p-1" 
      />
    </div>
  </div>
  {/* --- 圖片展示區塊結束 --- */}
  


              {/* 課程列表 (H3) */}
              <div className="space-y-0 pl-2 md:pl-4">
                {[
                  { 
                    title: "免費獲得價值數萬的底層架構，並學會檢測現有網站", 
                    desc: (
                      <>
                        我們已經幫你把最困難的「底層架構」寫好了（價值約 4 萬元）！只要跟著步驟複製貼上幾個指令，不懂程式也能在自己的電腦上跑出專業網站。
                        {"\n\n"}
                        如果你已經有網站，我們會教你用專屬的「網站健檢工具」一鍵找出缺點，讓你知道怎麼要求原本的網頁廠商修改。
                        {"\n\n"}
                        💡 專業技術：提供完整網站基礎架構，及分析網站的問題所在。
                        
                        {/* 🔴 新增的免費評估按鈕 */}
                        <div className="mt-4">
                          <a 
                            href="https://seo-scorer-henna.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500 text-white text-xs font-bold rounded-lg hover:bg-rose-600 transition-colors shadow-sm"
                          >
                            <FaChartLine size={12} /> 免費網站評估
                          </a>
                        </div>
                      </>
                    )
                  },
                  { 
                    title: "讓 AI 當你的專屬工程師，輕鬆客製化版面", 
                    desc: "不滿意網站的風格或排版？不用自己苦學寫程式！我們會教你如何正確地「對 AI 下指令」(Prompt)，讓 AI 乖乖聽話，幫你把網頁的頁首、選單、排版和風格改成你心中理想的樣子。\n\n💡 專業技術：如何設定頁首頁尾、如何跟 AI 溝通、逐一修改內容。" 
                  },
                  { 
                    title: "一次搞定幾百個網頁的超強效率（資料庫思維）", 
                    desc: "傳統做網頁是一頁一頁慢慢刻，非常浪費時間。這堂課會教你「套版」的聰明概念，只要在資料庫輸入你的文章或商品資料，網站就會瞬間自動生成上百個格式統一、排版漂亮的獨立網頁。\n\n💡 專業技術：生成動態網頁、做好架構、輸入資料庫自動生成上百個網頁。" 
                  },
                  { 
                    title: "讓網站變美又變快的秘訣（視覺與圖片優化）", 
                    desc: "放太多圖片會讓網站變慢、趕走客人。我們會教你如何讓系統自動幫圖片「減肥」，在保持畫質清晰的同時，讓網頁開啟速度快如閃電！我們還會加入一些滑順的進場動畫，讓你的網站看起來更有質感。\n\n💡 專業技術：網頁加入動畫、各種圖片的選擇、使用 Next Image 提升網站速度、一次將圖片大量轉檔。" 
                  },
                  { 
                    title: "正式讓全世界看見你的網站（託管部署）", 
                    desc: "做好的網站怎麼放到網路上？不用花大錢租主機！我們會教你使用免費又強大的雲端平台，讓你的心血正式上線供全世界瀏覽。\n\n💡 專業技術：將網站掛接到託管平台、將免費網站上架公開。" 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative pb-8 last:pb-0">
                    <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 text-xs font-black z-10 shadow-sm border border-rose-200">
                      {idx + 1}
                    </div>
                    {idx !== 4 && <div className="absolute left-[13px] top-7 bottom-0 w-[2px] bg-rose-50 -z-0"></div>}
                    <div className="pt-0.5">
                      <h3 className="text-[16px] font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed text-justify whitespace-pre-line"> {item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* --- 階段 2：互動功能與體驗強化 (H2) --- */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all hover:shadow-md">
  {/* 左側藍色裝飾條 */}
  <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
  
  {/* 標題與文字區塊 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 mb-8 border-b border-slate-100 pb-0">
    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
      <FaCubes size={22} />
    </div>
    <div className="w-full text-center md:text-left">
      <h2 className="text-2xl font-bold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-emerald-500 to-cyan-300">
        第二階段：互動功能與體驗強化
      </h2>
      <p className="text-blue-600/80 font-bold text-sm tracking-wide">
        樂高式開發，打造高轉換率網站
      </p>
      <p className="text-slate-500 mt-3 text-[15px] leading-relaxed mb-0">
        提供各式實用的外掛與程式碼模組，讓網站不只是「好看」，還要「好用」且具備商業功能。
      </p>
    </div>
  </div>

  {/* --- 修正後的圖片展示區塊 --- */}
  {/* 1. -ml-6: 向左移動 24px (原為 -ml-8)，這樣左側會留出約 8px 的空間，不會撞到藍色條。
      2. w-[calc(100%+3.5rem)]: 配合左移量的調整，讓右側依然能盡量貼邊。
  */}
  <div className="relative aspect-[4/3] md:aspect-[16/9] w-[calc(100%+3.5rem)] -ml-6 md:w-full md:ml-0 -mt-4 mb-8 group-hover:scale-[1.01] transition-transform duration-300">
    
    {/* 圓角框容器：保留 rounded-2xl */}
    <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
      <Image 
        src="/images/courses/7.webp" 
        alt="第二階段：互動功能與體驗強化"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-contain p-2 md:p-1" 
      />
    </div>
  </div>
  {/* --- 圖片展示區塊結束 --- */}


              {/* 課程列表 (H3) */}
              <div className="space-y-0 pl-2 md:pl-4">
                {[
                  { 
                    title: "動態展示與影音整合，打造吸睛畫面", 
                    desc: "教你輕鬆在網站加上會跑動的「最新公告」、會自動輪播的廣告圖片。如果想放宣傳影片，也會教你怎麼放入 YouTube 影片或背景動態影片，而且保證不會拖慢網頁速度。\n\n💡 專業技術：如何導入影片、設定跑馬燈或是圖片輪播功能。" 
                  },
                  { 
                    title: "讓客人幫你主動分享的行銷小工具", 
                    desc: "加上「一鍵分享」按鈕，讓看完覺得讚的訪客幫你轉發。我們還會在網站角落加上專屬的聯絡按鈕（LINE 或 Messenger 等），讓潛在客戶想找你時，隨時都能點擊對話！\n\n💡 專業技術：增加各種外掛小工具、網頁分享功能及 QR Code 自動生成。" 
                  },
                  { 
                    title: "名單收集與輕量級電商實作，網站就是你的24小時業務", 
                    desc: "教你把網站和 Google 表單連動，自動幫你收集想報名或預約的客戶名單。如果你有賣東西，我們也會教你加上簡單的「購物車」和「第三方支付按鈕」，直接在網站上做生意。\n\n💡 專業技術：串接 Google 表單、實作購物車等功能。" 
                  },
                  { 
                    title: "導入 AI 靈魂，在網站放一個免費的專屬客服機器人", 
                    desc: "利用目前最紅的大型語言模型（如 ChatGPT, Gemini）放到你的網站裡！我們會教你安全地串接這些 AI 功能，讓你的網站擁有一個 24 小時不休息的專屬機器人，隨時自動回答客人的常見問題或是做深度分析。\n\n💡 專業技術：導入 API key、將網頁導入 AI 機器人。" 
                  },
                  { 
                    title: "正式上線與破解網頁外包與 SEO 廠商的秘密", 
                    desc: "教你挑選網指，買下專屬於你的「專屬網址」（例如：yourname.com）並將程式碼放到網域中，每個月付給廠商好幾千塊的「網站維護費」，他們到底做了什麼？這堂課會帶你揭開業界秘密，並教你如何自己優化「Google 商家檔案」，讓你的店面或服務在 Google 地圖上更容易被顧客搜到！\n\n💡 專業技術：如何選購網域、購買網域及將內容架設到網域上。" 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative pb-8 last:pb-0">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-xs font-black z-10 shadow-sm border border-blue-200">
                      {idx + 1}
                    </div>
                    {idx !== 4 && <div className="absolute left-[13px] top-7 bottom-0 w-[2px] bg-blue-50 -z-0"></div>}
                    <div className="pt-0.5">
                      <h3 className="text-[16px] font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed text-justify whitespace-pre-line">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* --- 階段 3：進階 SEO 與 GEO 雙效優化 (H2) --- */}
            <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all hover:shadow-md">
  {/* 左側青色裝飾條 */}
  <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 group-hover:bg-teal-600 transition-colors"></div>
  
  {/* 標題與文字區塊 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 mb-8 border-b border-slate-100 pb-0">
    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600">
      <FaChartLine size={22} />
    </div>
    <div className="w-full text-center md:text-left">
      <h2 className="text-2xl font-bold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-400">
        第三階段：進階 SEO 與 GEO 雙效優化
      </h2>
      <p className="text-teal-600/80 font-bold text-sm tracking-wide">
        迎戰 AI 搜尋，掌握底層流量密碼
      </p>
      <p className="text-slate-500 mt-3 text-[15px] leading-relaxed mb-0">
        結合傳統搜尋引擎與最新 AI 搜尋趨勢，確保網站能被收錄、被理解，並獲得高排名。
      </p>
    </div>
  </div>

  {/* --- 修改後的圖片展示區塊 --- */}
  {/* -ml-6: 向右縮回，避開左側 teal-500 裝飾線
      w-[calc(100%+3.5rem)]: 在手機上達到最大的視覺佔比
  */}
  <div className="relative aspect-[4/3] md:aspect-[16/9] w-[calc(100%+3.5rem)] -ml-6 md:w-full md:ml-0 -mt-4 mb-8 group-hover:scale-[1.01] transition-transform duration-300">
    
    {/* 圓角框容器：保留 rounded-2xl 並維持一致的背景與邊框 */}
    <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
      <Image 
        src="/images/courses/8.webp" 
        alt="第三階段：進階 SEO 與 GEO 雙效優化"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 800px"
        /* object-contain: 確保 SEO 數據、圖表內容完整顯示
           p-2: 讓圖片內容與圓角邊界維持精緻距離
        */
        className="object-contain p-2 md:p-1" 
      />
    </div>
  </div>
  {/* --- 圖片展示區塊結束 --- */}
  

              {/* 課程列表 (H3) */}
              <div className="space-y-0 pl-2 md:pl-4">
                {[
                  { 
                    title: "寫出 Google 最愛的文章結構（贈送內容自動生成器）", 
                    desc: "不知道文章怎麼寫才會排在搜尋結果第一頁？我們會送你專屬的「寫作分析機器人」，讓 AI 自動幫你寫出既通順，又完全符合 Google 搜尋引擎喜好（SEO 標籤設定）的高品質文章，並給予最適合的關鍵字，強化EEAT等內容。\n\n💡 專業技術：提供內容撰寫機器人自動生成最符合 SEO 需要的核心內容、Headings 設定、Title 與 Description 設定、EEAT 建立。" 
                  },
                  { 
                    title: "讓你的網站在搜尋結果中更亮眼（結構化資料）", 
                    desc: "為什麼別人的搜尋結果有星星評分或漂亮的圖片？我們會教你加入特殊的「名牌」，讓 Google 更認識你。同時設定好縮圖，讓別人把你的網站貼到 LINE 或臉書時，會跑出最精美的預覽圖。\n\n💡 專業技術：建立 Schema 並導入網頁程式碼、OpenGraph 設定、Favicon 設定。" 
                  },
                  { 
                    title: "連圖片也能幫你帶來流量（網站速度極致優化）", 
                    desc: "Google 其實看不懂圖片，所以我們要教你怎麼幫圖片「貼標籤」，讓客人在搜尋圖片時也能找到你。我們還會做網站底層的大掃除，讓網站達到 Google 最嚴格的速度及格線，大幅提升網站評分。\n\n💡 專業技術：增加圖片與影片搜尋收錄、設定 Alt 與 VideoObject、加快網站速度讓網路爬蟲更喜歡、網站後臺修改。" 
                  },
                  { 
                    title: "迎戰 AI 搜尋的新時代（GEO 生成式引擎優化）", 
                    desc: "現在很多人都改用 AI 找答案了！這堂課會教你最新的「GEO」技術，在網頁內埋入證明你專業度和權威感的程式碼，確保未來不管是傳統 Google 還是新一代的 AI 搜尋引擎，都能優先推薦你的網站。\n\n💡 專業技術：讓 AI 喜歡網頁內容、加強網路框架的內部連結與外部連接、設定 Canonical 及 URL 語意化、加入 dateModified, Publisher, hasCredential, sameAs 設定。" 
                  },
                  { 
                    title: "用數據看見你的成長（收錄驗證與數據分析）", 
                    desc: "網站做好後，我們要把網站「主動提交」給 Google 確保它真的被看見。接著帶你裝上免費的追蹤工具（Google Analytics 等），讓你清楚知道每天有多少人來看、大家都在看什麼，做行銷不再像瞎子摸象！\n\n💡 專業技術：設定 robots、X-Robots 及 sitemap 讓 Google 收錄、使用 Google Search Console 查看收錄狀況並排除錯誤、分析後台關鍵字等數據。" 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative pb-8 last:pb-0">
                    <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 text-xs font-black z-10 shadow-sm border border-teal-200">
                      {idx + 1}
                    </div>
                    {idx !== 4 && <div className="absolute left-[13px] top-7 bottom-0 w-[2px] bg-teal-50 -z-0"></div>}
                    <div className="pt-0.5">
                      <h3 className="text-[16px] font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed text-justify whitespace-pre-line">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ==========================================
              底部 CTA 諮詢區 (H2)
              ========================================== */}
          <div className="mt-16 text-center border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              準備好打造你的專屬網站了嗎？
            </h2>
            <p className="text-slate-500 text-sm mb-8 font-medium tracking-wide">
              立即加入實戰課程，用最聰明的方式掌握現代化網頁開發技術。
            </p>
            <Link 
              href="/enroll" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-indigo-600 text-white rounded-full text-[14px] font-bold tracking-[0.1em] hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all shadow-md uppercase active:scale-95"
            >
              <FaRocket size={16} /> 立刻報名課程 <FaArrowRight size={14} />
            </Link>
          </div>

        </article>
      </main>
    </div>
  );
}