'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Container from './Container'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { ScrollProgress } from './ui/scroll-progress'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('Navbar')

  const navLinks = [
    { label: t('work'), href: '/#projects' },
    { label: t('about'), href: '/#about' },
    { label: t('contact'), href: '/#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      className={[
        'fixed top-0 left-0 right-0 z-50',
        scrolled
          ? 'bg-neutral-50/90 dark:bg-dark-bg/90 backdrop-blur-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-xs font-medium tracking-widest uppercase text-neutral-900 dark:text-neutral-100 hover:opacity-50"
          >
            Bárbara Corb
          </Link>

          {/* Nav links + switchers */}
          <nav className="flex items-center gap-7 md:gap-9">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hidden sm:block text-xs tracking-wide text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                {label}
              </Link>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>
        </div>
      </Container>

      {/* Separator — visible only when scrolled */}
      <div
        className={`h-px bg-neutral-200 dark:bg-neutral-800 transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Scroll progress — full width, 2px, tracks window scroll */}
      <ScrollProgress className="h-0.5 bg-gradient-to-r from-transparent to-neutral-900 dark:to-neutral-100 pointer-events-none" />
    </motion.header>
  )
}
