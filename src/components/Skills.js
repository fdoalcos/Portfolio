import React, { useState, useRef, useEffect } from 'react';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';
import SkillBox from './SkillBox';
import { useInView } from 'react-intersection-observer';



function Skills(props) {


    const skillRef = useRef();
    const [isVisible, setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add("showElement")
                console.log("I am showing element")
            } 
        })
    })

    const elements = skillRef.current.querySelectorAll('.hiddenElement')
        elements.forEach(element => {
            observer.observe(element);
        })
    }, [])

    

    return (
        <div>
            <GradientPurple />
            <GradientBlue classPosition={"skillPosition"} />
            <div id="skills">
                <section ref={skillRef}>
                    <div className='skillContainer'>
                        <div>
                            <div className='hiddenElement skillHeader'>
                                <h1 className='skillName'>SKILLS</h1>
                                <h1 className='skillInfo'>What I can bring to the team and the skillset I have</h1>
                            </div>
                        </div>
                        <div className='skillBox'>
                            <SkillBox />
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Skills;