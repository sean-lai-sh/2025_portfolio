import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='w-full min-h-16 bg-gray-900 text-white fixed items-center justify-between pl-10 p-4 top-0'>
        <Link href="/" className='pr-4 lg:pr-6'>
            Home
        </Link>
        <Link href="/projects" className='pr-4 lg:pr-6'>
            Projects
        </Link>
        <Link href="/community" className='pr-4 lg:pr-6'>
            Building...
        </Link>
    </div>
  )
}

export default Header