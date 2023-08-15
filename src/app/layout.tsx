import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `Renan Saldanha's portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
    >
      <head>
        <link rel="icon" href='https://img.icons8.com/laces/64/code-folder.png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
