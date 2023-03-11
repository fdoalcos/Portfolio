import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';
import { useInView } from 'react-intersection-observer';


function Home(props) {

    const toggleClass = () => {
        var element = document.getElementById('navbar-cta');
        element.classList.toggle('block');
    }

    const { ref: linkRef, inView: isLinkVisible } = useInView();
    const { ref: homeRef, inView: isHomeVisible } = useInView();

    // isLinkVisible ? linkRef.current.className = "hidden" : linkRef.className = "show";
    
    console.log("Linkref's classname is", linkRef)

    console.log("Link is ", isLinkVisible)
    console.log("Home is", isHomeVisible)

    return (
        <div>
            <nav ref={linkRef} class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mx-auto" x-data="{open: false}">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" class="flex items-center">
                    <a className='homeLinkHead' href="#">FRANCIS</a>
                </a>
                <div class="flex md:order-2">
                    <Button name={"Resume"}  link={"resume"}/>
                    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" onClick={toggleClass} aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-transparent">
                    <li>
                        <a className='homeLink' href="#">Home</a>
                    </li>
                    <li>
                        <a className='homeLink' href="#">About Me</a>
                    </li>
                    <li>
                        <a className='homeLink' href="#">Skills</a>
                    </li>
                    <li>
                        <a className='homeLink' href="#">Projects</a>
                    </li>
                    <li>
                        <a className='homeLink' href="#">Contacts</a>
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


            <GradientPurple />
            <GradientBlue />
            <div ref={homeRef} className='homeMainContainer'>
                <section>
                    <div className="homeContainer">
                        <div className="homeColumns">
                            <div className="homeImages">
                                <img className='homeImage' src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Light'/>
                            </div>
                            <div className="homeMainName">
                                <h1 className="homeName">Francis</h1>
                                <h1 className="homeSubName">FULL-STACK DEVELOPER</h1>
                                <p className='homeInfo'>Hello Everyone! I am a Full-Stack Web Developer, and currently studying Computer Science. I am passionate and commited to Software Development.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;