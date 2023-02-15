import React from 'react';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';
// import AestheticBrain from './images/AestheticBrain.png'

function AboutMe(props) {
    return (
        <div>
    
            <GradientPurple />
            <GradientBlue />
            <div>
                <section>
                    <div className="aboutContainer">
                        <div className="aboutColumns">
                            <div className="aboutImages">
                                <img className="aboutImage" src='/images/AestheticBrain.png'/>
                            </div>
                            <div className="aboutMainName">
                                <h1 className="aboutName">About Me</h1>
                                <h1 className="aboutSubName">I enjoy developing and contributing my skills to the team</h1>
                                <p className='aboutInfo'>I am a Full-Stack Web Developer with passion to grow and contribute my skills to the team. I am currently a first-year student studying Computer Science at University of Massachusetts  Boston and very passionate about development.</p>
                                <p className='aboutInfo'>I am a Full-Stack Web Developer with passion to grow and contribute my skills to the team. I am currently a first-year student studying Computer Science at University of Massachusetts  Boston and very passionate about development.</p>
                                <p className='aboutInfo'>I am a Full-Stack Web Developer with passion to grow and contribute my skills to the team. I am currently a first-year student studying Computer Science at University of Massachusetts  Boston and very passionate about development.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutMe;