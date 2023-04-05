import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

function Project({date, title, skills, description, link, image}) {
    // const projectsRef = useRef();
    // const [isVisible, setVisible] = useState();

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         console.log(entry)
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add("showElement")
    //             console.log(entry.target);
    //             console.log("I am showing element")
    //         } else {
    //             entry.target.classList.remove("hiddenElement")
    //         }
    //     })
    // })

    // console.log("This is project")
    // console.log(projectsRef.current)

    // const elements = projectsRef.current.querySelectorAll('.hiddenElement')
    //     elements.forEach(element => {
    //         observer.observe(element);
    //     })
    // }, [])

    return (
        <div>
            <div className='hiddenElement projectContainer'>
                <div className='projectColumns'>
                    <div className='projectMain'>
                        <h3 className='projectDate'>{date}</h3>
                        <h1 className='projectTitle'>{title}</h1>
                        <div className='skillBoxContainer'>
                            {
                                skills.map(skill => (
                                    <>
                                        <div className='skillsBox'>
                                            {/* <h5 className='skillBoxName'>{skill}</h5> */}
                                            <button className='skillBoxName'>{skill}</button>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        
                        <p className='projectInfo'>{description}</p>
                        <div class="projectButton">
                            {/* <a href={link}>See Project</a> */}
                            <Button name={"See Project"} link={link} />
                        </div>
                    </div>
                    <div className='projectImage'>
                        <img src={image} alt="projectImage" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Project;