import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '../lib/shadcnui/utils'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'MRP',
  description: 'Sistema MRP'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="pt-br">
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  )
}
