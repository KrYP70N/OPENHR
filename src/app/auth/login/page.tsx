import { Button, Checkbox, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <section>
      <div className='text-center text-primary mb-10'>
        <h1 className='text-xl font-bold'>GMP HRMS</h1>
        <h2 className='text-lg'>LOGIN TO YOUR ACCOUNT</h2>
      </div>

      <form>
        <TextField variant='outlined' label='User Name' size='small' fullWidth className='mb-5' />
        <TextField variant='outlined' label='Password' size='small' fullWidth type='password' />
        <Link href='/auth/forgot-password' className='underline mb-5 mt-1 text-yellow-600 font-light'>I forgot password</Link>
        <div className='mb-5'>
          <Checkbox className='pl-0' id='remember' size='small' defaultChecked />
          <label htmlFor='remember' className='cursor-pointer'>Remember me</label>
        </div>
        <Button variant='contained' fullWidth className='bg-primary mb-5'>LOGIN</Button>
        <Button href='/auth/register' variant='contained' fullWidth className='bg-green-700'>CREATE NEW BUSINESS ACCOUNT</Button>
      </form>
    </section>
  )
}
