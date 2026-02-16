'use client'

import { useEffect, useState } from 'react'

export function StickyDownloadButton() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide sticky button after scrolling 300px
      setIsVisible(window.scrollY < 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/SHINZOPLAYS.apk'
    link.download = 'SHINZOPLAYS.apk'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none">
      <button
        onClick={handleDownload}
        className="pointer-events-auto px-6 py-3 md:py-4 bg-gradient-to-r from-brand-gold to-yellow-500 text-dark-bg font-gaming font-bold text-sm md:text-base rounded-full hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 glow-pulse max-w-xs w-full"
      >
        ⬇ Download APK
      </button>
    </div>
  )
}
