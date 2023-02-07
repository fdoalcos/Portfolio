import React from 'react';

function Project({date, title, skills, description, link, image}) {
    return (
        <div>
            <div className='projectContainer'>
                <div className='projectColumns'>
                    <div className='projectMain'>
                        <h3>{date}</h3>
                        <h1>{title}</h1>
                        {
                            skills.map(skill => (
                                <>
                                    <div className='skillBox'>
                                        <h5>{skill}</h5>
                                    </div>
                                </>
                            ))
                        }
                        <p>{description}</p>
                        <div class="projectButton">
                            <a href={link}>See Project</a>
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