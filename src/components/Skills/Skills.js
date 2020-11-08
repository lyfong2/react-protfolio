import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div class="container skills" id="skills">
            <h1>Skills</h1>
            <p class="skills-info">Front-End Developer with around 5 years of experience in Web Designing and User Interface Development using Web Technologies. Experienced in ReactJS, HTML5, CSS3</p>
            <div class="html">
                <div class="tag-react">
                    <p>React</p>
                </div>
                <div class="progressbar">
                    <div class="bar-react"></div>
                </div>
            </div>
            <div class="html">
                <div class="tag-css">
                    <p>CSS</p>
                </div>
                <div class="progressbar">
                    <div class="bar-css"></div>
                </div>
            </div>
            <div class="html">
                <div class="tag-javascript">
                    <p>JavaScript</p>
                </div>
                <div class="progressbar">
                    <div class="bar-javascript"></div>
                </div>
            </div>
            <div class="html">
                <div class="tag-node">
                    <p>Node</p>
                </div>
                <div class="progressbar">
                    <div class="bar-node"></div>
                </div>
            </div>
            <div class="html">
                <div class="tag-mongodb">
                    <p>MongoDB</p>
                </div>
                <div class="progressbar">
                    <div class="bar-mongodb"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
