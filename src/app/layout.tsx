import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayush Srivastava - Full Stack Developer & Software Engineer',
  description: 'Personal portfolio of Ayush Srivastava, Full Stack Developer and Software Engineer specializing in web development, backend systems, and workflow automation.',
  keywords: ['portfolio', 'developer', 'full stack', 'web development', 'backend', 'software engineer', 'Ayush Srivastava'],
  authors: [{ name: 'Ayush Srivastava' }],
  creator: 'Ayush Srivastava',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 