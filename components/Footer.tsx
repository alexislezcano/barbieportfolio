import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            © {year} Barbs Corbelleri. Todos los derechos reservados.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            Diseñadora Gráfica & Directora de Arte
          </p>
        </div>
      </Container>
    </footer>
  )
}
