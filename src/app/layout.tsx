import TRPCProvider from '@/provider/TRPCProvider'
import './globals.css'
import React from 'react'

export default function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='text-slate-600'>
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
  )
}
