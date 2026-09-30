"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useI18n, type Locale } from "@/lib/i18n"

interface Experience {
  id: string
  title: Record<Locale, string>
  company: string
  location: string
  periodStart: string
  periodEnd?: string
  description: Record<Locale, string[]>
  tags: Record<Locale, string[]>
}

const experiences: Experience[] = [
  {
    id: "1",
    title: {
      es: "Especialista Soporte IT",
      en: "IT Support Specialist",
      it: "Specialista Supporto IT",
    },
    company: "Dev4Side Software",
    location: "Milano, Italia",
    periodStart: "Dic 2023",
    periodEnd: "Dic 2025",
    description: {
      es: [
        "Implementación de scripts PowerShell para actualización masiva de registros en SharePoint",
        "Participación en migración de datos con intervenciones en código C# y Azure DevOps",
        "Configuración técnica de tablas y relaciones en Dataverse",
        "Diagnóstico y corrección de errores de acceso en SharePoint",
        "Elaboración de guías técnicas para clientes corporativos",
      ],
      en: [
        "Implementation of PowerShell scripts for bulk record updates in SharePoint",
        "Participation in data migration with C# code interventions and Azure DevOps",
        "Technical configuration of tables and relationships in Dataverse",
        "Diagnosis and correction of access errors in SharePoint",
        "Development of technical guides for corporate clients",
      ],
      it: [
        "Implementazione di script PowerShell per l'aggiornamento massivo di record in SharePoint",
        "Partecipazione alla migrazione dei dati con interventi su codice C# e Azure DevOps",
        "Configurazione tecnica di tabelle e relazioni in Dataverse",
        "Diagnosi e correzione di errori di accesso in SharePoint",
        "Elaborazione di guide tecniche per clienti corporate",
      ],
    },
    tags: {
      es: ["PowerShell", "SharePoint", "Azure DevOps", "C#", "Dataverse"],
      en: ["PowerShell", "SharePoint", "Azure DevOps", "C#", "Dataverse"],
      it: ["PowerShell", "SharePoint", "Azure DevOps", "C#", "Dataverse"],
    },
  },
  {
    id: "2",
    title: {
      es: "Asistente Administrativa Médica",
      en: "Medical Administrative Assistant",
      it: "Assistente Amministrativa Medica",
    },
    company: "Studio Medico Dr. Raul Bacella",
    location: "Venado Tuerto, Argentina",
    periodStart: "Mar 2013",
    periodEnd: "Mar 2020",
    description: {
      es: [
        "Gestión de flujos documentales clínicos",
        "Coordinación operativa de pacientes",
        "Optimización de procesos administrativos digitales",
      ],
      en: [
        "Management of clinical document flows",
        "Operational patient coordination",
        "Optimization of digital administrative processes",
      ],
      it: [
        "Gestione dei flussi documentali clinici",
        "Coordinamento operativo dei pazienti",
        "Ottimizzazione dei processi amministrativi digitali",
      ],
    },
    tags: {
      es: ["Gestión documental", "Coordinación", "Procesos digitales"],
      en: ["Document Management", "Coordination", "Digital Processes"],
      it: ["Gestione documentale", "Coordinamento", "Processi digitali"],
    },
  }, 
  {
    id: "3",
    title: {
      es: "Instrumentista Quirúrgica",
      en: "Surgical Instrumentalist",
      it: "Strumentista Chirurgica",
    },
    company: "Sanatorio San Martin",
    location: "Venado Tuerto, Argentina",
    periodStart: "Sep 2011",
    periodEnd: "Mar 2020",
    description: {
      es: [
        "Asistencia en sala de operaciones en entornos de alta presión",
        "Atención rigurosa a protocolos de seguridad",
        "Precisión técnica en procedimientos quirúrgicos",
      ],
      en: [
        "Operating room assistance in high-pressure environments",
        "Rigorous attention to safety protocols",
        "Technical precision in surgical procedures",
      ],
      it: [
        "Assistenza in sala operatoria in ambienti ad alta pressione",
        "Rigorosa attenzione ai protocolli di sicurezza",
        "Precisione tecnica nelle procedure chirurgiche",
      ],
    },
    tags: {
      es: ["Sala de operaciones", "Protocolos", "Alta presión"],
      en: ["Operating Room", "Protocols", "High Pressure"],
      it: ["Sala operatoria", "Protocolli", "Alta pressione"],
    },
  },
]

export function WorkSection() {
  const { locale, t } = useI18n()
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  return (
    <section id="work" className="relative min-h-screen border-t border-border/60 bg-secondary/20 px-6 py-32 md:px-12 lg:px-24">
<div className="max-w-6xl">
  <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase"></span>
          <h2 className="text-4xl md:text-5xl font-serif italic mt-4">
            {t.work.title}<span className="not-italic text-primary">{t.work.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((experience, index) => {
            const isExpanded = expandedExperience === experience.id

            return (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group border border-border bg-background transition-colors hover:border-primary/60 ${isExpanded ? "md:col-span-2" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedExperience(isExpanded ? null : experience.id)}
                  className="grid w-full gap-5 p-6 text-left md:grid-cols-[1fr_auto] md:items-start md:p-8"
                >
                  <span>
                    <span className="mb-3 block font-mono text-xs text-primary">{experience.periodStart} — {experience.periodEnd || t.work.present}</span>
                    <span className="block text-xl font-medium text-foreground transition-colors group-hover:text-primary">{experience.title[locale]}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{experience.company}</span>
                  </span>
                  <span aria-hidden="true" className="font-mono text-lg text-primary">{isExpanded ? "−" : "+"}</span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-6 pb-7 pt-6 md:px-8">
                      <p className="mb-5 text-sm text-muted-foreground">{experience.location}</p>
                      <ul className="grid gap-3 md:grid-cols-2">
                        {experience.description[locale].map((item, i) => <li key={i} className="border-l border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground">{item}</li>)}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.tags[locale].map((tag) => <span key={tag} className="border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
