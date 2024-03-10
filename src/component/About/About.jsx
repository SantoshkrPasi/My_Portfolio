import React from 'react'
import profileImage from './Profile.png';
import './About.css'

const About = () => {
  const myStyle = {
    row: {
      textAlign: 'left',
      padding: '2px',
      fontSize: '15px',
      fontFamily: 'Helvetica',
      fontStyle: 'italic',
      margin: '10px',
    },
  };

  return (
    <div className='about'>
      <div className="about-main">
        <div className='about-content-first' >
          <img src={profileImage} alt="profile" className='about-image' />
        </div>
        <div className='about-content-second'>
          <h1>
            A Coder A Developer
          </h1>
          <hr style={{ border: "1px solid black", marginTop: "0.5rem", marginBottom: "0.5rem" }} />
          <p style={{ fontSize: "10px", fontFamily: 'Helvetica', fontStyle: 'italic', margin: "10px" }}>
            "Hello, I am Santosh Kumar Pasi, an undergraduate student currently pursuing a Bachelor of Technology in Information Technology from Kalyani Government Engineering College. I am a slow but unforgettable learner, endowed with a high density of patience."
          </p>
          <h3 style={{ margin: "10px", fontSize: "20px", color: 'black', fontStyle: 'italic' }}>
            Education
          </h3>
          <table>
            <thead>
              <tr>
                <td style={myStyle.row}>
                  <strong>Kalyani Government Engineering College </strong>
                  <p>(Bachelor of Technology in Information Technology)</p>
                </td>
                <td style={myStyle.row}>
                  <strong>2021 - 2024</strong>
                </td>
                <td style={myStyle.row}>
                  <strong>8.7</strong>
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td style={myStyle.row}>
                  <strong>KANYAPUR POLYTECHNIC </strong>
                  <p>(Diploma in Mechanical Engineering)</p>
                </td>
                <td style={myStyle.row}>
                  <strong>2018 - 2021</strong>
                </td>
                <td style={myStyle.row}>
                  <strong>8.0</strong>
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td style={myStyle.row}>
                  <strong>DAV PUBLIC SCHOOL</strong>
                  <p>..</p>
                </td>
                <td style={myStyle.row}>
                  <strong style={{ display: "flex" }}>2011 - 2018</strong>
                </td>
                <td style={myStyle.row}>
                  <strong>7.8</strong>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default About
