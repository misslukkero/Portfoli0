"use client"

import { I18nProvider } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { SkillsSection } from "@/components/skills-section"
import { Projects } from "@/components/projects"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider>
      <Navigation />
      <main>
        <HeroSection />
        <WorkSection />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </I18nProvider>
  )
}
