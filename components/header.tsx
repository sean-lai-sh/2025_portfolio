import React from 'react'
import TransitionLink from '../utils/transitionLink'
const Header = () => {
  const TransitionLinkCSS = "px-3 lg:px-4 py-2 hover:bg-white hover:shadow-gray-500 hover:text-black ease-in-out rounded-md shadow-sm"
  return (
    <div className='w-full sm:min-h-16 bg-gray-900 text-white fixed items-center justify-between sm:pl-10 sm:p-5 p-2 py-5 pl-2 top-0 z-[100]'>
        <TransitionLink href="/" className={`${TransitionLinkCSS}`}>
            Home
        </TransitionLink>
        <TransitionLink href="/projects" className={`${TransitionLinkCSS}`}>
            Projects
        </TransitionLink>
        <TransitionLink href="/community" className={`${TransitionLinkCSS}`}>
            Building...
        </TransitionLink>
    </div>
  )
}

export default Header