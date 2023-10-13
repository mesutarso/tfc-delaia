// @ts-nocheck
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const poppins = Poppins({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Gescartes - SCPT',
  description: 'Gescartes - SCPT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header />
        <main className='min-h-screen grid place-items-center'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
