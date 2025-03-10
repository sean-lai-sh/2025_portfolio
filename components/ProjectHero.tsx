'use client';
import React from 'react'
import ProjectBox from './projectBox'
const ProjectHero = () => {
  return (
    <div className='w-full h-fit'>
        <h2 className='text-4xl text-black hover:text-slate-900 pb-10 text-center'> Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 offset-spacing'>
          <ProjectBox
          ProjName='AutoGo'
          TechStack='React, TailwindCSS'
          Liner='Self playing chinese chess board'
          frontImg='test.jpg'
          backImg='final.jpg'
          CTA='View Design Report'
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