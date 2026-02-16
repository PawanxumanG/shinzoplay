'use client'

import { useState } from 'react'

export function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Is Shinzo Plays safe?',
      a: 'Yes, Shinzo Plays uses bank-level encryption and secure payment gateways. All transactions are protected and your personal data is never shared.',
    },
    {
      q: 'How do I join a match?',
      a: 'Install the app, add wallet balance, browse available tournaments, select your preferred match, and join instantly. You\'ll receive the room ID and password immediately.',
    },
    {
      q: 'How do I get the Room ID and password?',
      a: 'After joining a tournament, the Room ID and password are automatically provided in the app. You can copy them directly and use them in Free Fire.',
    },
    {
      q: 'How do I withdraw my money?',
      a: 'Go to your wallet, click "Withdraw", choose your preferred payment method (UPI, bank transfer, etc.), enter the amount (minimum ₹50), and confirm. Money reaches your account within 5-10 minutes.',
    },
    {
      q: 'Why is it APK and not on Play Store?',
      a: 'We\'re working on Play Store approval. Currently, we offer APK for faster updates and better features. The APK is 100% safe and verified.',
    },
    {
      q: 'What if I find a hacker in my match?',
      a: 'Report the player immediately in-app with proof. We investigate all reports within 24 hours and provide instant refunds if suspicious activity is confirmed.',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-gaming text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 slide-in-up">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-brand-gold/20 rounded-lg overflow-hidden hover:border-brand-gold/50 transition-colors"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full bg-dark-card hover:bg-dark-card/80 transition-colors p-5 md:p-6 text-left flex items-center justify-between group"
              >
                <span className="font-semibold text-text-light text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 text-brand-gold transition-transform duration-300 ${
                    expanded === i ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {expanded === i && (
                <div className="bg-dark-bg/50 border-t border-brand-gold/20 p-5 md:p-6">
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
