'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import { AuthContextProvider } from './context/AuthContext'

// export const metadata = {
//   title: 'Auth System - Next/FireBase',
//   description: 'Learn about the Firebase authentication system with next.js',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar/>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
