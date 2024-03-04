import React from 'react'
import  Image from '../Home/background-image.jpg'

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
          <a href={props.hostedLink} style={styles.button} target="_blank" rel="noopener noreferrer">View Project</a>
          <a href={props.githubLink} style={styles.button} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  )
};


const styles = {
  card: {
    backgroundColor: '#fff',
    height: '400px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    margin: '20px',
    overflow: 'hidden',
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
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#666',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    margin: '0 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
};


export default Cards