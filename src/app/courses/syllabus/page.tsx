'use client'

import React from 'react'
import Link from 'next/link'
import { 
  FaRocket, 
  FaChartLine, 
  FaShieldHalved, 
  FaCubes, 
  FaArrowRight,
  FaRobot,
  FaPaintbrush,
  FaTerminal
} from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function CourseSyllabusPage() {
  return (
    // 🟢 科技感淺灰底色與細緻網格
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 relative overflow-x-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* 🟢 背景裝飾：優化為 pointer-events-none 並簡化渲染壓力 */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] -right-32 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 pt-10 md:pt-16 relative">
        <article className="relative z-10">
          
          {/* ==========================================
              標題區塊：技術宣言（使用快速淡入）
             ========================================== */}
          <MotionWrapper 
            type="fadeIn" 
            className="bg-white rounded-[2.5rem] px-0 md:px-16 py-10 md:py-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden"
          >
            <div className="px-6 md:px-0">
              <span className="text-indigo-600 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Step-by-Step Masterclass
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                從零到一的架站實戰，<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  掌握 AI 時代的開發超能力
                </span>
              </h1>
              <div className="w-16 h-[4px] bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mx-auto mb-8"></div>
              
              <p className="text-slate-500 text-[17px] md:text-xl font-medium max-w-none md:max-w-5xl mx-auto tracking-normal leading-relaxed mb-10 text-justify md:text-center">
                這不是一堂充滿艱澀理論的傳統程式課。<br className="hidden md:block" />
                我們將循序漸進，從贈送頂級架構到終端機實作，教你如何用 AI 當大腦，打造出極速、高轉換且具備完美 SEO 體質的現代化網站。
              </p>
            </div>
          </MotionWrapper>

          {/* ==========================================
              核心內文區塊：課程大綱規劃
             ========================================== */}
          <div className="mt-12 space-y-8">
            
            {/* 階段 1：基礎架構與本地運行 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 group-hover:bg-rose-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0 text-rose-600 mb-2 md:mb-0">
                  <FaTerminal size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    第一堂：獲取百萬級架構，終端機實戰啟航
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    萬事起頭難？不用擔心，第一堂課我們直接<b>贈送價值數萬元的 Next.js 現代化基礎架構</b>。<br /><br />
                    我們將帶著你打開電腦的終端機 (Terminal)，輸入第一行指令，教你如何安裝環境配置，讓這個專業級別的網頁直接在你的電腦裡真實跑起來，享受從無到有的巨大成就感！
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* 階段 2：AI 詠唱與溝通 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 mb-2 md:mb-0">
                  <FaRobot size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    第二堂：AI 詠唱術，讓 AI 成為你的專屬工程師
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    有了基礎架構，接下來你不需要死背程式碼。我們將進入 AI 協作的核心階段。<br /><br />
                    課程會詳細介紹如何給予精準的 Prompt (提示詞)，教你如何與 AI 有效溝通，讓它幫你除錯、解釋邏輯，甚至直接幫你寫出複雜的模組代碼，讓你深刻體會「懂邏輯比懂語法更重要」。
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* 階段 3：視覺美化 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500 group-hover:bg-purple-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0 text-purple-600 mb-2 md:mb-0">
                  <FaPaintbrush size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    第三堂：視覺魔法，Tailwind CSS 網頁美化
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    有了骨架，現在我們來為網站穿上漂亮的衣服。<br /><br />
                    我們將教學如何修改顏色、排版、間距與動畫特效。透過現代化的樣式框架，帶你將生硬的程式碼轉化為具備高質感的 UI/UX 設計，讓網頁不僅能動，還能第一眼就吸引客戶的目光。
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* 階段 4：功能擴充 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600 mb-2 md:mb-0">
                  <FaCubes size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    第四堂：樂高式開發，多樣化功能實戰擴充
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    網頁必須具備實用性才能創造轉換率。<br /><br />
                    在這個階段，我們將教導如何為網頁加入各式各樣的互動功能：從平滑的圖片輪播、自動寄信的聯絡表單，到懸浮的客服按鈕。就像拼樂高一樣，把需要的功能一個個組裝進你的網站中。
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* 階段 5：SEO 與上線 */}
            <MotionWrapper type="fadeInUp" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 group-hover:bg-teal-600 transition-colors"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 mb-2 md:mb-0">
                  <FaChartLine size={20} className="md:size-[22px]" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight text-center md:text-left">
                    第五堂：終極 SEO 強化與雲端公開部署
                  </h3>
                  <p className="text-slate-600 font-normal leading-relaxed text-[15px] md:text-[16px] text-justify md:text-left w-full">
                    網站做好了，絕對不能只是一座無人知曉的孤島。<br /><br />
                    最後一堂課，我們將深潛底層，教你如何設置精準的 Meta 標籤、導入結構化資料，從根本強化 SEO 體質。最後，帶你將網站一鍵部署至雲端伺服器，並綁定專屬網域，正式向全世界公開你的數位資產！
                  </p>
                </div>
              </div>
            </MotionWrapper>

          </div>

          {/* ==========================================
              特色標籤群（使用輕量淡入）
             ========================================== */}
          <div className="flex flex-wrap justify-center gap-3 pt-12">
            {[
              '贈送 Next.js 架構', 
              '終端機環境建置', 
              'AI 提示詞工程', 
              '前端視覺美化',
              '動態功能擴充',
              'SEO 排名優化'
            ].map((f: string, i: number) => (
              <MotionWrapper key={i} type="fadeIn" delay={i * 0.05}>
                <span className="text-[11px] md:text-xs font-bold tracking-widest text-indigo-600 border border-indigo-100 px-5 py-2 rounded-full bg-indigo-50/50 shadow-sm hover:bg-indigo-100 transition-colors cursor-default inline-block">
                  # {f}
                </span>
              </MotionWrapper>
            ))}
          </div>

          {/* ==========================================
              底部 CTA 諮詢區
             ========================================== */}
          <MotionWrapper type="fadeInUp" className="mt-16 text-center border-t border-slate-200 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              準備好打造你的專屬網站了嗎？
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-medium tracking-wide">
              立即加入實戰課程，用最聰明的方式掌握現代化網頁開發技術。
            </p>
            <Link 
              href="/enroll" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-indigo-600 text-white rounded-full text-[13px] font-bold tracking-[0.2em] hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all shadow-md uppercase active:scale-95"
            >
              立刻報名課程 <FaArrowRight size={16} />
            </Link>
          </MotionWrapper>

        </article>
      </main>
    </div>
  );
}