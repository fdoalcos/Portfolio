import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

function Project({date, title, skills, description, link, image}) {
    const projectsRef = useRef();
    const [isVisible, setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add("showElement")
                console.log(entry.target);
                console.log("I am showing element")
            } else {
                entry.target.classList.remove("hiddenElement")
            }
        })
    })

    console.log("This is project")
    console.log(projectsRef.current)

    const elements = projectsRef.current.querySelectorAll('.hiddenElement')
        elements.forEach(element => {
            observer.observe(element);
        })
    }, [])

    return (
        <div ref={projectsRef}>
            <div className='projectContainer hiddenElement'>
                <div className='projectColumns hiddenElement'>
                    <div className='projectMain hiddenElement'>
                        <h3 className='projectDate hiddenElement'>{date}</h3>
                        <h1 className='projectTitle hiddenElement'>{title}</h1>
                        <div className='skillBoxContainer hiddenElement'>
                            {
                                skills.map(skill => (
                                    <>
                                        <div className='skillsBox hiddenElement'>
                                            {/* <h5 className='skillBoxName'>{skill}</h5> */}
                                            <button className='skillBoxName hiddenElement'>{skill}</button>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        
                        <p className='projectInfo hiddenElement'>{description}</p>
                        <div class="projectButton hiddenElement">
                            {/* <a href={link}>See Project</a> */}
                            <Button name={"See Project"} link={link} />
                        </div>
                    </div>
                    <div className='projectImage hiddenElement'>
                        <img src={image} alt="projectImage hiddenElement" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Project;