"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Ivanna Alvarado. Hecho con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.div>
            <span>en Barranquilla</span>
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold text-foreground"
          >
            <span className="text-primary">I</span>vanna
          </motion.a>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#sobre-mi" className="hover:text-primary transition-colors">
              Sobre Mí
            </a>
            <a href="#experiencia" className="hover:text-primary transition-colors">
              Experiencia
            </a>
            <a href="#contacto" className="hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  )
}
