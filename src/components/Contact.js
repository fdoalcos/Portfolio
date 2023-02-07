import React from 'react';
import GradientPurple from './GradientPurple';

function Contact(props) {
    return (
        <div>
            <GradientPurple />
            <GradientPurple />
            <h2>Contact</h2>
            <div className='contactContainer'>
                <div className='contactColumns'>
                    <div className='contactInput'>
                        <div>
                            <input type="text" name="Name" placeholder='Your Name' />
                        </div>
                        <div>
                            <input type="text" name="Email" placeholder='Your Email' />
                        </div>
                        <div>
                            <input type="text" name="Thoughts" placeholder='Share Your Thoughts' />
                        </div>
                    </div>
                    <div className='contactHeader'>
                        <h3>CONTACT</h3>
                        <h1>Want to work together?</h1>
                        <p>I am looking for Software Engineer Internships, Web Developer Internships, Software Developer Internships, Full-Stack Developer Internships. I am pleased to show you my website and would love to connect. You can send me a email at alcosfrancis@gmail.com or you can click one of the social media platforms I have and connect!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;