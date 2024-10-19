import Link from 'next/link'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCardIcon from '@mui/icons-material/AddCard';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BadgeIcon from '@mui/icons-material/Badge';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Aside() {
  return (
    <aside className='w-[280px] h-[100vh] border-r-gray-400 shadow-md overflow-auto'>
      <h1 className='bg-primary text-white text-center p-3'>GMP HRMS</h1>

      <ul className='p-4 font-light'>
        <li className='fex items-center mb-5'>
          <Link href='/' className='hover:text-primary font-semibold'><DashboardIcon className='mr-3'/> Dashboard</Link>
        </li>

        <li className='fex items-center mb-5'>
          <Link href='/' className='hover:text-primary font-semibold'><AddCardIcon className='mr-3'/> Attendance</Link>

          <ul className='ml-10 mt-3'>
            <li className='fex items-center mb-3'>
              <Link href='/' className='hover:text-primary'>Attendance listing</Link>
            </li>
            <li className='fex items-center'>
              <Link href='/' className='hover:text-primary'>Manage shift</Link>
            </li>
          </ul>
        </li>

        <li className='fex items-center mb-5'>
          <Link href='/' className='hover:text-primary font-semibold'><EventBusyIcon className='mr-3'/> Leave</Link>

          <ul className='ml-10 mt-3'>
            <li className='fex items-center mb-3'>
              <Link href='/' className='hover:text-primary'>Leave listing</Link>
            </li>
            <li className='fex items-center'>
              <Link href='/' className='hover:text-primary'>Manage leave type</Link>
            </li>
          </ul>
        </li>

        <li className='fex items-center mb-5'>
          <Link href='/' className='hover:text-primary font-semibold'><MoreTimeIcon className='mr-3'/> Overtime</Link>
        </li>

        <li className='fex items-center mb-5'>
          <Link href='/' className='hover:text-primary font-semibold'><ShoppingBagIcon className='mr-3'/> Organization</Link>
        </li>

        <li className='fex items-center mb-5'>
          <Link href='/' className='hover:text-primary font-semibold'><BadgeIcon className='mr-3'/> Employee</Link>

          <ul className='ml-10 mt-3'>
            <li className='fex items-center mb-3'>
              <Link href='/' className='hover:text-primary'>Employee listing</Link>
            </li>
            <li className='fex items-center'>
              <Link href='/' className='hover:text-primary'>Create Employee</Link>
            </li>
          </ul>
        </li>

        <li className='fex items-center mb-5'>
          <Link href='/' className='hover:text-primary font-semibold'><SettingsIcon className='mr-3'/> Setting</Link>
        </li>
      </ul>
    </aside>
  )
}
