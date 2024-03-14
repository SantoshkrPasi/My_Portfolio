import React from 'react'
import { motion } from "framer-motion";

const Cards = (props) => {
  return (
    <div className='w-4/5 rounded-xl bg-green-600 bg-opacity-20 p-5' >
      <div className='p-2 h-3/4 flex-col justify-center items-center'>
        <img src={props.image} alt="Project" className='h-60 flex-col justify-center items-center w-80 rounded-xl' />
      </div>
      <div className='flex-col justify-start items-start'>
        <h3 style={styles.title}>{props.title}</h3>
        <p style={styles.description}>{props.description}</p>
      </div>
        <div className='m-5 flex gap-5 justify-center items-center'>
        <motion.button whileTap={{ scale: 0.85 }}>
          <a href={props.hostedLink} style={styles.button} target="_blank" rel="noopener noreferrer" className='h-5/4 w-6/4'>View Project</a>
        </motion.button>
        <motion.button whileTap={{ scale: 0.85 }}>
          <a href={props.githubLink} style={styles.button} target="_blank" rel="noopener noreferrer" className='h-5/4 w-6/4'>GitHub Repo</a>
        </motion.button>          
      </div>
    </div>
  )
};


const styles = {

  title: {
    fontFamily: 'cursive',
    textAlign :'center'
  },
  description: {
    fontFamily: 'system-ui', 
    textAlign :'center',  
  },
  button : {
    backgroundColor: '#c2fbd7',
    borderRadius: '100px',
    boxShadow: 'rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px',
    color: 'green',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif',
    padding: '8px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 250ms',
    border: '0',
    fontSize: '70%',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
  },
};




export default Cards