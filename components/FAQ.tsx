'use client'

import { useState } from 'react'

export function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Is Shinzo Plays safe?',
      a: 'Yes. The app only requires basic internet access. It does not access your photos, contacts, or personal files.',
    },
    {
      q: 'How do I get Room ID and password?',
      a: 'Room ID and password appear inside the app before match time. You can copy them directly and use them in Free Fire.',
    },
    {
      q: 'How are winners decided?',
      a: 'Winners are verified using match result screenshots uploaded by the admin.',
    },
    {
      q: 'Why APK and not Play Store?',
      a: 'Currently the app is distributed via APK while development and testing continue.',
    },
    {
      q: 'How long do withdrawals take?',
      a: 'After match completion and admin verification, withdrawals are processed manually. Usually within a few hours.',
    },
    {
      q: 'What if I have issues with a match?',
      a: 'Contact support immediately via WhatsApp. Our team investigates all issues and provides refunds if needed.',
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
