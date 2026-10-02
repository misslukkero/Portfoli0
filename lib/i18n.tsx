"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Locale = "es" | "en" | "it"

export interface Translations {
  chapters: {
    who: string
    from: string
    know: string
    build: string
    next: string
  }
  nav: {
    about: string
    experience: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
  greeting: string
  statementLabel: string
  title: string
    titleHighlight: string
    titleEnd: string
    description: string
    viewWork: string
    stats: {
      experience: string
      experienceValue: string
      languages: string
      languagesValue: string
      location: string
      locationValue: string
      stack: string
      stackValue: string
    }
  }
  work: {
    subtitle: string
    title: string
    titleHighlight: string
    viewProject: string
    present: string
  }
  skills: {
    subtitle: string
    title: string
  titleHighlight: string
  descriptionLabel: string
  categories: {
  dev: string
      cloud: string
      infra: string
      profskills: string
    }
  }// Dentro de interface Translations
  projects: {
    subtitle: string
    title: string
    titleHighlight: string
    previousProject: string
    nextProject: string
    // Definicion de las llaves de las tecnologías como tags
    tech: {
      sharepoint: string
      powerAutomate: string
      powerApps: string
      docusign: string
      dataverse: string
      azure: string
      forms: string
      devops: string
      nextjs: string;
    }
  }
  contact: {
    subtitle: string
    title: string
    titleHighlight: string
    description: string
    networks: string
    location: string
    availability: string
    downloadCV: string
  }
  footer: {
    designed: string
    legal: string
    privacy: string
    backToTop: string
  }
}

const translations: Record<Locale, Translations> = {
  es: {
    chapters: {
      who: "Quién soy",
      from: "De dónde vengo",
      know: "Lo que sé",
      build: "Lo que construyo",
      next: "Hablemos",
    },
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Competencias",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      statementLabel: "Una declaración profesional",
      title: "Soy ",
      titleHighlight: "Desarrolladora de software - Construyendo soluciones de software y automatización dentro del ecosistema Microsoft",
      titleEnd: ". Especializada en Microsoft 365 y Azure, ayudo a las empresas a optimizar sus procesos mediante soluciones de automatización.",
      description: "Tengo más de 2 años de experiencia en el ecosistema Microsoft, especialmente en M365, Azure, SharePoint y Power Platform. Después de una trayectoria profesional en el sector sanitario, entré en el mundo IT desarrollando competencias en soporte técnico, automatización y gestión de soluciones cloud. Hoy estoy orientando mi recorrido hacia el desarrollo de software, profundizando en C# y .NET y consolidando mis conocimientos en Next.js y TypeScript. Me interesa seguir creciendo en un rol que me permita unir desarrollo, cloud y automatización.",
      viewWork: "Ver experiencia",
      stats: {
        experience: "Experiencia IT",
        experienceValue: "+2 años",
        languages: "Idiomas",
        languagesValue: "ES, IT, EN",
        location: "Ubicación",
        locationValue: "Pesaro, Italia",
        stack: "Stack",
        stackValue: "Azure, M365, PowerShell",
      },
    },
    work: {
      subtitle: "Trayectoria profesional",
      title: "Experiencia ",
      titleHighlight: "laboral",
      viewProject: "Ver detalles",
      present: "Presente",
    },
    skills: {
      subtitle: "Competencias técnicas",
      title: "Habilidades ",
  titleHighlight: "técnicas",
  descriptionLabel: "Descripción",
  categories: {
        dev: "Desarrollo de Software y Código",
        cloud: "Automatización Cloud y Lógica de Backend",
        infra: "Infraestructura Cloud y Operaciones",
        profskills: "Competencias Profesionales",
      },
    },
    // Para ES (repite lo mismo para EN e IT)
    projects: {
  subtitle: "Proyectos seleccionados",
  title: "Proyectos",
  previousProject: "Proyecto anterior",
  nextProject: "Proyecto siguiente",
      titleHighlight: "destacados",
      tech: {
        sharepoint: "SharePoint",
        powerAutomate: "Power Automate",
        powerApps: "Power Apps",
        docusign: "DocuSign",
        dataverse: "Dataverse",
        azure: "Azure",
        forms: "Microsoft Forms",
        devops: "DevOps",
        nextjs: "Next.js"
      },
    },
    contact: {
      subtitle: "Contacto",
      title: "¿Tienes un proyecto en mente? ",
      titleHighlight: "Hablemos",
      description: "Actualmente busco integrarme en equipos de Global Delivery como Junior .NET Developer o Consultora Cloud. Mi enfoque principal es la creación de soluciones escalables y la optimización de procesos mediante código y automatización. Si buscas una profesional trilingüe con una mentalidad orientada a la resolución técnica y la excelencia operativa, conectemos.",
      networks: "Redes",
      location: "Ubicación",
      availability: "UTC+1 · Disponible para remoto",
      downloadCV: "Descargar CV",
    },
    footer: {
      designed: "Diseñado y desarrollado por",
      legal: "Aviso legal",
      privacy: "Privacidad",
      backToTop: "Volver arriba",
    },
  },
  en: {
    chapters: {
      who: "Who I am",
      from: "Where I come from",
      know: "What I know",
      build: "What I build",
      next: "Let's talk",
    },
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      statementLabel: "A professional statement",
      title: "I'm a ",
      titleHighlight: "Software Developer - Building software and automation solutions within the Microsoft ecosystem",
      titleEnd: ". Specialized in Microsoft 365 and Azure, I help companies optimize their processes through automation solutions.",
      description: "I have over 2 years of experience in the Microsoft ecosystem, with a particular focus on M365, Azure, SharePoint, and Power Platform. After a professional background in healthcare, I entered the IT field and developed skills in technical support, automation, and cloud solution management. I am now orienting my career toward software development, deepening my knowledge of C# and .NET while strengthening my skills in Next.js and TypeScript. I am interested in continuing to grow in a role that allows me to combine development, cloud, and automation.",
      viewWork: "View experience",
      stats: {
        experience: "IT Experience",
        experienceValue: "+2 years",
        languages: "Languages",
        languagesValue: "ES, IT, EN",
        location: "Location",
        locationValue: "Pesaro, Italy",
        stack: "Stack",
        stackValue: "Azure, M365, PowerShell",
      },
    },
    work: {
      subtitle: "Professional background",
      title: "Work ",
      titleHighlight: "experience",
      viewProject: "View details",
      present: "Present",
    },
    skills: {
      subtitle: "Technical skills",
      title: "Technical ",
  titleHighlight: "skills",
  descriptionLabel: "Description",
  categories: {
        dev: "Software Development & Code",
        cloud: "Cloud Automation & Backend Logic",
        infra: "Cloud Infrastructure & Operations",
        profskills: "Professional Skills",
      },
    },
    // Para EN (repite lo mismo para ES e IT)
    projects: {
  subtitle: "Selected projects",
  title: "Selected",
  previousProject: "Previous project",
  nextProject: "Next project",
      titleHighlight: "projects",
      tech: {
        sharepoint: "SharePoint",
        powerAutomate: "Power Automate",
        powerApps: "Power Apps",
        docusign: "DocuSign",
        dataverse: "Dataverse",
        azure: "Azure",
        forms: "Microsoft Forms",
        devops: "DevOps",
        nextjs: "Next.js",
      },
    },
    contact: {
      subtitle: "Contact",
      title: "Have a project in mind? ",
      titleHighlight: "Let's talk",
      description: "I'm currently open to new professional challenges as a Junior .NET Developer or Cloud & Automation Specialist within international teams. If you are looking for a trilingual professional (EN-IT-ES) focused on writing scalable code, mastering the Microsoft ecosystem, and delivering high-quality digital solutions, I'd love to hear from you.",
      networks: "Networks",
      location: "Location",
      availability: "UTC+1 · Available for remote work",
      downloadCV: "Download CV",
    },
    footer: {
      designed: "Designed and developed by",
      legal: "Legal notice",
      privacy: "Privacy",
      backToTop: "Back to top",
    },
  },
  it: {
    chapters: {
      who: "Chi sono",
      from: "Da dove vengo",
      know: "Cosa so",
      build: "Cosa costruisco",
      next: "Parliamone",
    },
    nav: {
      about: "Chi sono",
      experience: "Esperienza",
      skills: "Competenze",
      projects: "Progetti",
      contact: "Contatto",
    },
    hero: {
      greeting: "Ciao, sono",
      statementLabel: "Una dichiarazione professionale",
      title: "Sono una ",
      titleHighlight: "Sviluppatrice software - Costruendo soluzioni software e di automazione nell'ecosistema Microsoft",
      titleEnd: ". Specializzata in Microsoft 365 e Azure, aiuto le aziende a ottimizzare i loro processi attraverso soluzioni di automazione.",
      description: "Ho oltre 2 anni di esperienza nell’ecosistema Microsoft, con esperienza in M365, Azure, SharePoint e Power Platform. Dopo un percorso professionale nel settore sanitario, sono entrata nel mondo IT sviluppando competenze nel supporto tecnico, nell’automazione e nella gestione di soluzioni cloud. Oggi sto orientando il mio percorso verso lo sviluppo software, approfondendo C# e .NET e consolidando le mie competenze in Next.js e TypeScript. Il mio obiettivo è crescere come sviluppatrice, continuando a lavorare all’intersezione tra sviluppo software, cloud e automazione.",
      viewWork: "Vedi esperienza",
      stats: {
        experience: "Esperienza IT",
        experienceValue: "+2 anni",
        languages: "Lingue",
        languagesValue: "ES, IT, EN",
        location: "Posizione",
        locationValue: "Pesaro, Italia",
        stack: "Stack",
        stackValue: "Azure, M365, PowerShell",
      },
    },
    work: {
      subtitle: "Percorso professionale",
      title: "Esperienza ",
      titleHighlight: "lavorativa",
      viewProject: "Vedi dettagli",
      present: "Presente",
    },
    skills: {
      subtitle: "Competenze tecniche",
  title: "Competenze ",
  titleHighlight: "tecniche",
  descriptionLabel: "Descrizione",
  categories: {
        dev: "Sviluppo Software & Code",
        cloud: "Cloud Automation & Backend Logic",
        infra: "Cloud Infrastructure & Operations",
        profskills: "Competenze Professionali",
      },
    },
    projects: {
  subtitle: "Progetti selezionati",
  title: "Progetti",
  previousProject: "Progetto precedente",
  nextProject: "Progetto successivo",
      titleHighlight: "selezionati",
      tech: {
        sharepoint: "SharePoint",
        powerAutomate: "Power Automate",
        powerApps: "Power Apps",
        docusign: "DocuSign",
        dataverse: "Dataverse",
        azure: "Azure",
        forms: "Microsoft Forms",
        devops: "DevOps",
        nextjs: "Next.js",
      },
    },
    contact: {
      subtitle: "Contatto",
      title: "Hai un progetto in mente? ",
      titleHighlight: "Parliamone",
      description: "Sono attualmente alla ricerca di nuove opportunità come Junior .NET Developer o Specialista Cloud & Automation in contesti internazionali. Il mio obiettivo è contribuire a progetti ambiziosi unendo solide basi di sviluppo a una profonda conoscenza dell'ecosistema Microsoft. Se cerchi una professionista trilingue focalizzata su risultati concreti e codice pulito, mettiamoci in contatto.",
      networks: "Social",
      location: "Posizione",
      availability: "UTC+1 · Disponibile per lavoro remoto",
      downloadCV: "Scarica CV",
    },
    footer: {
      designed: "Progettato e sviluppato da",
      legal: "Note legali",
      privacy: "Privacy",
      backToTop: "Torna su",
    },
  },
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("it")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale
    if (saved && translations[saved]) {
      setLocale(saved)
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}


export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  it: "Italiano",
}
