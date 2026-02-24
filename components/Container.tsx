interface ContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * Centered max-width wrapper.
 * All page sections use this for consistent horizontal rhythm.
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 ${className}`}>{children}</div>
  )
}
