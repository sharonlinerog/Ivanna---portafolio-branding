"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Coordinadora de Diseño Gráfico",
    company: "Corporación Universitaria Americana",
    period: "Presente",
    current: true,
    responsibilities: [
      "Coordinación del proceso de diseño y estructuración de contenidos pedagógicos digitales",
      "Acompañamiento técnico y pedagógico a docentes en materiales educativos",
      "Liderazgo del equipo de diseño gráfico y seguimiento a entregables",
      "Integración de recursos interactivos mediante H5P (Lumi)"
    ]
  },
  {
    title: "Diseñadora Gráfica",
    company: "Corporación Universitaria Americana",
    period: "Feb 2024 - Dic 2025",
    current: false,
    responsibilities: [
      "Diseño y estructuración de materiales pedagógicos digitales",
      "Desarrollo de recursos visuales para cursos virtuales",
      "Uso de IA para optimizar la producción de contenidos educativos"
    ]
  },
  {
    title: "Diseñadora y Gestora de Contenidos",
    company: "Zona Libre",
    period: "Oct 2022 - Mar 2023",
    current: false,
    responsibilities: [
      "Creación y planificación de contenido digital y visual"
    ]
  },
  {
    title: "Diseñadora Gráfica",
    company: "DRG Consultoría & Ingeniería",
    period: "Oct 2022 - Mar 2023",
    current: false,
    responsibilities: [
      "Diseño de piezas gráficas para redes sociales",
      "Actualización y rediseño del folleto corporativo",
      "Optimización y rediseño de la página web"
    ]
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experiencia" className="py-24 px-6 lg:px-20 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Experiencia
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground text-balance">
            Mi Trayectoria
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Un recorrido por las experiencias que han formado mi perfil profesional.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className={`absolute top-8 hidden md:block w-4 h-4 rounded-full border-4 border-background ${
                    exp.current ? "bg-primary" : "bg-muted-foreground"
                  } ${index % 2 === 0 ? "-right-2" : "-left-2"}`}
                />

                <Card className={`group hover:shadow-xl transition-all duration-300 ${exp.current ? "border-primary/30" : ""}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          exp.current ? "bg-primary/10" : "bg-muted"
                        }`}>
                          <Briefcase className={`w-5 h-5 ${exp.current ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        {exp.current && (
                          <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                            Actual
                          </span>
                        )}
                      </div>
                      <motion.div
                        whileHover={{ x: 4, y: -4 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.4 }}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
