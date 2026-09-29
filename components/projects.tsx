"use client"
import { motion } from "framer-motion"
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

  return (
    <section id="projects" className="relative min-h-screen border-t border-border/60 bg-secondary/20 px-6 py-32 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            {t.projects.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic mt-4 text-foreground">
            {t.projects.title}{" "}
            <span className="not-italic text-primary">{t.projects.titleHighlight}</span>
            <span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Lista de Proyectos */}
        <div className="grid grid-cols-1 gap-24 md:gap-32">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border-b border-border pb-16"
            >
              <div className="max-w-4xl">
                <div className="space-y-6">
                  {/* Título del proyecto */}
                  <h3 className="text-3xl md:text-4xl font-serif italic text-foreground transition-colors">
                    {project.link && project.link.trim() !== "" ? (
                <a href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group-hover:text-primary transition-colors"
                 >
                {project.name[locale]} ↗
                </a>
                ) : (
                <span className="text-foreground">
                {project.name[locale]}
                </span>
                )}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    {project.description[locale]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tagKey) => (
                      <span
                        key={tagKey}
                        className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 bg-secondary text-secondary-foreground border border-border"
                      >
                        {t.projects.tech[tagKey as keyof typeof t.projects.tech]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
