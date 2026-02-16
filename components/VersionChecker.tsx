'use client'

import { useEffect, useState } from 'react'

interface VersionData {
  version: string
  required: boolean
  message: string
}

export function VersionChecker() {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [versionData, setVersionData] = useState<VersionData | null>(null)

  useEffect(() => {
    const checkVersion = async () => {
      try {
        const response = await fetch('/version.json', {
          cache: 'no-store',
        })
        const data: VersionData = await response.json()
        setVersionData(data)

        // Check if current version matches (you can store current version in localStorage)
        const currentVersion = localStorage.getItem('app-version') || '0.0.0'
        if (data.required && data.version !== currentVersion) {
          setUpdateAvailable(true)
        }
      } catch (error) {
        console.error('Failed to check version:', error)
      }
    }

    checkVersion()
    // Check version every 5 minutes
    const interval = setInterval(checkVersion, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const handleUpdate = () => {
    const link = document.createElement('a')
    link.href = '/SHINZOPLAYS.apk'
    link.download = 'SHINZOPLAYS.apk'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!updateAvailable) return null

  return (
    <div className="fixed inset-0 bg-dark-bg/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-dark-card to-dark-bg border-2 border-brand-gold/50 rounded-xl p-6 md:p-8 max-w-md w-full shadow-glow-lg">
        <div className="text-center">
          <div className="text-5xl mb-4">📱</div>
          <h2 className="font-gaming font-bold text-2xl text-brand-gold mb-2">
            Update Available
          </h2>
          <p className="text-text-light mb-6 leading-relaxed">
            {versionData?.message ||
              'A new version of Shinzo Plays is available. Please update to continue playing.'}
          </p>

          <div className="bg-dark-bg/50 border border-brand-gold/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-text-muted mb-1">Latest Version</p>
            <p className="font-gaming font-bold text-brand-gold text-lg">{versionData?.version}</p>
          </div>

          <button
            onClick={handleUpdate}
            className="w-full bg-gradient-to-r from-brand-gold to-yellow-500 text-dark-bg font-gaming font-bold py-3 rounded-lg hover:shadow-glow-lg transition-all duration-300 mb-3"
          >
            Download Update
          </button>

          <button
            onClick={() => setUpdateAvailable(false)}
            className="w-full border border-brand-gold text-brand-gold font-semibold py-3 rounded-lg hover:bg-brand-gold/10 transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}
