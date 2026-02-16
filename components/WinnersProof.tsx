'use client'

import { useState } from 'react'

export function WinnersProof() {
  const [winners] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611532736576-6b16e2b50449?w=400&h=500&fit=crop',
      title: 'Squad Tournament Winner',
      amount: '₹5,000',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=500&fit=crop',
      title: 'Solo Match Victory',
      amount: '₹2,500',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1609710228159-0da9b85aaf00?w=400&h=500&fit=crop',
      title: 'Weekly Leaderboard',
      amount: '₹10,000',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1538481143235-405ba7bef122?w=400&h=500&fit=crop',
      title: 'Monthly Grand Prize',
      amount: '₹25,000',
    },
  ])

  const [scrollPos, setScrollPos] = useState(0)

  return (
    <section className="py-16 md:py-24 px-4 bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-gaming text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Recent Winners & Payouts
        </h2>
        <p className="text-center text-text-muted mb-12 text-sm md:text-base">
          Real players, real winnings. All withdrawals verified and instant.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 slide-in-up">
          {winners.map((winner) => (
            <div
              key={winner.id}
              className="group cursor-pointer rounded-lg overflow-hidden border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300"
            >
              <div className="relative h-56 md:h-64 overflow-hidden bg-dark-card">
                <img
                  src={winner.image}
                  alt={winner.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 bg-gradient-to-br from-dark-card to-dark-bg">
                <p className="text-sm text-text-muted mb-1">{winner.title}</p>
                <p className="text-lg md:text-xl font-gaming font-bold text-brand-gold">
                  {winner.amount}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-6 md:p-8 text-center">
          <p className="text-text-light text-base md:text-lg leading-relaxed">
            <span className="font-bold text-brand-gold">All winnings are credited instantly</span> to
            your wallet and withdrawable via UPI, bank transfer, or mobile wallets.
          </p>
        </div>
      </div>
    </section>
  )
}
