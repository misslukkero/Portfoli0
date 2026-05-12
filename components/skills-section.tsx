"use client"

import { motion } from "framer-motion"
import { useI18n, type Locale } from "@/lib/i18n"

interface SkillCategory {
  id: string
  titleKey: "cloud" | "scripting" | "documentation"
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
      {
    id: "scripting",
    titleKey: "scripting",
    skills: [
      {
        name: "Microsoft 365 Administration",
        description: {
          es: "Configuración de SharePoint Online, listas, librerías y gestión de permisos",
          en: "SharePoint Online configuration, lists, libraries and permission management",
          it: "Configurazione SharePoint Online, liste, librerie e gestione permessi",
        },
      },
      {
        name: "Microsoft Entra ID",
        description: {
          es: "Gestión de usuarios y grupos en entornos empresariales",
          en: "User and group management in enterprise environments",
          it: "Gestione utenti e gruppi in ambienti aziendali",
        },
      },
      {
        name: "Azure Logic Apps",
        description: {
          es: "Implementación de workflows empresariales automatizados",
          en: "Implementation of automated business workflows",
          it: "Implementazione di workflow aziendali automatizzati",
        },
      },
      {
        name: "Power Automate",
        description: {
          es: "Diseño y ejecución de flujos de automatización",
          en: "Design and execution of automation flows",
          it: "Progettazione ed esecuzione di flussi di automazione",
        },
      },
      {
        name: "Security & Access",
        description: {
          es: "Gestión MFA, MS Defender y administración de accesos externos",
          en: "MFA management, MS Defender and external access administration",
          it: "Gestione MFA, MS Defender e amministrazione accessi esterni",
        },
      },
    ],
  },
  {
    id: "scripting",
    titleKey: "scripting",
    skills: [
      {
        name: "PowerShell (CSOM/SPO)",
        description: {
          es: "Scripts para modificación masiva de datos y automatización en SharePoint",
          en: "Scripts for bulk data modification and SharePoint automation",
          it: "Script per modifica massiva dati e automazione SharePoint",
        },
      },
      {
        name: "Dataverse",
        description: {
          es: "Creación de tablas, columnas Lookup/Calcolate y claves compuestas",
          en: "Table creation, Lookup/Calculated columns and composite keys",
          it: "Creazione tabelle, colonne Lookup/Calcolate e chiavi composte",
        },
      },
      {
        name: "Azure DevOps",
        description: {
          es: "Tracking de tareas, gestión Git y supervisión de pipelines",
          en: "Task tracking, Git management and pipeline supervision",
          it: "Tracking task, gestione Git e supervisione pipeline",
        },
      },
      {
        name: "C# / Visual Studio",
        description: {
          es: "Intervenciones técnicas en código para Event Receivers",
          en: "Technical code interventions for Event Receivers",
          it: "Interventi tecnici su codice per Event Receivers",
        },
      },
    ],
  },
  {
    id: "documentation",
    titleKey: "documentation",
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
    ],
  },
]

const certifications = [
  { name: "Developer (364h)", institution: "ISPC, Argentina", year: "2023" },
  { name: "Full Stack Junior Developer (300h)", institution: "ISPC, Argentina", year: "2023" },
  { name: "Python Programming Fundamentals (75h)", institution: "ISPC, Argentina", year: "2023" },
  { name: "Software Testing QA", institution: "Say Quality / Codo a Codo", year: "2022" },
]

export function SkillsSection() {
  const { locale, t } = useI18n()

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 bg-card/50">
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

        <div className="space-y-16">
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
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    className="group py-4 border-b border-border"
                  >
                    <h4 className="text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description[locale]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t border-border"
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
            {locale === "es" ? "Formación" : locale === "en" ? "Education" : "Formazione"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start justify-between gap-4 py-4 border-b border-border"
              >
                <div>
                  <p className="text-foreground">{cert.name}</p>
                  <p className="text-muted-foreground text-sm">{cert.institution}</p>
                </div>
                <span className="font-mono text-sm text-primary shrink-0">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
