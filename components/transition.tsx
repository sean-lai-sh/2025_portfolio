'use client';
import {motion} from 'framer-motion'
import React, {forwardRef, useRef, useImperativeHandle, useEffect, useState} from 'react'
// Animation styles for the glitch cubes
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


const Transition = forwardRef<HTMLDivElement, { children: React.ReactNode, transition: boolean, frontImg?:string, backImg?:string }>(
    ({ children, transition, frontImg, backImg }, ref) => { 
        Transition.displayName = 'Transition';   
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useImperativeHandle(ref, () => containerRef.current!);

    useEffect(() => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    }, []);

    //Used to create random shuffle of the glitch cubes
    const Fisher_YatesShuffle = (array: number[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const getBlocks = ()  => {
        // Get the window/viewport at transition
        const blockSpace = dimensions.width < 768 ? 0.1 : 0.05;
        const amtBlocks = Math.ceil(200 * (blockSpace));
        const delays = Fisher_YatesShuffle([...Array(amtBlocks)].map((_, i) => i));
        const glitchVariants = [
            'glitch-1', 'glitch-2', 'glitch-3', 'glitch-4', 'glitch-5', 'glitch-6',
            'glitch-7', 'glitch-8', 'glitch-9', 'glitch-10', 'glitch-11', 'glitch-12',
            'glitch-static'
        ];          
        return delays.map((randomDelay, i) => {
            const randomGlitch = glitchVariants[Math.floor(Math.random() * glitchVariants.length)]
            return (
                <motion.div className={`h-[5%] w-full ${randomGlitch} animate-glitch-colors z-[100]`} key={i}
                 variants={anim} initial={"initial"} animate={transition ? "close" : "open"}
                 custom={randomDelay}>

                 </motion.div>
            )
        })
    }

    

    const setBlocks = () => {
        // If Small set to 10vw else set to 5vw
        const blockSize = dimensions.width < 768 ? 10 : 5;
        const amtColumns = Math.ceil(100 / blockSize);
        return [...Array(amtColumns)].map((_, i) => (
            <div key={i} style={{ width: `${blockSize}%`, height: '100%' }} className="h-full">
              {getBlocks()}
            </div>
          ));
    }
    return (
        <div className='relative w-full h-full' ref={containerRef}>
            <motion.img
                src={frontImg? frontImg : 'test.jpg'}
                alt="Pixelated"
                className="absolute inset-0 w-full h-full object-cover z-[200]"
                initial={{ opacity: 1 }}
                animate={{ opacity: transition ? 0 : 1, zIndex: transition ? 0 : 200 }}
                transition={{ duration: 0.6,
                    delay: 0.05,
                 }}
            />
            <motion.img
                src={backImg? backImg : 'test.jpg'}
                alt="Pixelated"
                className="absolute inset-0 w-full h-full object-cover z-[200]"
                initial={{ opacity: 1 }}
                animate={{ opacity: transition ? 1 : 0, zIndex: transition ? 200 : 0 }}
                transition={{ duration: 0.6,
                    delay: 0.1,
                 }}
            />
            <div className='flex w-full h-full overflow-hidden z-10 absolute top-0 left-0'>
            {
                setBlocks()
            }
            </div> 
            <motion.div className='relative z-0' 
            variants={anim} initial={"initial"} animate={transition ? "open" : "close"}
            custom={0}
            >
                {children}
            </motion.div>
        </div>
    )
})

export default Transition
