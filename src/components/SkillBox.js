import React from 'react';



function SkillBox({skillImage, skillName}) {
    const items = ["Python", "JavaScript", "Java", "C", "SQL", "HTML", "CSS", "Django", "Flask", "React"]
    const item = [{language: "Python", link: "#"}, 
    {language: "JavaScript", link: "#"}, 
    {language: "Java", link: "#"}, 
    {language: "C", link: "#"}, 
    {language: "SQL", link: "#"}, 
    {language: "HTML", link: "#"}, 
    {language: "CSS", link: "#"}, 
    {language: "Django", link: "#"}, 
    {language: "Flask", link: "#"},
    {language: "React", link: "#"} 
    ]
    return (
        <>
        {/* {
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
         */}

        {
            item.map(item => (                
                <div className='SkillBox'>
                    <div className='skillImage'>
                        <img src={item.link} alt="skillImage"/>
                    </div>
                    <div className='skillName'>
                        <p>{item.language}</p>
                    </div>
                </div>
            ))
        }
            
            
        </>
    );
}

export default SkillBox;