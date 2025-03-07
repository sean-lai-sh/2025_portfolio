'use client'
import React from 'react'
import Link, {LinkProps} from 'next/link'
import {useRouter} from 'next/navigation'
interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

// function sleep(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

const TransitionLink = ({children, href, className, ...props}: TransitionLinkProps) => {
    const router = useRouter();

    // const handleTransition = async (
    //     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    // ) => {
    //     e.preventDefault();

    //     // TODO: Perform Animation exit

    //     // Wait for animations to finish
    //     await sleep(500);
    //     router.push(href);

    //     // Run the enter animation
    // }

    return (
    <Link 
    onClick={(e) => {
        e.preventDefault(); // Requires us to remove us from the default behavior
        router.push(href);
    }}
    href={href} className={`${className}`}{...props}>
        {children}
    </Link>
  )
}

export default TransitionLink;