'use client'
import React, {useRef} from 'react'
import {useHover} from '@uidotdev/usehooks'
import Transition from './transition'
const ProjBox = ({ProjName, TechStack, Liner, frontImg,backImg, CTA, designReport=""} : {
    ProjName: string;
    TechStack: string;
    Liner: string;
    frontImg: string;
    backImg: string;
    CTA: string;
    designReport: string;
}) => {
  const transitionRef = useRef<HTMLDivElement>(null); 
  const [hoverRef, isHovered] = useHover()
  return (
    <div 
    ref = {hoverRef}
    className='w-[20rem] bg-black h-[25rem] items-center flex flex-col shadow-blue-500 hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-out rounded-lg p-2 pointer-events-auto cursor-pointer'>
        <div className='w-[100%] h-[60%] items-center inset-0 '>
            <Transition transition={isHovered} ref={transitionRef} frontImg={frontImg} backImg={backImg}>
                <div>
                </div>
            </Transition>
        </div>
        <div className='text-white text-left items-start justify-normal w-full'>
            <h2 className='text-2xl py-2'>{ProjName}</h2>
            <p>{Liner}</p>
            <p>{TechStack}</p>
            <a href={designReport}>{CTA}</a>
        </div>
    </div>
  )
}

export default ProjBox