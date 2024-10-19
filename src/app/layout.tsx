import TRPCProvider from '@/provider/TRPCProvider'
import './globals.css'
import React from 'react'

export default function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
  )
}
