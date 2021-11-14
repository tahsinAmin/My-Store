import React from 'react'
import Link from 'next/link'

export default function create() {
  return (
    <div>
      <h1 className='text-2xl font-bold'>create Page</h1>
      <Link href='/'><a className='text-purple-900 underline'>Go to Home Page</a></Link>
    </div>
  )
}
