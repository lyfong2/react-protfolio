import React from 'react';
import './MainInfoSection.css';
import UserPhoto from '../../images/profile-image.png';

const MainInfoSection = () => {
    return (
        <div className="container main-info-section">
            <div className="text">
                <h1>
                <span>H</span>
                <span className="m-left">i</span>
                <span className="m-left">,</span>
                <br/>
                <span>I</span>
                <span className="m-left">'</span>
                <span className="m-left">m</span>
                <span className="name">D</span>
                <span className="m-left name">a</span>
                <span className="m-left name">n</span>
                <span className="m-left name">n</span>
                <span className="m-left name">y</span>
                <span className="m-left">,</span>
                <br/>
                <span>W</span>
                <span className="m-left">e</span>
                <span className="m-left">b</span>
                <span>D</span>
                <span className="m-left">e</span>
                <span className="m-left">s</span>
                <span className="m-left">i</span>
                <span className="m-left">g</span>
                <span className="m-left">n</span>
                <span className="m-left">e</span>
                <span className="m-left">r</span>
                <span className="m-left">.</span>
                </h1>
                <p>CSS / JavaScript / React</p>
                <a href="mailto:lin.ti@husky.neu.edu">contact me</a>
            </div>
            <div className="profile-image">
                <img src={UserPhoto} alt="profile-image-white"/>
            </div>
        </div>
    )
}

export default MainInfoSection
