'use client'

export function InstallationGuide() {
  const steps = [
    'Tap the "Download APK" button below',
    'Open the downloaded APK file',
    'Go to Settings → Security',
    'Enable "Allow installation from unknown sources"',
    'Tap Install',
    'Open Shinzo Plays and start playing!',
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-gaming text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Installation Guide
        </h2>

        <div className="space-y-4 mb-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 items-start bg-dark-card border border-brand-gold/20 rounded-lg p-4 md:p-6 hover:border-brand-gold/50 transition-colors slide-in-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold text-dark-bg flex items-center justify-center font-gaming font-bold text-sm glow-pulse">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="text-text-light font-semibold">{step}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Note */}
        <div className="bg-gradient-to-r from-brand-gold/20 to-yellow-500/10 border border-brand-gold/30 rounded-lg p-6 md:p-8">
          <div className="flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">🔐</span>
            <div>
              <p className="font-gaming font-bold text-brand-gold mb-2 text-base md:text-lg">
                APK Safety Notice
              </p>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Shinzo Plays APK is safe and secure. We do not access your personal
                files, photos, or sensitive data. The APK is signed and verified for
                your protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
