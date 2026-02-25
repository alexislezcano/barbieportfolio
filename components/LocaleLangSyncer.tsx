'use client'

import { useEffect } from 'react'

/**
 * Keeps <html lang> in sync with the active locale.
 * The root layout owns <html> (and never re-renders on navigation), so we
 * update the `lang` attribute via a DOM side-effect instead of a React prop.
 */
export default function LocaleLangSyncer({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
