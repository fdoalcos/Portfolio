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
                    <nav className="stickyElement hiddenElement border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mx-auto" x-data="{open: false}">
                        <div class="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="https://flowbite.com/" class="flex items-center">
                            {/* <a className='homeLinkHead' href="#">FRANCIS</a> */}
                            <Link to="home" spy={true} smooth={true} offset={-50} duration={500} className='homeLinkHead'>FRANCIS</Link>
                        </a>
                        <div class="hiddenElement flex md:order-2">
                            <Button name={"Resume"}  link={"https://docs.google.com/document/d/1VyXNTx9rIzQh-GnGVImYXhGltZN9CA-UA9V2es8P1js/edit?usp=sharing"}/>
                            <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" onClick={toggleClass} aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="hiddenElement items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-transparent">
                            <li>
                                <Link to="home" spy={true} smooth={true} offset={-50} duration={500} className='homeLink'>Home</Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className='homeLink'>About Me</Link>
                            </li>
                            <li>
                                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className='homeLink'>Skills</Link>
                            </li>
                            <li>
                                <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className='homeLink'>Projects</Link>
                            </li>
                            <li>
                                <Link to="contacts" spy={true} smooth={true} offset={-50} duration={500} className='homeLink'>Contacts</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                
                


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