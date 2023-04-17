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
            <GradientBlue classPosition={"aboutPosition"}/>
            <div>
                <section ref={aboutRef}>
                    <div className="aboutContainer">
                        <div className="aboutColumns">
                            <div className="hiddenElement aboutImages">
                                <img className="hiddenElement aboutImage" src={require('../images/AestheticBrain.png')} alt='brain'/>
                            </div>
                            <div className="aboutMainName">
                                <h1 className="hiddenElement aboutName">About Me</h1>
                                <h1 className="hiddenElement aboutSubName">I enjoy developing and contributing my skills to the team</h1>
                                <p className='hiddenElement aboutInfo'>I am a Full-Stack Web Developer with a passion for growing and contributing my skills to the team. I am currently a first-year student studying Computer Science at the University of Massachusetts Boston and am very passionate about development.</p>
                                <p className='hiddenElement aboutInfo'>I grew up in the Philippines and immigrated to the United States in 2021, since then, I explored new opportunities and learned new skills, including coding. Since beginning my journey as a coder, I have developed a love for the craft and am dedicated to growing as a developer.</p>
                                <p className='hiddenElement aboutInfo'>To achieve my goals, I focus on continually learning and building new projects. This approach has helped me advance my coding journey and has enabled me to code most of the time. I am eager to embrace new challenges and opportunities to develop my skills further as a developer.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutMe;