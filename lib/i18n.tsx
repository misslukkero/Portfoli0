"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Locale = "es" | "en" | "it"

export interface Translations {
  nav: {
    about: string
    experience: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
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
    categories: {
      cloud: string
      scripting: string
      documentation: string
    }
  }// Dentro de interface Translations
  projects: {
    subtitle: string
    title: string
    titleHighlight: string
    // Definimos las llaves de las tecnologías que usaremos como tags
    tech: {
      sharepoint: string
      powerAutomate: string
      powerApps: string
      docusign: string
      dataverse: string
      azure: string
      forms: string
      devops: string
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
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Competencias",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      title: "Soy ",
      titleHighlight: "Cloud & Automation Consultant",
      titleEnd: ". Especializada en Microsoft 365 y Azure, ayudo a las empresas a optimizar sus procesos mediante soluciones de automatización.",
      description: "Mi perfil combina autonomía técnica en entornos IT con 9 años de experiencia previa en el sector sanitario, lo que me aporta rigor operativo, precisión en protocolos y capacidad de gestión en contextos de alta presión.",
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
      categories: {
        cloud: "Infraestructura Cloud & Operations",
        scripting: "Scripting y Gestión de Datos",
        documentation: "Documentación y Soporte",
      },
    },
    // Ejemplo para ES (repite lo mismo para EN e IT)
    projects: {
      subtitle: "Casos de éxito",
      title: "Proyectos",
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
      },
    },
    contact: {
      subtitle: "Contacto",
      title: "¿Tienes un proyecto en mente? ",
      titleHighlight: "Hablemos",
      description: "Actualmente estoy abierta a nuevas oportunidades laborales y proyectos de consultoría en el ámbito Cloud y automatización.",
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
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "I'm a ",
      titleHighlight: "Cloud & Automation Consultant",
      titleEnd: ". Specialized in Microsoft 365 and Azure, I help companies optimize their processes through automation solutions.",
      description: "My profile combines technical autonomy in IT environments with 9 years of prior experience in healthcare, which gives me operational rigor, precision in protocols, and management skills in high-pressure contexts.",
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
      categories: {
        cloud: "Cloud Infrastructure & Operations",
        scripting: "Scripting & Data Management",
        documentation: "Documentation & Support",
      },
    },
    // Ejemplo para EN (repite lo mismo para ES e IT)
    projects: {
      subtitle: "Case studies",
      title: "Selected",
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
      },
    },
    contact: {
      subtitle: "Contact",
      title: "Have a project in mind? ",
      titleHighlight: "Let's talk",
      description: "I'm currently open to new job opportunities and consulting projects in Cloud and automation.",
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
    nav: {
      about: "Chi sono",
      experience: "Esperienza",
      skills: "Competenze",
      projects: "Progetti",
      contact: "Contatto",
    },
    hero: {
      greeting: "Ciao, sono",
      title: "Sono una ",
      titleHighlight: "Cloud & Automation Consultant",
      titleEnd: ". Specializzata in Microsoft 365 e Azure, aiuto le aziende a ottimizzare i loro processi attraverso soluzioni di automazione.",
      description: "Il mio profilo unisce l'autonomia tecnica in ambienti IT con una traiettoria precedente di 9 anni nel settore sanitario, che mi conferisce rigore operativo, precisione nel rispetto dei protocolli e capacità di gestione in contesti ad alta pressione.",
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
      categories: {
        cloud: "Infrastruttura Cloud & Operations",
        scripting: "Scripting e Gestione Dati",
        documentation: "Documentazione e Supporto",
      },
    },
    projects: {
      subtitle: "Lavori scelti",
      title: "Progetti",
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
      },
    },
    contact: {
      subtitle: "Contatto",
      title: "Hai un progetto in mente? ",
      titleHighlight: "Parliamone",
      description: "Attualmente sono aperta a nuove opportunità lavorative e progetti di consulenza in ambito Cloud e automazione.",
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
