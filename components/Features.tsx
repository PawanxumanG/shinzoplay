'use client'

export function Features() {
  const features = [
    {
      icon: '⚔️',
      title: 'Solo Matches',
      description: 'Compete alone and earn based on your performance.',
    },
    {
      icon: '👥',
      title: 'Squad Matches',
      description: 'Team up with friends and dominate together.',
    },
    {
      icon: '🔑',
      title: 'Room ID & Password',
      description: 'Get instant access to custom rooms with unique credentials.',
    },
    {
      icon: '📸',
      title: 'Result Screenshot Verification',
      description: 'Match results are verified using uploaded result screenshots.',
    },
    {
      icon: '💳',
      title: 'Wallet Balance System',
      description: 'Manage deposits and wallet balance for matches.',
    },
    {
      icon: '💬',
      title: 'Support Chat',
      description: 'Get help from support team 24/7 via WhatsApp.',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-gaming text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Live Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 slide-in-up">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-dark-card border border-brand-gold/20 rounded-lg p-6 hover:border-brand-gold/60 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-text-light mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
