import React from 'react';
import Button from './Button';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';

function Home(props) {
    return (
        <div>
            <div className="navMain">
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
            </div>
            <GradientPurple />
            <GradientBlue />
            <div className='homeMainContainer'>
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