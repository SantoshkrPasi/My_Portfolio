import React from 'react'
import { motion } from "framer-motion";

const Cards = (props) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={props.image} alt="Project" style={styles.image} />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>{props.title}</h2>
        <p style={styles.description}>{props.description}</p>
        <div style={styles.buttonContainer}>
        <motion.button whileTap={{ scale: 0.85 }}>
          <a href={props.hostedLink} style={styles.button} target="_blank" rel="noopener noreferrer">View Project</a>
          <a href={props.githubLink} style={styles.button} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </motion.button>          
        </div>
      </div>
    </div>
  )
};


const styles = {
   card: {
    backgroundColor:  'rgba(255, 255, 255, 0)',
    height: '500px',
    width: '400px',
    margin : '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    overflow: 'hidden',
    marginBottom : '200px',
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '20px',
    marginBottom: '10px',
    color: 'white',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
    color: 'white',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'grey',
    color: '#fff',
    borderRadius: '30%',
    border: 'none',
    margin: '0 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    textDecoration: 'none',
  },
};

if (window.matchMedia("(max-width: 560px)").matches) {
  styles.card.width = '300px';
  styles.card.height = '500px';
  styles.title.fontSize = '10px';
  styles.description.fontSize = '10px';
  styles.button.padding = '2px 8px';
  styles.button.margin = '10px';
  styles.card.margin = '50px';
}


export default Cards