import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Barbs Corbelleri — Diseñadora Gráfica & Directora de Arte',
    template: '%s — Barbs Corbelleri',
  },
  description:
    'Diseñadora gráfica especializada en motion graphics y dirección de arte. Creando piezas visuales con estética, estrategia y movimiento.',
  openGraph: {
    title: 'Barbs Corbelleri — Diseñadora Gráfica & Directora de Arte',
    description:
      'Diseñadora gráfica especializada en motion graphics y dirección de arte. Creando piezas visuales con estética, estrategia y movimiento.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/*
          Anti-flicker theme script.
          Runs synchronously before React hydration to apply the correct
          dark/light class based on localStorage or system preference.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme'),s=window.matchMedia('(prefers-color-scheme: dark)').matches,r=t||(s?'dark':'light');if(r==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans bg-neutral-50 dark:bg-dark-bg text-neutral-900 dark:text-neutral-100 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
