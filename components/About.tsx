'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Container from './Container'
import { TextEffect } from './ui/text-effect'
import { staggerContainer, staggerItem } from '@/lib/motion'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const t = useTranslations('About')

  const stats = [
    { label: t('statsLocationLabel'), value: t('statsLocationValue') },
    { label: t('statsSpecialtyLabel'), value: t('statsSpecialtyValue') },
    { label: t('statsRoleLabel'), value: t('statsRoleValue') },
    { label: t('statsAvailabilityLabel'), value: t('statsAvailabilityValue') },
  ]

  const b = (chunks: React.ReactNode) => <strong>{chunks}</strong>

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
              {t('label')}
            </p>
            <TextEffect
              as="h2"
              per="char"
              preset="fade"
              trigger={isInView}
              speedReveal={1.2}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-neutral-100 leading-tight"
            >
              {t('heading')}
            </TextEffect>
          </motion.div>

          {/* Right — copy + stats */}
          <motion.div variants={staggerItem} className="space-y-8">
            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              {t.rich('bio1', { b })}
            </p>

            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              {t.rich('bio2', { b })}
            </p>

            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              {t.rich('bio3', { b })}
            </p>

            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8]">
              {t.rich('bio4', { b })}
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
