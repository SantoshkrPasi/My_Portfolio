import React from "react";
import Circular from "./Circular";
import Lottie from "lottie-react";
import Arrow from "./Arrow.json";
import skills from './Lists'
import './skills.css'

const Skills = () => {

    const content = {
        backgroundColor: 'grey',
        height: '100vh',
    };
    const contentCircle = {
        paddingTop : '50px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const animation = {
        height: "150px",
        width: "150px",
    };
     const contentSkillGrid = {};


    return (
        <div style={content}>
            <div style={contentCircle}>
                <Circular name="CONCEPT" count="1" />
                <Lottie animationData={Arrow} style={animation} />
                <Circular name="DESIGN" count="2" />
                <Lottie animationData={Arrow} style={animation} />
                <Circular name="CODING" count="3" />
                <Lottie animationData={Arrow} style={animation} />
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
