import React from 'react'
import Aside from './components/aside'
import Navbar from './components/navbar'

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='flex h-[100%] overflow-hidden'>
      <Aside />
      <article className='w-[calc(100%-280px)] h-[100vh]'>
        <header>
          <Navbar />
          <section className="p-4">
            {children}
          </section>
        </header>
      </article>
    </main>
  )
}
