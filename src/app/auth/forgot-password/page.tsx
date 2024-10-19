import { Button, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function ForgotPassowrd() {
  return (
    <section>
      <div className='text-center text-primary mb-10'>
        <h1 className='text-xl font-bold'>GMP HRMS</h1>
        <h2 className='text-lg'>Forgot Password</h2>
      </div>

      <form>
        <p className='font-light mb-5'>Enter your email address and your password will be reset and emailed to you.</p>
        <TextField variant='outlined' label='Email Address' size='small' fullWidth className='mb-5' />
        <Button variant='contained' fullWidth className='bg-primary mb-5'>SEND</Button>
        <p className='font-light text-center'>Back to <Link href="/auth/login" className='underline font-bold text-primary'>sign in</Link> ?</p>
      </form>
    </section>
  )
}
