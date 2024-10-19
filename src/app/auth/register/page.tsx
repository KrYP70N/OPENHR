import { Button, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Register() {
  return (
    <section>
      <div className='text-center text-primary mb-10'>
        <h1 className='text-xl font-bold'>GMP HRMS</h1>
        <h2 className='text-lg'>REGISTER NEW ACCOUNT</h2>
      </div>

      <form>
        <TextField variant='outlined' label='User Name' size='small' fullWidth className='mb-5' />
        <TextField variant='outlined' label='E-mail' size='small' fullWidth className='mb-5' />
        <TextField variant='outlined' label='Password' size='small' fullWidth type='password' className='mb-5' />
        <Link href='/auth/login' className='underline mb-5 text-yellow-600 font-light inline-block'>I already have an account.</Link>
        <Button variant='contained' fullWidth className='bg-primary'>SUBMIT</Button>
      </form>
    </section>
  )
}
