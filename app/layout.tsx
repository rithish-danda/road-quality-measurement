import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Road Quality Measurement',
  description: 'Measure road quality using satellite images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">
          <header className="h-16 py-4 px-8 flex justify-between items-center bg-transparent backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
            <h1 className="text-2xl font-bold">RQM</h1>
            <Navbar />
          </header>
          <main className="flex-grow pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

