import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundMusic from '@/components/BackgroundMusic'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://www.dryichen.com.tw'

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '智網Ai引擎',
    template: '%s | 智網Ai引擎'
  },
  description: '從零到一，加速排名登頂，精準獲客',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 🟢 關鍵：在 html 層級就鎖死水平溢出
    <html lang="zh-TW" className="scroll-smooth bg-white overflow-x-hidden">
      <body className={`${inter.className} bg-white text-slate-900 antialiased min-h-screen flex flex-col overflow-x-hidden w-full relative`}>
        <Navigation />
        
        {/* 🟢 main 容器加入 w-full 與 relative，穩定動畫參考座標 */}
        <main className="flex-grow bg-white w-full relative overflow-x-hidden pt-32 md:pt-40">
            {children}
        </main>
        
        <BackgroundMusic />
        
        <Footer />
      </body>
    </html>
  )
}