import React from 'react'
import { motion } from "framer-motion";
import './Home.css'

const Home = () => {

    const text = "Santosh Kumar Pasi".split(" ");
    const clg = "From Kalyani Government Engineering College".split(" ");
    const content = {
        margin: '0% 0% 10% 10%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    }
    return (
        <div className='home-body'>
            <div style={content}>
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
        </div>
    )
}

export default Home
