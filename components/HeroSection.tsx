'use client'

export function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/SHINZOPLAYS.apk'
    link.download = 'SHINZOPLAYS.apk'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = () => {
    const url = window.location.href
    if (navigator.share) {
      navigator.share({
        title: 'Shinzo Plays',
        text: 'Join Free Fire tournaments and win real money!',
        url: url,
      })
    } else {
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg px-4 py-8 md:py-12 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center slide-in-down">
        {/* Logo */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-brand-gold/50 bg-gradient-to-br from-brand-gold/20 to-transparent p-1 glow-pulse">
            <img
              src="/logo.png"
              alt="Shinzo Plays"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-gaming text-4xl md:text-6xl font-bold mb-2 text-white drop-shadow-lg tracking-wider">
          SHINZO PLAYS
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-semibold text-brand-gold mb-4">
          Play Matches. Win Cash. Instant Withdrawals.
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
          Daily Solo & Squad tournaments. Join custom rooms and earn real rewards.
          Free Fire MAX custom room tournament platform with secure payments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleDownload}
            className="px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-500 text-dark-bg font-gaming font-bold text-lg rounded-full hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 glow-pulse"
          >
            ⬇ DOWNLOAD APK
          </button>
          <button
            onClick={handleShare}
            className="px-8 py-4 border-2 border-brand-gold text-brand-gold font-gaming font-bold text-lg rounded-full hover:bg-brand-gold/10 transition-all duration-300"
          >
            📤 SHARE
          </button>
        </div>

        {/* Trust Badge */}
        <div className="bg-dark-card/50 border border-brand-gold/20 rounded-lg p-4 md:p-6 inline-block backdrop-blur">
          <p className="text-sm md:text-base text-text-light">
            ✓ <span className="text-brand-gold font-semibold">1000+ Matches Completed</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-brand-gold"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
