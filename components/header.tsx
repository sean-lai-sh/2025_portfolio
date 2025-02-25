import React from 'react'
import Link from 'next/link'
const Header = () => {
  const linkCSS = "px-3 lg:px-4 py-2 hover:bg-white hover:shadow-gray-500 hover:text-black ease-in-out rounded-md shadow-sm"
  return (
    <div className='w-full sm:min-h-16 bg-gray-900 text-white fixed items-center justify-between sm:pl-10 sm:p-5 p-2 py-5 pl-2 top-0'>
        <Link href="/" className={`${linkCSS}`}>
            Home
        </Link>
        <Link href="/projects" className={`${linkCSS}`}>
            Projects
        </Link>
        <Link href="/community" className={`${linkCSS}`}>
            Building...
        </Link>
    </div>
  )
}

export default Header