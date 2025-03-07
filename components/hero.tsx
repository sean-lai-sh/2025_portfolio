'use client';
import React, { useCallback } from 'react'
import AnimatedText from './animatedtext'
import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillGitlab } from "react-icons/ai";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const titleContainerVar = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const titleCharVar = {
    hidden: { opacity: 0, y: '0.5em' },
    visible: {
      opacity: 1,
      y: '0em',
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1], // More fluid easing
    },    
    },
  };
  const subtextContainerVar = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const subtextCharVar = {
    hidden: { opacity: 0, y: '0.75em' },
    visible: {
      opacity: 1,
      y: '0em',
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1], // More fluid easing
    },    
    },
  };
  

  const taglineText = useCallback(() =>{
    // if small remove the "together"
    if(windowSize.width < 780){
      return "Building products &\u00A0communities"
    }else{
      return "Building products &\u00A0communities together"
    }
    // else tdo the entire thing
  }, [windowSize.width])

  const socialsCSS = "w-7 h-7 ease-in-out duration-300 font-light text-slate-700"
  

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      taglineText();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [taglineText]);

  return (
    <div>
        <h1 className="pt-40 text-5xl pb-3 font-bold">
            <AnimatedText 
            text="Sean Lai" 
            containerVariants={titleContainerVar} 
            charVariants={titleCharVar}/>
        </h1>
        <h2 className="text-xl font-medium text-slate-900">
            <AnimatedText 
            text={taglineText()}
            containerVariants={subtextContainerVar}
            charVariants={subtextCharVar}/>
        </h2>
        <div className="w-full min-h-[5vh] flex flex-row pb-10">
          <Link href='https://linkedin.com/in/sean-sh-lai'>
              <AiFillLinkedin className={`${socialsCSS} hover:text-blue-600`}/>
          </Link>
          <Link href="https://github.com/sean-lai-sh">
            <AiFillGithub className={`${socialsCSS} hover:text-blue-800`}/>
          </Link>
          <Link href="mailto:seanlai@nyu.edu">
            <AiFillMail className={`${socialsCSS} hover:text-green-600`}/>
          </Link>
          <Link href="https://dev.hsrn.nyu.edu/seanlai">
            <AiFillGitlab className={`${socialsCSS} hover:text-orange-500`}/>
          </Link>
        </div>
    </div>
  )
}

export default Hero