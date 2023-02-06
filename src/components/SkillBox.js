import React from 'react';


let items = ["Python", "JavaScript", "Java", "C", "SQL", "HTML", "CSS", "Django", "Flask", "React"]

function SkillBox({skillImage, skillName}) {
    return (
        <>
        {
            items.map(item => (                
                <div className='SkillBox'>
                    <div className='skillImage'>
                        <img src={skillImage} alt="skillImage"/>
                    </div>
                    <div className='skillName'>
                        <p>{item}</p>
                    </div>
                </div>
            ))
        }
        
            
            
        </>
    );
}

export default SkillBox;