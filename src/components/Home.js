import React from 'react';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';

function Home(props) {
    return (
        <div>
            <div className="navMain">
                <div className="navContainer">
                    <a href="#">LOGO</a>
                    <nav class="navNavigation">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Resume</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
            <GradientPurple />
            <GradientBlue />
            <div>
                <section>
                    <div className="homeContainer">
                        <div className="homeColumns">
                            <div className="homeImage">
                            <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Light'/>
                            </div>
                            <div className="homeMainName">
                                <h1 className="homeName">Francis</h1>
                                <h1 className="homeSubName">FULL-STACK DEVELOPER</h1>
                                <p>Hello Everyone! I am a Full-Stack Web Developer, and currently studying Computer Science. I am passionate and commited to Software Development.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;