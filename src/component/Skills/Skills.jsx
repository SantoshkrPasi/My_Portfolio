import React from "react";
import Circular from "./Circular";
import Lottie from "lottie-react";
import Arrow from "./Arrow.json";
import skills from './Lists'
import Image from './background.jpg'
import './skills.css'

const Skills = () => {

    const content = {
        backgroundColor: 'grey',
        height: '100vh',
        backgroundImage: `url(${Image})`,
    };
    //  const contentSkillGrid = {};

    return (
        <div style={content}>
            <div className="contentCircle">
                <Circular name="CONCEPT" count="1" />
                <Lottie animationData={Arrow} className="animation" />
                <Circular name="DESIGN" count="2" />
                <Lottie animationData={Arrow} className="animation" />
                <Circular name="CODING" count="3" />
                <Lottie animationData={Arrow} className="animation" />
                <Circular name="LAUNCH" count="4" />
            </div>
                 <div style={{margin : '50px'}}>
                    <div className="skills-grid">
                        {skills.map((item, index) => (
                            <div key={index} className="skill-item">
                                <img src={item.image} alt={item.skill} />
                                <p>{item.skill}</p>
                                <div className="skill-rating">
                                    <div className="skill-rating-filled" style={{ width: `${item.rating}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Skills;
