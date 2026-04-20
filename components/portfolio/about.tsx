"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, BookOpen, Users, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Diseño con Propósito",
    description: "Creo contenido digital que conecta con las audiencias y cumple objetivos específicos."
  },
  {
    icon: BookOpen,
    title: "Enfoque Educativo",
    description: "Especializada en materiales pedagógicos que facilitan el aprendizaje dinámico."
  },
  {
    icon: Users,
    title: "Liderazgo Creativo",
    description: "Coordinación de equipos de diseño para proyectos estratégicos institucionales."
  },
  {
    icon: Lightbulb,
    title: "Innovación Digital",
    description: "Integración de IA y herramientas como H5P para contenidos interactivos."
  }
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre-mi" className="py-24 px-6 lg:px-20 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Sobre Mí
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground text-balance">
            Diseño que Transforma
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Soy una diseñadora apasionada por la creación de contenido digital con propósito, 
            especialmente en contextos educativos. He trabajado en el diseño y estructuración 
            de materiales pedagógicos, asegurando siempre la calidad y coherencia visual de cada recurso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
