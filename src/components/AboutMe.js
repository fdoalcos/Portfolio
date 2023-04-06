import React, { useState, useEffect, useRef } from 'react';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';
// import AestheticBrain from './images/AestheticBrain.png'
import { useInView } from 'react-intersection-observer';



function AboutMe(props) {


    // const { ref: aboutRef, inView: isAboutVisible } = useInView();


    // console.log("About is", isAboutVisible)

    const aboutRef = useRef();
    const [isVisible, setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting && window.scrollY != 0) {
                entry.target.classList.add("showElement")
                console.log("I am showing element")
            } 
        })
    })

    const elements = aboutRef.current.querySelectorAll('.hiddenElement')
        elements.forEach(element => {
            observer.observe(element);
        })
    }, [])

    


    
    return (
        <div id="about">
    
            <GradientPurple />
            <GradientBlue />
            <div>
                <section ref={aboutRef}>
                    <div className="hiddenElement aboutContainer">
                        <div className="hiddenElement aboutColumns">
                            <div className="hiddenElement aboutImages">
                                <img className="hiddenElement aboutImage" src='/images/AestheticBrain.png'/>
                            </div>
                            <div className="hiddenElement aboutMainName">
                                <h1 className="hiddenElement aboutName">About Me</h1>
                                <h1 className="hiddenElement aboutSubName">I enjoy developing and contributing my skills to the team</h1>
                                <p className='hiddenElement aboutInfo'>I am a Full-Stack Web Developer with passion to grow and contribute my skills to the team. I am currently a first-year student studying Computer Science at University of Massachusetts  Boston and very passionate about development.</p>
                                <p className='hiddenElement aboutInfo'>I am a Full-Stack Web Developer with passion to grow and contribute my skills to the team. I am currently a first-year student studying Computer Science at University of Massachusetts  Boston and very passionate about development.</p>
                                <p className='hiddenElement aboutInfo'>I am a Full-Stack Web Developer with passion to grow and contribute my skills to the team. I am currently a first-year student studying Computer Science at University of Massachusetts  Boston and very passionate about development.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutMe;