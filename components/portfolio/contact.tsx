"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, ExternalLink, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ivi.creative.design@gmail.com",
    href: "mailto:ivi.creative.design@gmail.com"
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 304 344 3083",
    href: "tel:+573043443083"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barranquilla, Colombia",
    href: null
  }
]

const references = [
  { name: "Juan Camilo Porto", role: "Ingeniero de Sistemas", phone: "301 8698010" },
  { name: "Sharon Linero", role: "Ingeniera de Sistemas", phone: "300 3330004" },
  { name: "Alberto Mantilla", role: "Desarrollador Web", phone: "311 5697605" }
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contacto" className="py-24 px-6 lg:px-20 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground text-balance">
            {"¿Trabajamos Juntos?"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Estoy disponible para nuevos proyectos y colaboraciones. 
            No dudes en contactarme.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Información de Contacto
            </h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8 }}
                className="group"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6"
            >
              <a href="mailto:ivi.creative.design@gmail.com">
                <Button size="lg" className="w-full gap-2 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensaje
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Referencias Laborales
            </h3>

            <div className="space-y-4">
              {references.map((ref, index) => (
                <motion.div
                  key={ref.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                      {ref.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{ref.name}</h4>
                      <p className="text-sm text-muted-foreground">{ref.role}</p>
                    </div>
                    <a
                      href={`tel:+57${ref.phone.replace(/\s/g, "")}`}
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      {ref.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
