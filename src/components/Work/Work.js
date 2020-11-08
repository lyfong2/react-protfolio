import React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div className="container work" id="work">
            <h1>Work</h1>
            <div className="work-category">
                <button id="designing" className="active" onclick="showRequiredCategory(this)">Web Designing</button>
                <button id="animation" onclick="showRequiredCategory(this)">Web Animation</button>
                <button id="project" onclick="showRequiredCategory(this)">React Projects</button>
            </div>
            <div className="category-designing showCategory">
                <a href="#"><img src="img/restaurant.png" alt="restaurant"/></a>  
            </div>
            {/* <div className="category-animation hideCategory">
                <a href="#"><img src="img/restaurant.png" alt="restaurant"/></a> 
            </div>
            <div className="category-project hideCategory">
                <a href=""><img src="img/1.png"/></a>
                <a href=""><img src="img/2.png"/></a>
                <a href=""><img src="img/3.png"/></a>
            </div> */}
        </div>
    )
}

export default Work
