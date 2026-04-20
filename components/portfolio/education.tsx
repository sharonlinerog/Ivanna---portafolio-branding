"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Profesional en Diseño Gráfico",
    institution: "Institución Universitaria de Barranquilla",
    year: "2025",
    icon: GraduationCap,
    highlight: true
  },
  {
    degree: "Bachillerato Académico con Énfasis en Artes",
    institution: "IED Marie Poussepin",
    year: "2020",
    icon: Award,
    highlight: false
  }
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="educacion" className="py-24 px-6 lg:px-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Formación
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground text-balance">
            Educación
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Mi formación académica que respalda mi experiencia profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                edu.highlight 
                  ? "bg-primary/5 border-primary/20 hover:border-primary/40" 
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {edu.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium"
                >
                  Reciente
                </motion.div>
              )}

              <div className="flex items-start gap-5">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                    edu.highlight ? "bg-primary/20" : "bg-muted"
                  }`}
                >
                  <edu.icon className={`w-7 h-7 ${edu.highlight ? "text-primary" : "text-muted-foreground"}`} />
                </motion.div>

                <div>
                  <span className="text-sm font-medium text-primary">{edu.year}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
