'use client';
import React from 'react'
import ProjectBox from './projectBox'
const ProjectHero = () => {
  return (
    <div className='w-full h-fit justify-center items-center'>
        <h2 className='text-4xl text-black hover:text-slate-900 pb-10 text-center'> Featured Projects</h2>
        <div className='w-full lg:px-40 px-5 items-center md:items-start relative overflow-hidden grid lg:gap-10 py-5 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]'>
          <ProjectBox
          ProjName='Project 1'
          TechStack='React, TailwindCSS'
          Liner='A simple project'
          frontImg='test.jpg'
          backImg='final.jpg'
          CTA='Design Report'
          designReport='#'
          />
          <ProjectBox
          ProjName='Project 1'
          TechStack='React, TailwindCSS'
          Liner='A simple project'
          frontImg='test.jpg'
          backImg='final.jpg'
          CTA='Design Report'
          designReport='#'
          />
          <ProjectBox
          ProjName='Project 1'
          TechStack='React, TailwindCSS'
          Liner='A simple project'
          frontImg='test.jpg'
          backImg='final.jpg'
          CTA='Design Report'
          designReport='#'
          />
          <ProjectBox
          ProjName='Project 1'
          TechStack='React, TailwindCSS'
          Liner='A simple project'
          frontImg='test.jpg'
          backImg='final.jpg'
          CTA='Design Report'
          designReport='#'
          />
          <ProjectBox
          ProjName='Project 1'
          TechStack='React, TailwindCSS'
          Liner='A simple project'
          frontImg='test.jpg'
          backImg='final.jpg'
          CTA='Design Report'
          designReport='#'
          />
          <ProjectBox
          ProjName='Project 1'
          TechStack='React, TailwindCSS'
          Liner='A simple project'
          frontImg='test.jpg'
          backImg='final.jpg'
          CTA='Design Report'
          designReport='#'
          />
        </div>


        
        <div className='w-full h-0 border-b-2 px-40'/>
        {/* Showcase ALL projects */}

    </div>
  )
}

export default ProjectHero