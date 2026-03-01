import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundMusic from '@/components/BackgroundMusic' // 💡 引入音樂組件

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
    <html lang="zh-TW" className="scroll-smooth bg-white">
      <body className={`${inter.className} bg-white text-slate-900 antialiased min-h-screen flex flex-col`}>
        <Navigation />
        
        <main className="flex-grow bg-white">
            {children}
        </main>
        
        {/* 🟢 背景音樂組件：放在 body 內，確保跨頁面不中斷 */}
        <BackgroundMusic />
        
        <Footer />
      </body>
    </html>
  )
}