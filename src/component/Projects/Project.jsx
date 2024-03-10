import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards';
import projects from './Projectlist';
import Image from './background/background.jpg'
import './Project.css'

const Project = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <>
     <div className ='ProjectMain'>
  <div className ='ProjectContent'>
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
