import BlobBackground from '@/components/BlobBackground'
import TopAppBar from '@/components/TopAppBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import InternetIdentity from '@/components/InternetIdentity'
import CurrentFocus from '@/components/CurrentFocus'
import VibeSection from '@/components/VibeSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-md-background text-md-on-surface overflow-x-hidden">
      <BlobBackground />
      <TopAppBar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <InternetIdentity />
      <CurrentFocus />
      <VibeSection />
      <Footer />
    </main>
  )
}
