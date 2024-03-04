import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards';
import projects from './Projectlist';

const Project = () => {
  const [backgroundColor, setBackgroundColor] = useState("#000"); // Initial background color
  const settings = {   
    className: "center", // You can modify this class name if needed
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 2,
    speed: 500
  };

  return (
    <>
      <div style={{backgroundColor:'grey',padding:"50px"}}>        
        <div style={{ margin: "20px auto", width: "80%" }}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Cards
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                hostedLink={project.hostedLink}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Project;
