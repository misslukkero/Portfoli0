"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useI18n } from "@/lib/i18n"

export function ContactSection() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const [openContact, setOpenContact] = useState<string | null>("email")
  const email = "daianasenese@gmail.com"
  const phone = "+39 3513779144"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative flex min-h-[90svh] items-center border-t border-border/60 bg-background px-6 pb-[27px] pt-[13px] text-foreground md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-5xl text-left">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase"></span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mt-4 max-w-xl">
            {t.contact.title}<span className="not-italic text-primary">{t.contact.titleHighlight}</span>.
          </h2>
        </motion.div>

        <motion.p
          className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.contact.description}
        </motion.p>

        <div className="divide-y divide-border border-y border-border">
          {[
            { id: "email", label: "Email" },
            { id: "phone", label: "Phone" },
            { id: "networks", label: t.contact.networks },
            { id: "location", label: t.contact.location },
          ].map((item) => {
            const isOpen = openContact === item.id
            return (
              <div key={item.id}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenContact(isOpen ? null : item.id)} className="group flex w-full items-center justify-between gap-6 py-5 text-left">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">{item.label}</span>
                  <span aria-hidden="true" className="font-mono text-lg text-primary">{isOpen ? "−" : "+"}</span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="pb-6 text-foreground">
                      {item.id === "email" && <button type="button" onClick={copyEmail} className="text-base transition-colors hover:text-primary">{email}{copied ? " · Copied" : ""}</button>}
                      {item.id === "phone" && <p className="text-base">{phone}</p>}
                      {item.id === "networks" && <div className="flex flex-wrap gap-x-8 gap-y-3"><a href="https://linkedin.com/in/daianasenese/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn ↗</a><a href="https://github.com/misslukkero" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub ↗</a></div>}
                      {item.id === "location" && <><p>Pesaro, Marche, Italia</p><p className="mt-1 text-sm text-muted-foreground">{t.contact.availability}</p></>}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
