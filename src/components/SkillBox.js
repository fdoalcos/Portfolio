import React from 'react';



function SkillBox({skillImage, skillName}) {
    const items = ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'HTML', 'CSS', 'Django', 'Flask', 'React']
    const item = [{language: 'Python', src: '/images/Python.png', className:'imagePython'}, 
    {language: 'JavaScript', src:'/images/JavaScript.png', className:'imageJavaScript'}, 
    {language: 'Java', src: '/images/Java.png', className:'imageJava'}, 
    {language: 'C', src: '/images/C.png', className:'imageC'}, 
    {language: 'SQL', src: '/images/SQL.png', className:'imageSQL'}, 
    {language: 'HTML', src: '/images/HTML.png', className:'imageHTML'}, 
    {language: 'CSS', src: '/images/CSS.png', className:'imageCSS'}, 
    {language: 'Django', src: '/images/Django.png', className:'imageDjango'}, 
    {language: 'Flask', src: '/images/Flask.png', className:'imageFlask'},
    {language: 'React', src: '/images/React.png', className:'imageReact'} 
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
                        <img className={item.className} src={item.src}/>
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