import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards';
import projects from './Projectlist';
import Image from './background/background.jpg'

const Project = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
  };

  const ProjectMain = {
    backgroundImage: `url(${Image})`,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  return (
    <>
     <div style={ProjectMain}>
  <div style={{ height: '50%', width: '80%',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
    <Slider {...settings} >
      {projects.map((project, index) => (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
          <Cards
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            hostedLink={project.hostedLink}
          />
       </div>
      ))}
    </Slider>
  </div>
</div>

    </>
  );
};


export default Project;
