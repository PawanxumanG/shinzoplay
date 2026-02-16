'use client'

import { HeroSection } from '@/components/HeroSection'
import { TrustBanner } from '@/components/TrustBanner'
import { HowItWorks } from '@/components/HowItWorks'
import { InstallationGuide } from '@/components/InstallationGuide'
import { WinnersProof } from '@/components/WinnersProof'
import { Features } from '@/components/Features'
import { WithdrawalSection } from '@/components/WithdrawalSection'
import { FAQ } from '@/components/FAQ'
import { Support } from '@/components/Support'
import { Footer } from '@/components/Footer'
import { VersionChecker } from '@/components/VersionChecker'
import { StickyDownloadButton } from '@/components/StickyDownloadButton'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBanner />
      <HowItWorks />
      <InstallationGuide />
      <WinnersProof />
      <Features />
      <WithdrawalSection />
      <FAQ />
      <Support />
      <Footer />
      <VersionChecker />
      <StickyDownloadButton />
    </>
  )
}
