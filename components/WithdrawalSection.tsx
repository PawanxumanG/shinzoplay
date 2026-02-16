'use client'

export function WithdrawalSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-dark-bg">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-brand-gold/20 to-yellow-500/10 border-2 border-brand-gold/40 rounded-xl p-8 md:p-12 slide-in-up">
          <div className="text-center">
            <div className="text-6xl mb-6">💸</div>
            <h2 className="font-gaming text-3xl md:text-4xl font-bold text-brand-gold mb-4">
              Wallet Withdrawals
            </h2>
            <p className="text-text-light text-base md:text-lg leading-relaxed mb-8">
              After match completion, winners are verified and rewards are credited to in-app wallet.
              You can request withdrawal using UPI from the wallet section.
            </p>

            <div className="bg-dark-card/50 border border-brand-gold/20 rounded-lg p-6 inline-block mb-8">
              <p className="text-text-muted text-sm mb-1">Minimum Withdrawal</p>
              <p className="font-gaming text-3xl font-bold text-brand-gold">₹50</p>
            </div>

            <div className="space-y-3 text-left bg-dark-card/30 border border-brand-gold/20 rounded-lg p-6 md:p-8">
              <h3 className="font-bold text-brand-gold text-lg mb-4">Withdrawal Details:</h3>
              <div className="space-y-3 text-text-light text-sm md:text-base">
                <div>
                  <p className="font-semibold text-text-light">Minimum Withdrawal: ₹50</p>
                </div>
                <div>
                  <p className="font-semibold text-text-light">Processing Time: Usually within a few hours</p>
                  <p className="text-text-muted text-xs mt-1">After admin verification of match results</p>
                </div>
                <div className="pt-3 border-t border-brand-gold/20">
                  <p>✓ UPI (Google Pay, PhonePe, Paytm)</p>
                  <p className="text-text-muted text-xs">Bank details verified from your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
