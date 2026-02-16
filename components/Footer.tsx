'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-card border-t border-brand-gold/20 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-gaming font-bold text-brand-gold mb-4">Shinzo Plays</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Premium Free Fire tournament platform for competitive gaming.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-text-light mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Fair Play Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-text-light mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-text-light mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-gold/20 py-8 space-y-4">
          {/* Disclaimer */}
          <div className="bg-dark-bg/50 border border-brand-gold/20 rounded-lg p-4 text-center">
            <p className="text-xs md:text-sm text-text-muted leading-relaxed">
              <span className="font-semibold text-brand-gold">Disclaimer:</span> Shinzo Plays is a
              skill-based competitive gaming platform and not gambling. Players compete based on
              gaming skill and strategy. All transactions are secure and verified.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-text-muted text-xs md:text-sm">
            <p>
              © {currentYear} Shinzo Plays. All rights reserved. | Developed with ❤️ for Indian
              esports community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
