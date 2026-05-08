"use client"

import { motion } from "framer-motion"
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

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
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

        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid md:grid-cols-[200px_1fr] gap-8 py-12 border-t border-border"
            >
              {/* Left column - Date & Location */}
              <div className="space-y-2">
                <p className="font-mono text-sm text-primary">
                  {experience.periodStart} — {experience.periodEnd || t.work.present}
                </p>
                <p className="text-sm text-muted-foreground">{experience.location}</p>
              </div>
              
              {/* Right column - Content */}
              <div>
                <h3 className="text-xl font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                  {experience.title[locale]}
                </h3>
                <p className="text-muted-foreground mb-6">{experience.company}</p>
                
                <ul className="space-y-3 mb-6">
                  {experience.description[locale].map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed pl-4 border-l border-border">
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.tags[locale].map((tag) => (
    <span
      key={tag}
      className="text-xs font-mono text-muted-foreground border border-border px-3 py-1"
    >
     {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}