import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <header className='p-3 shadow-sm w-[100%] flex justify-between'>
      <div className='flex items-center'>
        <MenuIcon className='mr-4'/>
        <ul className='flex text-slate-400'>
          <li className='mr-3'>Dashboard</li>
          {/* upcoming feature (breadcrumb) */}
        </ul>
      </div>
      <ul className='flex text-slate-700'>
        <li className='flex items-center mr-4'>
          <span className='text-primary mr-3 cursor-pointer hover:text-secondary'>EN</span> | <span className='ml-3 cursor-pointer hover:text-secondary'>MM</span>
        </li>
        <li className='mr-4'>
          <MailIcon />
        </li>
        <li>
          <AccountCircleIcon />
        </li>
      </ul>
    </header>
  )
}
