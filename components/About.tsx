'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'
import { TextEffect } from './ui/text-effect'
import { staggerContainer, staggerItem } from '@/lib/motion'

const stats = [
  { label: 'Ubicada en', value: 'Argentina' },
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
            <TextEffect
              as="h2"
              per="char"
              preset="fade"
              trigger={isInView}
              speedReveal={1.2}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-neutral-100 leading-tight"
            >
              Diseño, movimiento y dirección de arte.
            </TextEffect>
          </motion.div>

          {/* Right — copy + stats */}
          <motion.div variants={staggerItem} className="space-y-8">
          <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
            Hola, soy <strong>Barbs</strong>, una <strong>diseñadora gráfica</strong> con habilidades en <strong>motion graphics</strong> y
            experiencia en <strong>dirección de arte</strong>. Busco el <strong>constante aprendizaje</strong> y vivir nuevas
            experiencias, lo que me permitió desarrollarme en <strong>agencias</strong>, <strong>productoras audiovisuales</strong>
            y <strong>empresas de comunicación y publicidad</strong>.
          </p>

          <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
            En <strong>Conciergency & WeJazz</strong> desarrollo <strong>piezas animadas y estáticas</strong> para redes sociales
            de marcas de gran alcance como <strong>Kinder</strong>, <strong>Ferrero Rocher</strong> y <strong>Cosentino</strong>.
            También participo en <strong>proyectos creativos</strong> como <strong>pitch</strong>, <strong>restylings comunicacionales</strong>,
            <strong>presentaciones</strong> y <strong>campañas 360°</strong>.
          </p>

          <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
            En paralelo, colaboro con <strong>Arde Agencia Creativa (México)</strong> en <strong>creación de marcas</strong>,
            <strong>branding</strong>, <strong>diseño web</strong> y <strong>estrategias digitales</strong>. Este camino me llevó a
            <strong>Fuego Creativo</strong>, donde me desempeño como <strong>Directora de Arte</strong>, brindando apoyo a
            <strong>agencias</strong>, <strong>productoras</strong> y <strong>empresas</strong>.
          </p>

          <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
            Cada proyecto es un <strong>desafío</strong> donde combino <strong>estética visual</strong> con <strong>funcionalidad</strong>
            para entregar <strong>soluciones creativas y efectivas</strong>, siempre alineadas a los
            <strong>conceptos y valores de las marcas</strong>.
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
