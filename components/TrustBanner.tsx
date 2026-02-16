'use client'

export function TrustBanner() {
  const trustItems = [
    { icon: '🔒', text: 'Wallet Credit System' },
    { icon: '👥', text: 'Real Players' },
    { icon: '⏱️', text: 'Manual Withdrawals' },
    { icon: '📅', text: 'Daily Matches' },
  ]

  return (
    <section className="bg-gradient-to-r from-brand-gold/10 to-yellow-500/5 border-y border-brand-gold/20 py-8 md:py-12 px-4 slide-in-up">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-lg bg-dark-card/50 border border-brand-gold/20 hover:border-brand-gold/50 transition-colors"
            >
              <div className="text-2xl md:text-3xl mb-2">{item.icon}</div>
              <p className="text-sm md:text-base font-semibold text-text-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-gaming font-bold text-brand-gold">
            Growing Community
          </p>
          <p className="text-text-muted text-sm md:text-base mt-2">
            Join a growing community of Free Fire players competing in custom rooms
          </p>
        </div>
      </div>
    </section>
  )
}
