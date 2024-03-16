import React from 'react'
import { motion } from "framer-motion";
import './Home.css'
import Image from '../About/Profile.png'
import Typewriter from '../About/Typewriter'

const Home = () => {
    return (
        <div className='bg-red-600 min-h-screen flex items-center justify-center'>
            <div className='bg-green-500 max-h-screen h-5/6 w-5/6 justify-center items-center flex gap-10 flex-col-reverse lg:flex-row'>
                <div className='bg-blue-800 h-3/4 w-4/5 m-10'>
                    <h3>Hello, I am</h3>
                    <h1>Santosh Kumar Pasi </h1>
                    <h1>I'm a Full Stack</h1>
                    <h1>Developer</h1>
                    <p><Typewriter text="Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality" delay={50}/></p>
                    <div className='m-10'>
                        <button type="button" className="inline-flex items-center text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download Resume</span></button>
                    </div>
                </div>
                <div className='bg-pink-800  h-3/4 w-2/5 m-10 flex justify-center items-center'>
                    <img src={Image} alt="iamge" className='w-5/6 lg:w-4/6 opacity-70 border-4 border-solid border-gray-300 rounded-full shadow-md' />
                </div>
            </div>
        </div>
    )
}

export default Home
