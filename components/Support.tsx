'use client'

export function Support() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '918888888888' // Replace with actual WhatsApp number
    const message = 'Hi! I need help with Shinzo Plays.'
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-dark-bg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-6 text-white">
          Need Help?
        </h2>

        <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-brand-gold/20 rounded-xl p-8 md:p-10 mb-8 slide-in-up">
          <div className="text-5xl mb-6">💬</div>
          <h3 className="font-bold text-xl md:text-2xl text-text-light mb-4">
            Contact Support
          </h3>
          <p className="text-text-muted mb-8 leading-relaxed">
            Our support team is available 24/7 to help you with any questions or issues.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold to-yellow-500 text-dark-bg font-gaming font-bold px-8 py-4 rounded-full hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 glow-pulse"
          >
            <span className="text-xl">💬</span>
            Chat on WhatsApp
          </button>

          <div className="mt-8 pt-8 border-t border-brand-gold/20 space-y-2 text-text-muted text-sm md:text-base">
            <p>
              <span className="font-semibold text-text-light">Response Time:</span> Under 5 minutes
            </p>
            <p>
              <span className="font-semibold text-text-light">Support Hours:</span> 10 AM – 11 PM IST
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-left bg-dark-card/50 border border-brand-gold/20 rounded-lg p-6">
          <div className="text-center">
            <p className="text-2xl mb-2">📧</p>
            <p className="text-xs text-text-muted">Email Support</p>
            <p className="text-sm font-semibold text-text-light">support@shinzoplays.com</p>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-2">🎮</p>
            <p className="text-xs text-text-muted">Discord Community</p>
            <p className="text-sm font-semibold text-brand-gold">Join Server</p>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-2">📱</p>
            <p className="text-xs text-text-muted">Follow Us</p>
            <p className="text-sm font-semibold text-text-light">@shinzoplays</p>
          </div>
        </div>
      </div>
    </section>
  )
}
