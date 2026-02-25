import { getTranslations } from 'next-intl/server'
import Container from './Container'

export default async function Footer() {
  const t = await getTranslations('Footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            {t('copyright', { year })}
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            {t('role')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
