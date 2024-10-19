import { Button, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function ResetPassword() {
  return (
    <section>
      <div className='text-center text-primary mb-10'>
        <h1 className='text-xl font-bold'>GMP HRMS</h1>
        <h2 className='text-lg'>SET NEW PASSWORD</h2>
      </div>

      <form>
        <TextField variant='outlined' label='Enter new password' size='small' fullWidth className='mb-5' />
        <TextField variant='outlined' label='Confirm your new password' size='small' fullWidth className='mb-5' />
        <Button variant='contained' fullWidth className='bg-primary mb-5'>SET NEW PASSWORD</Button>
        <p className='font-light text-center'>Back to <Link href="/auth/login" className='underline font-bold text-primary'>sign in</Link> ?</p>
      </form>
    </section>
  )
}
