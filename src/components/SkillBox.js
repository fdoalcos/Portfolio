import React, {useState, useEffect, useRef} from 'react';



function SkillBox({skillImage, skillName}) {

    // const skillRef = useRef();
    // const [isVisible, setVisible] = useState();

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         console.log(entry)
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add("showElement")
    //             console.log("I am showing element")
    //         } 
    //     })
    // })

    // const elements = skillRef.current.querySelectorAll('.hiddenElement')
    //     elements.forEach(element => {
    //         observer.observe(element);
    //     })
    // }, [])

    
    const items = ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'HTML', 'CSS', 'Django', 'Flask', 'React']
    const item = [{language: 'Python', src: 'images/Python.png', className:'imagePython'}, 
    {language: 'JavaScript', src:'images/JavaScript.png', className:'imageJavaScript'}, 
    {language: 'Java', src: 'images/Java.png', className:'imageJava'}, 
    {language: 'C', src: 'images/C.png', className:'imageC'}, 
    {language: 'SQL', src: 'images/SQL.png', className:'imageSQL'}, 
    {language: 'HTML', src: 'images/HTML.png', className:'imageHTML'}, 
    {language: 'CSS', src: 'images/CSS.png', className:'imageCSS'}, 
    {language: 'Django', src: 'images/Django.png', className:'imageDjango'}, 
    {language: 'Flask', src: 'images/Flask.png', className:'imageFlask'},
    {language: 'React', src: 'images/React.png', className:'imageReact'} 
    ]
    return (
        <>
            {
                item.map(item => (     
                    <div className='SkillBox hiddenElement'>
                        <div className='skillImage'>
                            <img className={item.className} src={item.src}/>
                        </div>
                        <div className='skillNames'>
                            <p>{item.language}</p>
                        </div>
                    </div>
                ))
            }
        
            
            
        </>
    );
}

export default SkillBox;