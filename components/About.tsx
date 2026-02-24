'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'
import { staggerContainer, staggerItem } from '@/lib/motion'

const stats = [
  { label: 'Basada en', value: 'Argentina' },
  { label: 'Especialidad', value: 'Motion Graphics' },
  { label: 'Rol actual', value: 'Directora de Arte' },
  { label: 'Disponibilidad', value: '2026' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      id="about"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="py-16 md:py-36 border-t border-neutral-200 dark:border-neutral-800"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 items-start">
          {/* Left — heading */}
          <motion.div variants={staggerItem}>
            <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-6 md:mb-10">
              Acerca de mí
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-neutral-100 leading-tight">
              Diseño, movimiento y dirección de arte.
            </h2>
          </motion.div>

          {/* Right — copy + stats */}
          <motion.div variants={staggerItem} className="space-y-8">
            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              Hola, soy Barbs, una diseñadora gráfica con habilidades en motion graphics y
              experiencia en dirección de arte. Busco el constante aprendizaje y vivir nuevas
              experiencias, lo que me permitió desarrollarme en agencias, productoras audiovisuales
              y empresas de comunicación y publicidad.
            </p>
            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              En Conciergency & WeJazz desarrollo piezas animadas y estáticas para redes sociales
              de marcas de gran alcance como Kinder, Ferrero Rocher y Cosentino. También participo
              en proyectos creativos como pitch, restylings comunicacionales, presentaciones y
              campañas 360°.
            </p>
            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              En paralelo, colaboro con Arde Agencia Creativa (México) en creación de marcas,
              branding, diseño web y estrategias digitales. Este camino me llevó a Fuego Creativo,
              donde me desempeño como Directora de Arte, brindando apoyo a agencias, productoras
              y empresas.
            </p>
            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              Cada proyecto es un desafío donde combino estética visual con funcionalidad para
              entregar soluciones creativas y efectivas, siempre alineadas a los conceptos y
              valores de las marcas.
            </p>

            {/* Stats grid */}
            <div className="pt-4 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-neutral-200 dark:border-neutral-800">
              {stats.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-1.5">
                    {label}
                  </p>
                  <p className="text-sm text-neutral-900 dark:text-neutral-100">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}
