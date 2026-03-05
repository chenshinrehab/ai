// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // 確保字體下載完前先用系統字體顯示，避免白屏
})

const SITE_URL = 'https://www.dryichen.com.tw' // 建議改為你的智網網址

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '智網Ai引擎 | AI 時代的流量革命',
    template: '%s | 智網Ai引擎'
  },
  description: '從零到一，透過 Next.js 與 AI 技術加速排名登頂，奪回數位時代的流量掌控權。',
  // 加入以下醫師版有的優化
  alternates: { canonical: SITE_URL },
  icons: { icon: '/favicon.svg' },
  // --- 新增 OG Image 設定 ---
  openGraph: {
    title: '智網Ai引擎 | AI 時代的流量革命',
    description: '從零到一，透過 Next.js 與 AI 技術加速排名登頂，奪回數位時代的流量掌控權。',
    url: SITE_URL,
    siteName: '智網Ai引擎',
    images: [
      {
        url: '/og-image.webp', // 圖片請放在 public/og-image.jpg
        width: 1200,
        height: 630,
        alt: '智網Ai引擎 - AI 時代的流量革命',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '智網Ai引擎 | AI 時代的流量革命',
    description: '從零到一，透過 Next.js 與 AI 技術加速排名登頂，奪回數位時代的流量掌控權。',
    images: ['/og-image.jpg'],
  },
  // --- 設定結束 ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <head>
        {/* 1. 加速外部連線 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 2. 針對智網的結構化數據 (SEO 關鍵) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: '智網Ai引擎',
              description: '專業 AI SEO 優化與 Next.js 網頁開發服務',
              url: SITE_URL,
            }),
          }}
        />

        {/* 3. 基礎 CSS 補強，減少渲染閃爍 */}
        <style>{`
          img { height: auto; max-width: 100%; }
          .overflow-x-clip { overflow-x: clip; } /* 現代瀏覽器更推薦用 clip 代替 hidden */
        `}</style>
      </head>
      
      <body className={`${inter.className} bg-white text-slate-900 antialiased min-h-screen flex flex-col w-full relative overflow-x-hidden`}>
        <Navigation />
        
        {/* 減少一點頂部內距，讓 LCP (最大內容渲染) 更快出現 */}
        <main className="flex-grow bg-white w-full relative pt-24 md:pt-32">
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}