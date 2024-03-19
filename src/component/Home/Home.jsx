import React from 'react'
import Image from '../About/Profile.jpeg'
import Typewriter from '../About/Typewriter'

const Home = () => {

    const downloadTxtFile = () => {
        fetch("Santosh Kumar Pasi Updated Resume.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Santosh Kumar Pasi Updated Resume.pdf";
                alink.click();
            });
        });
    }


    return (
        <div className='bg-cyan-900 min-h-screen flex items-center justify-center'>
            <div className='  h-5/6 w-5/6 justify-center items-center flex gap-10 flex-col-reverse lg:flex-row'>
                <div className=' h-3/4 w-4/5 m-10 flex-col justify-center items-center'>
                    <h3 className='font-sans text-xl m-2 italic'>Hello, I am</h3>
                    <h1 className='font-mono text-2xl m-2 italic'>Santosh Kumar Pasi </h1>
                    <h1 className='font-mono text-2xl m-2 italic'>I'm a Full Stack</h1>
                    <h1 className='font-mono text-2xl m-2 italic'>Developer</h1>
                    <p className='font-serif text-sm italic mt-5 mb-2 h-10'><Typewriter text="Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality" delay={50} /></p>
                    <div className='m-auto mt-10'>
                        <button type="button" value="download" onClick={downloadTxtFile} className="inline-flex items-center text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-1  lg:px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Download Resume</span></button>
                    </div>
                </div>
                <div className='w-2/5 h-4/5 mt-20 lg:m-10 flex justify-center items-center'>
                    <img src={Image} alt="iamge" className='w-5/9 h-5/6 lg:w-4/6 border-4 border-solid border-gray-300 rounded-full shadow-md' />
                </div>
            </div>
        </div>
    )
}

export default Home
