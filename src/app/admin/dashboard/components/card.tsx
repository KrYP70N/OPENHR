import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type DashboardCardProps = {
  children: React.ReactNode
  icon: string
  link: string
}

export default function DashboardCard({children, icon, link} : DashboardCardProps) {
  return (
    <div className='shadow-md p-4 relative rounded-md'>
      <div className="flex">
        <div className='w-[calc(60px)]'>
          <Image width={48} height={48} src={icon} alt='' />
        </div>
        <div className='w-[calc(100%-60px)]'>
          {
            children
          }
        </div>
      </div>
      <Link href={link} className='absolute top-0 left-0 w-[100%] h-[100%] z-1'></Link>
    </div>
  )
}
