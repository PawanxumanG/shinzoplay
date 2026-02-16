'use client'

export function WinnersProof() {
  return (
    <section className="py-16 md:py-24 px-4 bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-gaming text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Match Result Proof
        </h2>
        <p className="text-center text-text-muted mb-12 text-sm md:text-base">
          Winners are verified through result screenshots submitted after each match.
        </p>

        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-6 md:p-8 text-center slide-in-up">
          <p className="text-6xl mb-6">📸</p>
          <p className="text-text-light text-base md:text-lg leading-relaxed">
            <span className="font-bold text-brand-gold">Result screenshots</span> are uploaded after each match
            and verified by admin before rewards are credited to your wallet.
          </p>
        </div>
      </div>
    </section>
  )
}
