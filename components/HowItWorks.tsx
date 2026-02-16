'use client'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Install the App',
      description: 'Download and install Shinzo Plays APK on your Android device in seconds.',
      icon: '📥',
    },
    {
      number: '2',
      title: 'Add Wallet Balance',
      description: 'Add funds to your wallet via secure payment gateway to start playing.',
      icon: '💳',
    },
    {
      number: '3',
      title: 'Join a Match',
      description: 'Browse available tournaments and join custom rooms that match your skill level.',
      icon: '🎮',
    },
    {
      number: '4',
      title: 'Win & Withdraw',
      description: 'Win matches, earn rewards, and withdraw instantly to your UPI or bank account.',
      icon: '💰',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-gaming text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative slide-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-brand-gold/20 rounded-xl p-6 text-center hover:border-brand-gold/50 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-gold text-dark-bg rounded-full flex items-center justify-center font-gaming font-bold text-sm glow-pulse">
                  {step.number}
                </div>
                <h3 className="font-bold text-base md:text-lg text-text-light mb-2 mt-4">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 text-brand-gold/50">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
