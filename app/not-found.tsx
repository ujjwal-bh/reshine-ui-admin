import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function notFound() {

  return (
    <main className='flex flex-col gap-4 items-center justify-center h-[80vh]'>
        <div className='flex items-center gap-4'>
        <span className='font-black text-5xl'>404 </span>
        <h1 className='text-2xl font-semibold'>Page Not found</h1>
        </div>
        <Link href='/'>
        <Button>
            Home Page
        </Button>
        </Link>

    </main>
  )
}
