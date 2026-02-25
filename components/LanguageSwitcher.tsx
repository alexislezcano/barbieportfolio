'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const otherLocale = locale === 'es' ? 'en' : 'es'

  return (
    <button
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className="text-xs tracking-wide text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
      aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Español'}`}
    >
      {otherLocale.toUpperCase()}
    </button>
  )
}
