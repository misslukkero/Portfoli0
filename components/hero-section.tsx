"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="about" className="relative min-h-[92svh] overflow-hidden px-6 pb-[53px] pt-[86px] md:px-12 lg:px-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] lg:mx-0 lg:max-w-[280px]">
              <Image
                src="/daiana-profile.png"
                alt="Daiana Senese"
                fill
                className="object-cover grayscale"
                priority
              />

              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
            </div>
          </motion.div>

        
          <div className="order-1 lg:order-1">
          
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <h1 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
          <span className="font-serif not-italic text-foreground">Daiana</span>{" "}
          <span className="font-serif italic text-primary">Senese</span>
        </h1>
        </motion.div>
        
            
            <motion.div 
              className="mt-8 flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-px h-16 bg-primary animate-line-grow" />
              <p className="text-xl md:text-2xl font-light text-foreground/80">
                {t.hero.titleHighlight}
              </p>
            </motion.div>

            
            <motion.p 
              className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.hero.description}
            </motion.p>

            
            <motion.div 
              className="mt-10 grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  {t.hero.stats.experience}
                </p>
                <p className="text-2xl font-light">{t.hero.stats.experienceValue}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  {t.hero.stats.location}
                </p>
                <p className="text-2xl font-light">{t.hero.stats.locationValue}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  {t.hero.stats.languages}
                </p>
                <p className="text-2xl font-light">{t.hero.stats.languagesValue}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
