import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import {Link} from 'react-scroll';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';
import { useInView } from 'react-intersection-observer';


function Home(props) {

    const toggleClass = () => {
        var element = document.getElementById('navbar-cta');
        element.classList.toggle('block');
    }

    const homeRef = useRef();
    const [isVisible, setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add("showElement")
                console.log("I am showing element")
            } 
            // else {
            //     entry.target.classList.remove("showElement") 
            //     console.log("I am not showing element")
            // }
        })
    })

    const elements = homeRef.current.querySelectorAll('.hiddenElement')
        elements.forEach(element => {
            observer.observe(element);
        })
    }, [])


    return (
        
        <div >
            <GradientPurple classPosition={"homePurplePosition"}/>
            <GradientBlue classPosition={"homeBluePosition"}/>
            <div id="home" className='relative' ref={homeRef}>
                    
                
                


                {/* <div className="navMain">
                    <div className="navContainer">
                        <nav class="navNavigation">
                        <ul className='homeUl'>
                            <li><a className='homeLinkHead' href="#">LOGO</a></li>
                            <li><a className='homeLink' href="#">Home</a></li>
                            <li><a className='homeLink' href="#">About Me</a></li>
                            <li><a className='homeLink' href="#">Skills</a></li>
                            <li><a className='homeLink' href="#">Projects</a></li>
                            <li><a className='homeLink' href="#">Contacts</a></li>
                            <li><a className='homeLink' href="#">Resume</a></li>
                            <li><Button name={"Resume"}  link={"resume"}/></li>
                        </ul>
                        </nav>
                    </div>
                </div> */}

                <div  className='hiddenElement homeMainContainer'>
                    <section>
                        <div className=" hiddenElement homeContainer">
                            <div className=" hiddenElement homeColumns">
                                <div className=" hiddenElement homeImages">
                                    <img className=' hiddenElement homeImage' src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Light'/>
                                </div>
                                <div className=" hiddenElement homeMainName">
                                    <h1 className=" hiddenElement homeName">Francis</h1>
                                    <h1 className=" hiddenElement homeSubName">FULL-STACK DEVELOPER</h1>
                                    <p className=' hiddenElement homeInfo'>Hello Everyone! I am a Full-Stack Web Developer, and currently studying Computer Science. I am passionate and commited to Software Development.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
        </div>
    );
}

export default Home;