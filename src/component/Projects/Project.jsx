import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import projects from './Projectlist';
import Image  from './background/background.jpg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", height : '100%' , width:'30px' , marginRight:'10px',  backgroundColor: '#000', color: '#fff' ,opacity: '0.8',display:'flex' ,justifyContent:'center',alignItems:'center'}}     
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", height : '100%' , width:'30px' , marginRight:'10px',  backgroundColor: '#000', color: '#fff' ,opacity: '.8',display:'flex' ,justifyContent:'center',alignItems:'center',}}
      onClick={onClick}
    />
  );
}

const Project = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1058,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  return (
    <>
      <div className= 'h-screen w-screen flex justify-center items-center bg-cover bg-center' style={{backgroundImage: `url(${Image})`}}>
        <div className='w-5/6 h-4/5'>
            <Slider {...settings} className='bg-red-400 w-full h-full flex items-center justify-center bg-indigo-600 bg-opacity-20' variableWidth={false} centerMode={true}>
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
