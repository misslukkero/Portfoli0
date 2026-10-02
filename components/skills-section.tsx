"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useI18n, type Locale } from "@/lib/i18n"

interface SkillCategory {
  id: string
  titleKey: "dev" | "cloud" | "infra" | "profskills"
  skills: {
    name: string
    description: Record<Locale, string>
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "dev",
    titleKey: "dev",
    skills: [
      {
        name: "Languages & Frameworks",
        description: {
          es: "Estudio activo de C# / .NET; experiencia práctica con TypeScript, Next.js y bases de JSON.",
          en: "Active study of C# / .NET; practical experience with TypeScript, Next.js, and JSON foundations.",
          it: "Studio attivo di C# / .NET; esperienza pratica con TypeScript, Next.js e basi di JSON.",
        },
      },
      {
        name: "Strumenti di Sviluppo",
        description: {
          es: "Visual Studio, Visual Studio Code, Vercel.",
          en: "Visual Studio, Visual Studio Code, Vercel.",
          it: "Visual Studio, Visual Studio Code, Vercel.",
        },
      },
      {
        name: "Version Control & ALM",
        description: {
          es: "Git (SourceTree/GitHub), gestión de repositorios y seguimiento de tareas en Azure DevOps.",
          en: "Git (SourceTree/GitHub), repository management, and task tracking in Azure DevOps.",
          it: "Git (SourceTree/GitHub), gestione di repository e tracking task in Azure DevOps.",
        },
      },
      {
        name: "Database",
        description: {
          es: "Dataverse (modelado de datos, relaciones lookup, llaves compuestas) y bases de SQL.",
          en: "Dataverse (data modeling, lookup/calculated columns, composite keys) and SQL foundations.",
          it: "Dataverse (modellazione dati, relazioni lookup, chiavi composte) e basi di SQL.",
        },
      },
    ],
   }, 
   {
    id: "cloud",
    titleKey: "cloud",
    skills: [
      {
        name: "Azure Logic Apps",
        description: {
          es: "Diseño e implementación de flujos de trabajo empresariales complejos.",
          en: "Design and implementation of complex enterprise workflows.",
          it: "Progettazione e implementazione di workflow aziendali complessi.",
        },
      },
      {
        name: "Power Platform",
        description: {
          es: "Desarrollo de flujos con Power Automate y gestión de soluciones en Power Apps.",
          en: "Flow development with Power Automate and solution management in Power Apps.",
          it: "Sviluppo di flussi con Power Automate e gestione di soluzioni in Power Apps.",
        },
      },
      {
        name: "Scripting",
        description: {
          es: "PowerShell (CSOM/SPO) para actualizaciones masivas de datos y automatización de SharePoint.",
          en: "PowerShell (CSOM/SPO) for mass data updates and SharePoint automation.",
          it: "PowerShell (CSOM/SPO) per automazione di task massivi e gestione SharePoint.",
        },
      },
    ],
  },
  {
    id: "infra",
    titleKey: "infra",
    skills: [
      {
        name: "Microsoft 365 Administration",
        description: {
          es: "Configuración avanzada de SharePoint Online (arquitectura de información, permisos y gobernanza).",
          en: "Advanced SharePoint Online configuration (information architecture, permissions, and governance).",
          it: "Configurazione avanzata di SharePoint Online (architettura dell'informazione, permessi e governance).",
        },
      },
      {
        name: "Identity & Security",
        description: {
          es: "Microsoft Entra ID (anteriormente Azure AD), gestión de MFA y administración de accesos externos.",
          en: "Microsoft Entra ID (formerly Azure AD), MFA management, and external access administration.",
          it: "Microsoft Entra ID (ex Azure AD), gestione MFA e amministrazione accessi per utenti esterni.",
        },
      },
      {
        name: "Microsoft Defender",
        description: {
          es: "Configuración de Safe Senders y protocolos de seguridad de correo.",
          en: "Safe Senders configuration and email security protocols.",
          it: "Configurazione Safe Senders e protocolli di sicurezza email.",
        },
      },
    ],
  },
  {
    id: "profskills",
    titleKey: "profskills",
    skills: [
      {
        name: "Technical Writing",
        description: {
          es: "Manuales de gestión y procedimientos técnicos para clientes internacionales",
          en: "Management manuals and technical procedures for international clients",
          it: "Manuali di gestione e procedure tecniche per clienti internazionali",
        },
      },
      {
        name: "Advanced Support",
        description: {
          es: "Resolución de incidentes técnicos (Nivel 2) con ServiceNow",
          en: "Technical incident resolution (Level 2) with ServiceNow",
          it: "Risoluzione incidenti tecnici (Livello 2) con ServiceNow",
        },
      },
      {
        name: "Agile & Collaborative Workflow",
        description: {
          es: "Experiencia trabajando en marcos Ágiles (Scrum/Kanban) dentro de equipos internacionales.",
          en: "Experience working in Agile frameworks (Scrum/Kanban) within international teams.",
          it: "Esperienza di lavoro in framework Agile (Scrum/Kanban) all'interno di team internazionali.",
        },
      },
    ],
  },
]

function InteractiveSkills({
  skills,
  locale,
  activeSkill,
  onSkillChange,
  descriptionLabel,
  categoryLabel,
}: {
  skills: SkillCategory["skills"]
  locale: Locale
  activeSkill: number
  onSkillChange: (index: number) => void
  descriptionLabel: string
  categoryLabel: string
}) {
  const activeDescription = skills[activeSkill]?.description[locale]

  return (
    <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
      <div className="grid gap-3 sm:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => {
          const isActive = activeSkill === categoryIndex
          return (
            <button key={category.id} type="button" onClick={() => onSkillChange(categoryIndex)} onMouseEnter={() => onSkillChange(categoryIndex)} aria-pressed={isActive} className={`group min-h-36 border p-5 text-left transition-all ${isActive ? "border-primary bg-primary/10 text-foreground" : "border-border bg-background/40 text-muted-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground"}`}>
              <span className="mb-5 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-primary"><span>{String(categoryIndex + 1).padStart(2, "0")}</span><span className="size-2 rounded-full bg-primary/60 transition-transform group-hover:scale-150" /></span>
              <span className="block text-base font-medium">{categoryLabel}</span>
              <span className="mt-2 block text-xs text-muted-foreground">{category.skills.length} skills</span>
            </button>
          )
        })}
      </div>
      <div className="border-l border-primary/40 pl-6 md:pl-8">
        <span className="font-mono text-xs tracking-[0.2em] text-primary">{descriptionLabel}</span>
        <div className="mt-5 space-y-3">
          {skills.map((skill) => <p key={skill.name} className="border-b border-border pb-3 text-sm text-muted-foreground">{skill.name}</p>)}
        </div>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{activeDescription}</p>
      </div>
    </div>
  )
}

const certifications = [
  { name: "Developer (364h)", institution: "ISPC, Argentina", year: "2023" },
  { name: "Full Stack Junior Developer (300h)", institution: "ISPC, Argentina", year: "2023" },
  { name: "Python Programming Fundamentals (75h)", institution: "ISPC, Argentina", year: "2023" },
  { name: "Software Testing QA", institution: "Say Quality / Codo a Codo", year: "2022" },
]

export function SkillsSection() {
  const { locale, t } = useI18n()
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null)
  const [activeSkills, setActiveSkills] = useState<Record<string, number>>({
    dev: 0,
    cloud: 0,
    infra: 0,
    profskills: 0,
  })

  return (
    <section id="skills" className="relative min-h-screen border-t border-border/60 bg-card/50 px-6 pb-[26px] pt-0 md:px-12 lg:px-24">
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
            {t.skills.title}<span className="not-italic text-primary">{t.skills.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
                {t.skills.categories[category.titleKey]}
              </h3>
              <InteractiveSkills
                skills={category.skills}
                locale={locale}
                activeSkill={activeSkills[category.id] ?? 0}
                onSkillChange={(index) =>
                  setActiveSkills((current) => ({ ...current, [category.id]: index }))
                }
descriptionLabel={t.skills.descriptionLabel}
  categoryLabel={t.skills.categories[category.titleKey]}
  />
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="education" className="mt-0 border-t border-border pt-[25px]"
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
            {locale === "es" ? "Formación" : locale === "en" ? "Education" : "Formazione"}
          </h3>
          <div className="flex flex-col border-y border-border">
            {certifications.map((cert, index) => {
              const isExpanded = expandedEducation === index
              return (
                <div key={cert.name} className="border-b border-border last:border-b-0">
                  <button type="button" aria-expanded={isExpanded} onClick={() => setExpandedEducation(isExpanded ? null : index)} className="flex w-full items-center justify-between gap-4 py-4 text-left">
                    <span className="flex items-baseline gap-4"><span className="font-mono text-xs text-primary">{cert.year}</span><span className="text-foreground">{cert.name}</span></span>
                    <span aria-hidden="true" className="font-mono text-primary">{isExpanded ? "−" : "+"}</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <p className="overflow-hidden pb-0 text-sm text-muted-foreground"><span className="block pb-4 pl-14">{cert.institution}</span></p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section >
  )
}
