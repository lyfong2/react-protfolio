import React from 'react';
import './Experiences.css';
import DottedImg from '../../images/dotted-shape.png';


const Experiences = () => {
    return (
        <div className="container experience" id="experience">
            <h1>Experiences</h1>
            <div className="experience-me-info">
                <div className="experience-description">
                    <h1>UI Developer Co-op student</h1>
                    <h2>Incluvie</h2>
                    <h3>Boston, MA, United States, 2019 - 2019</h3>
                </div>
                
                <div className="experience-description">
                    <h1>Front-End Software Engineer Intern</h1>
                    <h2>BrainCo</h2>
                    <h3>Somerville, MA, United States, 2018 – 2019</h3>
                </div>
                
                <div className="experience-description">
                    <h1>Software Engineer</h1>
                    <h2>Chung Hsin Electric</h2>
                    <h3>New Taipei City, Taiwan, 2016 – 2017</h3>
                </div>
                
                <div className="experience-description">
                    <h1>Full Stack Software Engineer</h1>
                    <h2>Pershing Systems Corporation</h2>
                    <h3>Taipei, Taiwan, 2012 – 2015</h3>
                </div>
            </div>
            <img src={DottedImg} alt="dotted-shape"/>
        </div>
    )
}

export default Experiences
