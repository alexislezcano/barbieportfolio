import Link from 'next/link'
import Container from '@/components/Container'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-8">
          404
        </p>
        <h1 className="text-5xl md:text-7xl font-light text-neutral-900 dark:text-neutral-100 leading-none mb-10">
          Page not found.
        </h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 pb-0.5"
        >
          Return home
        </Link>
      </Container>
    </section>
  )
}
