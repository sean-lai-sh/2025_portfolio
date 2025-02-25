'use client';   
import React , {useState, useEffect }from 'react'
import {motion} from 'framer-motion'
import {experienceData, skillsData} from '@/utils/textData';
const Experience = () => {
  const formatSkills = (skills: Array<string>) => {
    return skills.join().replace(/,/g, ' • ')
  }
  return (
    <div>
        <h2 className='text-3xl text-semibold'>Experience</h2>
        <div>
            {
                Object.entries(experienceData).map(([keys, exp])=> (
                    <ExpTag 
                    key={keys} 
                    position={exp.role} 
                    dates={exp.date} 
                    skills={exp.skills} 
                    shortDescript={exp.shortDescript}
                />))
            }
        </div>
        <div className='pt-4'>
            <h2 className='w-full border-b-2 border-gray-500 '>Skills</h2>
            {
                Object.entries(skillsData).map(([keys, skills]) => (
                    <div key={keys} className=''>
                        <h3 className='t'>{keys}:{formatSkills(skills)}</h3>
                        <h3 className=''></h3>
                    </div>
                ))
            }
            
        </div>
            
    </div>
  )
}

export default Experience



const ExpTag = ({position, dates, skills, shortDescript} : {position: string, dates:string, skills:Array<String>, shortDescript:string}) => {
    const [hovered, setHovered] = useState(false);
    const myRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
      // Detect if the user is hovering over the element
        const node = myRef.current;
        if(node){
            node.addEventListener('mouseenter', () => setHovered(true));
            node.addEventListener('mouseleave', () => setHovered(false));
        }
        if(hovered){
            console.log('Hovered');
        }else{
            console.log('Not Hovered');
        }
        return () => {
            node?.removeEventListener('mouseenter', () => setHovered(true));
            node?.removeEventListener('mouseleave', () => setHovered(false));
        }
    }, [hovered])

    const animation ={
        initial: {
            opacity:0,
            y:10,
        },
        afterHover :{
            opacity:1,
            y:0,
            transition :{
                duration:0.5,
                ease: 'easeInOut'
            }
        },
        postHover : {
            opacity:0,
            y:10,
            transition :{
                duration:0.5,
                ease: 'easeInOut'
            }
        }
    };
    // Joins by the middle dot and space 
    const skillArrFormat = skills.join().replace(/,/g, ' • ')
    return (
      <div ref={myRef} 
        className='w-full text-xl border-b-2 border-black hover:border-blue-400 md:py-4 md:hover:pb-6 hover:border-b-[6px] transition-all duration-300 ease-in-out hover:cursor-pointer'>
        <div className='md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid h-fit'>
            <h3 className='text-left flex min-w-[70%] w-fit md:col-span-3 row-span-2 h-fit'>{position}</h3>
            <h3 className='md:text-right h-fit'>{dates}</h3>
        </div>
        {/* On hover showcase the  */}
        <div>
            <div className='text-lg font-bold hidden md:block'>
                {skillArrFormat}
            </div>
            {
                hovered && <motion.div className='text-black text-lg '  variants={animation} initial={'initial'} animate={hovered ? `afterHover` : `postHover`}  >
                    {shortDescript}
                </motion.div>
            }
        </div>
      </div>
    )
  }
  