import React from 'react'
import profileImage from './Profile.png';

const About = () => {
  const container = {
    border : '2px red solid',
    display : 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height:'100vh',
    backgroundColor : 'aliceblue',
  }
  const containerImage=
  {
   height : '500px',
   width : '400px',
   margin : "30px",
   boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
   borderRadius :'50%',
}
  const containerContent=
  {
    height :'450px',
    width : '800px',
    margin : "20px",
    padding: '30px',
    color:'black',
    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    // backgroundColor :'#2F4F4F',
  }
  return (
    <div style={container}>
      <div > 
        <img src={profileImage} alt="profile" style={containerImage} />       
      </div>
      <div style={containerContent}>  
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit nesciunt ipsam rem, et vitae excepturi. Rem magnam totam maxime magni nesciunt a, quidem consectetur obcaecati unde numquam, odio libero!
        </p>
        <h3>           
           Kalyani Government Engineering College ,Kalyani         CGPA : 8.7
           B-Tech in Information Technology                      August 2021 - May 2024
        </h3>           
        <h3>           
           Kalyani Government Engineering College ,Kalyani         CGPA : 8.7
           B-Tech in Information Technology                      August 2021 - May 2024
        </h3>           
      </div>
    </div>
  )
}

export default About
