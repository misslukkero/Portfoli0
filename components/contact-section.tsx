"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useI18n } from "@/lib/i18n"

export function ContactSection() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const email = "daianasenese@gmail.com"
  const phone = "+39 3513779144"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase"></span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mt-4 max-w-xl">
            {t.contact.title}<span className="not-italic text-primary">{t.contact.titleHighlight}</span>.
          </h2>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg max-w-xl mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.contact.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Columna Izquierda: Email y Phone */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-10"
          >
            {/* Email */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Email</p>
              <button onClick={copyEmail}
                className="group flex items-center gap-2 border-b border-transparent group-hover:border-primary pb-1 transition-colors">
                <span className="text-foreground">{email}</span>
                <motion.span
                  animate={{ opacity: copied ? 0 : 1 }}
                  className="text-muted-foreground group-hover:text-primary"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </motion.span>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-primary"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.span>
                )}
              </button>
            </div>
            {/* Phone */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Phone</p>
              <p className="text-foreground">{phone}</p>
            </div>

          </motion.div>
          {/* Columna Derecha: Redes y Ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Links */}
{/* Links */}
<div className="flex flex-col gap-6"> 
  <div>
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
      {t.contact.networks}
    </p>
    <div className="flex flex-col gap-3"> {/* Contenedor para los enlaces individuales */}
      
      {/* LinkedIn */}
      <a href="https://linkedin.com/in/daianasenese/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
      >
        <span>LinkedIn</span>
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>

      {/* GitHub */}
      <a href="https://github.com/misslukkero" 
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
      >
        <span>GitHub</span>
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>

    </div>
  </div>
</div>
            {/* Ubicación */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {t.contact.location}
              </p>
              <p className="text-foreground">Pesaro, Marche, Italia</p>
              <p className="text-muted-foreground text-sm mt-1">{t.contact.availability}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
