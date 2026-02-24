'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Container from './Container'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Trabajos', href: '/#projects' },
  { label: 'Sobre mí', href: '/#about' },
  { label: 'Contacto', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

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
          ? 'bg-neutral-50/90 dark:bg-dark-bg/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800/80'
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

          {/* Nav links + toggle */}
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
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </motion.header>
  )
}
