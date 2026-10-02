"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n, localeNames, type Locale } from "@/lib/i18n"

interface NavItem {
 labelKey: "about" | "experience" | "skills" | "projects" | "contact"
  id: string
  }

const navItems: NavItem[] = [
  { id: "about", labelKey: "about" },
  { id: "work", labelKey: "experience" },
  { id: "skills", labelKey: "skills" },
  { id: "projects", labelKey: "projects" },
  { id: "contact", labelKey: "contact" },
]

const progressItems = [
  { id: "about", number: "01", key: "who" },
  { id: "work", number: "02", key: "from" },
  { id: "skills", number: "03", key: "know" },
  { id: "projects", number: "04", key: "build" },
  { id: "contact", number: "05", key: "next" },
] as const

function ProgressNavigation({ activeSection, onNavigate, labels }: { activeSection: string; onNavigate: (id: string) => void; labels: Record<(typeof progressItems)[number]["key"], string> }) {
  return (
    <aside aria-label="Page progress" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block lg:right-8">
      <nav aria-label="Navigate chapters" className="flex flex-col items-center gap-4 rounded-full border border-border/70 bg-background/90 px-2 py-3 shadow-sm backdrop-blur-sm">
        {progressItems.map((item) => {
          const isActive = item.id === activeSection
          return (
            <button key={item.id} type="button" onClick={() => onNavigate(item.id)} aria-label={`${item.number} ${labels[item.key]}`} aria-current={isActive ? "location" : undefined} className="group relative flex size-5 items-center justify-center">
              <span className={`size-2 rounded-full border transition-all ${isActive ? "border-primary bg-primary ring-4 ring-primary/15" : "border-muted-foreground/60 bg-background group-hover:border-primary group-hover:bg-primary/30"}`} />
              <span role="tooltip" className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-background px-3 py-2 font-mono text-[10px] tracking-[0.14em] text-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">{item.number} · {labels[item.key]}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export function Navigation() {
  const { locale, setLocale, t } = useI18n()
  const [activeSection, setActiveSection] = useState("about")
  const [isScrolled, setIsScrolled] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = progressItems.map((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return { id: item.id, top: rect.top }
        }
        return { id: item.id, top: Infinity }
      })

      const current = sections.reduce((closest, section) => {
        if (section.top <= 150 && section.top > closest.top - 150) {
          return section
        }
        return closest
      }, sections[0])

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <ProgressNavigation activeSection={activeSection} onNavigate={scrollTo} labels={t.chapters} />
      <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md" : ""
      }`}
    >
      <nav className="px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          PORTFOLIO 
        </button>

        {/* Desktop nav - vertical numbers on the side */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group flex items-center gap-2 text-sm"
            >
              <span className={`font-mono text-xs transition-colors ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}>
              </span>
              <span className={`transition-colors ${
                activeSection === item.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
              }`}>
                {t.nav[item.labelKey as keyof typeof t.nav]}
                </span>
              
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {locale}
            </button>
            
            <AnimatePresence>
              {langMenuOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-3 bg-card border border-border overflow-hidden z-50 min-w-[100px]"
                  >
                    {(Object.keys(localeNames) as Locale[]).map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocale(loc)
                          setLangMenuOpen(false)
                        }}
                        className={`w-full px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-left hover:bg-secondary transition-colors ${
                          locale === loc ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      </motion.header>
    </>
  )
}
