"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Adobe Illustrator", category: "design" },
  { name: "Adobe Photoshop", category: "design" },
  { name: "Diseño Editorial", category: "expertise" },
  { name: "Contenido Pedagógico", category: "expertise" },
  { name: "Inteligencia Artificial", category: "tech" },
  { name: "H5P / Lumi", category: "tech" },
  { name: "Gestión de Proyectos", category: "soft" },
  { name: "Comunicación Visual", category: "expertise" },
  { name: "Manejo de Personal", category: "soft" },
  { name: "Recursos Interactivos", category: "tech" },
  { name: "Entornos Educativos", category: "expertise" },
  { name: "Diseño Web", category: "design" },
]

const categoryColors: Record<string, string> = {
  design: "bg-primary/10 text-primary hover:bg-primary/20 border-primary/20",
  expertise: "bg-accent/10 text-accent-foreground hover:bg-accent/20 border-accent/20",
  tech: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary",
  soft: "bg-muted text-muted-foreground hover:bg-muted/80 border-muted",
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="habilidades" className="py-24 px-6 lg:px-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Habilidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground text-balance">
            Lo que Hago Mejor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Herramientas y competencias que utilizo para crear experiencias visuales únicas y efectivas.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant="outline"
                className={`px-5 py-2.5 text-sm font-medium cursor-default transition-all duration-300 ${categoryColors[skill.category]}`}
              >
                {skill.name}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/30" />
            <span>Diseño</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent/30" />
            <span>Expertise</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span>Tecnología</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted" />
            <span>Soft Skills</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
