import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shinzo Plays – Free Fire MAX Tournament App',
  description:
    'Play custom Free Fire matches, win real cash rewards, and withdraw instantly via UPI. Join 1000+ daily tournaments with secure payments.',
  keywords: 'Free Fire, tournament, APK, Android, gaming, esports, real money',
  authors: [{ name: 'Shinzo Plays' }],
  openGraph: {
    title: 'Shinzo Plays – Free Fire Tournament App',
    description: 'Join custom tournaments and win real money instantly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shinzo Plays – Free Fire Tournament App',
    description: 'Join custom tournaments and win real money instantly',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#FFC107',
  colorScheme: 'dark',
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="format-detection"
          content="telephone=no,email=no,address=no"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="relative bg-dark-bg text-text-light">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
