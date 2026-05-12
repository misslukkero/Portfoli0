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
      description: "Soy una Especialista en Cloud & Automation convencida de que la excelencia técnica se construye sobre la base de la precisión. Con más de 2 años de experiencia en el ecosistema Microsoft (M365, Azure, Power Platform) y una trayectoria previa de 9 años en el sector salud, aporto al mundo IT una mentalidad única de 'error cero'. Mi especialidad es transformar cuellos de botella manuales en flujos de trabajo en la nube automatizados y escalables. Mi Evolución Actual: Aunque mi experiencia principal se centra en SharePoint y Power Platform, mi pasión por construir soluciones robustas me ha llevado a ampliar mis horizontes. Tras completar una formación como Full Stack Junior (Next.js y TypeScript), ahora estoy profundamente enfocada en dominar C# y .NET para unir la automatización cloud con el desarrollo de software profesional.",
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
        dev: "Desarrollo de Software y Código",
        cloud: "Automatización Cloud y Lógica de Backend",
        infra: "Infraestructura Cloud y Operaciones",
        profskills: "Competencias Profesionales",
      },
    },
    // Para ES (repite lo mismo para EN e IT)
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
      description: "I am a Cloud & Automation Specialist who believes that technical excellence is built on precision. With over 2 years of experience in the Microsoft ecosystem (M365, Azure, Power Platform) and a previous 9-year background in the healthcare sector, I bring a unique 'zero-error' mindset to IT infrastructure. I specialize in transforming manual bottlenecks into scalable, automated cloud workflows. My Current Evolution: While my core expertise lies in SharePoint and Power Platform, my passion for building robust solutions has led me to expand my horizons. Having completed a Full Stack Junior program (Next.js & TypeScript), I am now deeply focused on mastering C# and .NET to bridge the gap between cloud automation and professional software development.",
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
        dev: "Software Development & Code",
        cloud: "Cloud Automation & Backend Logic",
        infra: "Cloud Infrastructure & Operations",
        profskills: "Professional Skills",
      },
    },
    // Para EN (repite lo mismo para ES e IT)
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
      description: "Sono una Specialista Cloud & Automation convinta che l'eccellenza tecnica si costruisca sulla base della precisione. Con oltre 2 anni di esperienza nell'ecosistema Microsoft (M365, Azure, Power Platform) e un percorso precedente di 9 anni nel settore sanitario, porto nel mondo IT una mentalità unica orientata allo 'zero errori'. La mia specialità è trasformare i colli di bottiglia manuali in flussi di lavoro cloud automatizzati e scalabili. La mia evoluzione attuale: Sebbene la mia esperienza principale si concentri su SharePoint e Power Platform, la mia passione per la creazione di soluzioni robuste mi ha spinta ad ampliare i miei orizzonti. Dopo aver completato una formazione come Full Stack Junior (Next.js e TypeScript), ora sono profondamente focalizzata sul padroneggiare C# e .NET per unire l'automazione cloud allo sviluppo software professionale.",
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
        dev: "Sviluppo Software & Code",
        cloud: "Cloud Automation & Backend Logic",
        infra: "Cloud Infrastructure & Operations",
        profskills: "Competenze Professionali",
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
