import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.scss'
import { Sidebar } from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Feenix.ai Dashboard application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="row">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
