import React from 'react'
import Typewriter from './Typewriter'
import Image from './background.jpg'
import './About.css'

const About = () => {
  const text = ""

  return (
    <div  className=' p-10 h-full min-h-screen flex justify-center items-center' style={{backgroundImage: `url(${Image})`}}>
      <div className="min-w-screen lg:w-4/5 flex-col gap-10">
          <h1 className='text-center m-10 tracking-widest text-black-500 md:text-xl dark:text-gray-400 lg:text-4xl font-extrabold'>about me</h1>  
        <div className='tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 italic h-3/4 flex-col justify-center items-center p-10 m-10'>
          <p className='text-none lg:text-center lg:h-40' ><Typewriter text="Hi, I'm a Full Stack Developer skilled in C/C++, Python, JavaScript, React.js, Node.js, Java, Spring Boot, and more.
I love building user-friendly web applications, solving challenging problems, and constantly learning new technologies. I’m looking to join a team that values innovation and shares my passion for creating impactful solutions." 
         delay={50}
         /></p>
        </div>
      </div>
    </div>
  )
}

export default About
