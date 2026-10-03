"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { useI18n, type Locale, type Translations } from "@/lib/i18n"

// 1. Interfaz del Proyecto
interface Project {
  id: string
  name: Record<Locale, string>
  description: Record<Locale, string>
  tags: (keyof Translations["projects"]["tech"])[]
  link?: string
}

// 2. Definición de los proyectos
const projects: Project[] = [
  {
    id: "p1",
    name: {
      es: "Digitalización de Procesos con Microsoft 365 & DocuSign",
      en: "Process Digitalization with Microsoft 365 & DocuSign",
      it: "Digitalizzazione dei Processi con Microsoft 365 e DocuSign",
    },
    description: {
      es: "Modernización de procesos internos mediante la sustitución de formularios físicos por soluciones digitales inteligentes. Un enfoque centrado en la agilidad y la reducción de costes, integrando tecnología existente para crear sistemas más seguros y trazables.",
      en: "Modernizing internal processes by replacing physical forms with intelligent digital solutions. An approach focused on agility and cost reduction, integrating existing technology to create more secure and traceable systems.",
      it: "Modernizzazione dei processi interni attraverso la sostituzione dei moduli cartacei con soluzioni digitali intelligenti. Un approccio focalizzato sull'agilità e la riduzione dei costi, integrando le tecnologie esistenti per creare sistemi più sicuri e tracciabili.",
    },
    tags: ["sharepoint", "docusign", "powerAutomate", "forms"]
  },
  {
    id: "p2",
    name: {
      es: "Sharepoint como Documental",
      en: "Sharepoint as Document Management System",
      it: "Sharepoint come Documentale",
    },
    description: {
      es: "Optimización de la gobernanza documental mediante sistemas centralizados de gestión. Facilitando el control de versiones, la aprobación y distribución de procedimientos críticos para asegurar el cumplimiento normativo y la transparencia total ante los stakeholders de la organización.",
      en: "Optimizing document governance through centralized management systems. Facilitating version control, approval, and distribution of critical procedures to ensure regulatory compliance and total transparency for organizational stakeholders.",
      it: "Ottimizzazione della governance documentale attraverso sistemi di gestione centralizzati. Facilitando il controllo delle versioni, l'approvazione e la distribuzione di procedure critiche per garantire la conformità normativa e la totale trasparenza verso gli stakeholder.",
    },
    tags: ["sharepoint", "powerAutomate", "azure"]
  },
  {
    id: "p6",
    name: {
      es: "Ticketera IT: Gestión de Incidencias",
      en: "Ticketera IT: Incident Management System",
      it: "Ticketera IT: Gestione degli Incidenti",
    },
    description: {
      es: "Sistema Full-Stack de gestión de tickets. Backend en .NET Core desplegado en Azure y Frontend en Next.js. Automatización de flujos de resolución con despliegue continuo (CI/CD).",
      en: "Full-Stack ticket management system. .NET Core backend deployed on Azure and Next.js frontend. Automated resolution workflows with continuous deployment (CI/CD).",
      it: "Sistema Full-Stack di gestione dei ticket. Backend in .NET Core distribuito su Azure e Frontend in Next.js. Flussi di risoluzione automatizzati con distribuzione continua (CI/CD).",
    },
    tags: ["azure", "devops", "nextjs"], 
    link: "https://ticketera-daiana.vercel.app",
 },
]

export function Projects() {
  const { locale, t } = useI18n()
  const [activeProject, setActiveProject] = useState(0)
  const project = projects[activeProject]

  const moveProject = (direction: number) => {
    setActiveProject((current) => (current + direction + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="relative min-h-screen border-t border-border/60 bg-secondary/20 px-6 pb-[29px] pt-[26px] md:px-12 lg:px-24">
<div className="max-w-6xl mx-auto">
  
  {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic mt-4 text-foreground">
            {t.projects.title}{" "}
            <span className="not-italic text-primary">{t.projects.titleHighlight}</span>
            <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="min-w-0 overflow-hidden border-y border-border py-12">
            <motion.article
              key={project.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="mx-auto max-w-4xl text-center"
            >
              <p className="mb-5 font-mono text-xs tracking-[0.24em] text-primary">
                {String(activeProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </p>
              <h3 className="text-3xl font-serif italic text-foreground md:text-5xl">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                    {project.name[locale]} ↗
                  </a>
                ) : project.name[locale]}
              </h3>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{project.description[locale]}</p>
              <div className="mt-10 flex flex-wrap gap-2">
                {project.tags.map((tagKey) => (
                  <span key={tagKey} className="border border-border bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary-foreground">
                    {t.projects.tech[tagKey as keyof typeof t.projects.tech]}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>
          <div className="flex items-center gap-3 lg:pb-3">
            <button type="button" onClick={() => moveProject(-1)} aria-label={t.projects.previousProject} className="border border-border px-4 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary">←</button>
            <button type="button" onClick={() => moveProject(1)} aria-label={t.projects.nextProject} className="border border-border px-4 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
