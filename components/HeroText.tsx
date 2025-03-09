'use server';
import React from 'react';
import AnimatedText from './animatedtext';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillGitlab } from "react-icons/ai";

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
      ease: [0.33, 1, 0.68, 1],
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
      ease: [0.33, 1, 0.68, 1],
    },    
  },
};

const socialsCSS = "w-7 h-7 ease-in-out duration-300 font-light text-slate-700";

const HeroText = ({ tagline = "Building products & communities together" }: { tagline?: string }) => {
  return (
    <div>
      <h1 className="pt-40 text-5xl pb-3 font-bold">
        <AnimatedText text="Sean Lai" containerVariants={titleContainerVar} charVariants={titleCharVar} />
      </h1>
      <h2 className="text-xl font-medium text-slate-900">
        <AnimatedText text={tagline} containerVariants={subtextContainerVar} charVariants={subtextCharVar} />
      </h2>
      <div className="w-full min-h-[5vh] flex flex-row pb-10">
        <Link href="https://linkedin.com/in/sean-sh-lai">
          <AiFillLinkedin className={`${socialsCSS} hover:text-blue-600`} />
        </Link>
        <Link href="https://github.com/sean-lai-sh">
          <AiFillGithub className={`${socialsCSS} hover:text-blue-800`} />
        </Link>
        <Link href="mailto:seanlai@nyu.edu">
          <AiFillMail className={`${socialsCSS} hover:text-green-600`} />
        </Link>
        <Link href="https://dev.hsrn.nyu.edu/seanlai">
          <AiFillGitlab className={`${socialsCSS} hover:text-orange-500`} />
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
