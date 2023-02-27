import React from 'react';
import Button from './Button';

function Project({date, title, skills, description, link, image}) {
    return (
        <div>
            <div className='projectContainer'>
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