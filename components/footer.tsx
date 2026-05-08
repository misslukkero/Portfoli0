"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n" 

export function Footer() {
  const { t } = useI18n() 
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="font-mono text-xs text-muted-foreground">
           © {currentYear} {t.footer.designed} Daiana Senese.
          </p>
          <p className="text-xs text-muted-foreground/60">
            {t.hero.titleHighlight} 
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="uppercase tracking-wider">{t.footer.backToTop}</span>
          <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}






