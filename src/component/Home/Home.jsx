import React from 'react'
import Navbar from '../Navbar/Navbar'
const Home = () => {

    const content = {
        // border : '1px red solid',
        margin : '0px 0px 0px 60px',
    }


    return (
        <>
            <div className='container'>
                <div className='container-navBar'>
                    <Navbar />
                </div>
                <div className='container-body'>
                   <div style={content}>
                    <h3>Software Engineer</h3>
                    <h1>Hi, I'm <span style={{color:'red'}}>Santosh Kumar Pasi</span></h1>
                    <h2> From Kalyani Government Engineering College</h2>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Home
