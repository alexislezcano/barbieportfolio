import type { ReactNode } from 'react'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'

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

/**
 * Root layout — the <html> and <body> elements live here.
 * This component is PERMANENT and never re-renders during client-side navigation.
 * That guarantees React never reconciles (and therefore never clears) the `class`
 * attribute we add to <html> with the anti-flicker theme script or ThemeToggle.
 *
 * The `lang` attribute is set synchronously by LocaleLangSyncer (a child client
 * component in the locale layout) so it always reflects the active locale.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/*
          Anti-flicker theme script — runs synchronously before React hydration
          to apply the correct dark/light class from localStorage or system preference.
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
        {children}
      </body>
    </html>
  )
}
