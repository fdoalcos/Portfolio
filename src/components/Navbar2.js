import React, { useState, useref } from 'react';
import {Link} from 'react-scroll';


function Navbar2(props) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            {!isOpen ? 
                (
                    <button onClick={() => setIsOpen(!isOpen)} className='fixed top-5 right-7 text-white'>Click here</button>
                ) : 
                (
                    <button onClick={() => setIsOpen(!isOpen)} className='text-xl text-black fixed top-4 right-4 z-50'>
                            x
                    </button>    
                )
            } 
            <div className={`top-0 right-0 fixed bg-white w-[300px] h-full z-20 p-10 transition-transform 
                ${isOpen ? 'translate-x-0' :'translate-x-full'} duration-300`}>
                <div>
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='homeLinks text-black'>Home</Link>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className='homeLinks'>About Me</Link>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className='homeLinks'>Skills</Link>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className='homeLinks'>Projects</Link>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="contacts" spy={true} smooth={true} offset={-50} duration={500} className='homeLinks'>Contacts</Link>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </>
        
    );
}

export default Navbar2;