import React from 'react'
import { motion } from "framer-motion";
import './Home.css'
import Image from '../About/Profile.png'

const Home = () => {

    const text = "Santosh Kumar Pasi".split(" ");
    const clg = "From Kalyani Government Engineering College".split(" ");
   
    return (
        <div className='bg-red-600 min-h-screen flex items-center justify-center'>
            <div className='bg-green-500 max-h-screen h-5/6 w-5/6 justify-center items-center flex'>
                <div className='bg-blue-800 h-3/4 w-2/4'>
                    <h3>Software Engineer</h3>
                    <h1>Hi, I'm <span style={{ color: 'red' }}>
                        {text.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1.0,
                                    delay: i / 20,
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}</span></h1>
                    <h2>
                        {clg.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1.0,
                                    delay: i / 30,
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                    </h2>
                </div>
                <div className='bg-yellow-800 h-3/4 w-2/4'>
                    <div>
                        <img src={Image} alt="iamge" className='w-3/4 h-3/4 m-10 opacity-70' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
