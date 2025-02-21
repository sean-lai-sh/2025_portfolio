'use client';
import {motion} from 'framer-motion'
import React from 'react'
const anim = {
    initial: {
        opacity: 0,
    },
    open: (i : number)  => ({
        opacity: 1,
        transition: {
            duration: 0,
            delay: i * 0.04,
        },
    }),
    close: (i : number) => ({
        opacity: 0,
        transition: {
            duration: 0,
            delay: i * 0.04,
        },
    }),

}


function Transition({ children}: { children: React.ReactNode}) {

    const Fisher_YatesShuffle = (array: number[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const getBlocks = (blockSpace : number)  => {
        // Get the window/viewport at transition
        const {innerWidth, innerHeight} = window;
        const blockSize = innerWidth * blockSpace; // 5% of the viewport width
        const amtBlocks = Math.floor(innerHeight / blockSize) 
        const delays = Fisher_YatesShuffle([...Array(amtBlocks)].map((_, i) => i));
        return delays.map((randomDelay, i) => {
            return (
                <motion.div className={`h-[5vw] w-full bg-black`} key={i}
                 variants={anim} initial={"open"} animate={ "close"}
                 custom={randomDelay}></motion.div>
            )
        })
    }

    

    const setBlocks = () => {
        const {innerWidth, innerHeight} = window;
        // If Small set to 10vw else set to 5vw
        const blockSize = innerWidth < 768 ? 10 : 5;
        const blockSpace = innerWidth < 768 ? 0.1 : 0.05;
        return [...Array(20)].map( (_, i) => (
                    <div key={i} className={`w-[${blockSize}vw] h-full`}>
                        {getBlocks(blockSpace)}
                    </div>
                ))
                
    }
    return (
        <div className='relative'>
            {/* <div className='flex w-full min-h-[100vh] overflow-hidden z-10 absolute top-0 left-0'>
            {
                setBlocks()
            }
    
            </div>  */}
            <div className='relative z-0 mt-16 mx-10'>
                {children}
            </div>
        </div>
    )
}

export default Transition
