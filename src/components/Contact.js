import React from 'react';
import Button from './Button';
import GradientPurple from './GradientPurple';

function Contact(props) {
    return (
        <div>
            <GradientPurple />
            <GradientPurple />
            <div className='contactContainer'>
                <div className='contactColumns'>
                    <div className='contactInput'>
                        <form method="POST">
                            <div className='contactBorderBottom'>
                                <input className='contactButton contactName' type="text" name="Name" placeholder='Your Name' />
                            </div>
                            <div className='contactBorderBottom'>
                                <input className='contactButton contactEmail' type="text" name="Email" placeholder='Your Email' />
                            </div>
                            <div className='contactBorderBottom'>
                                <input  className='contactButton contactThoughts' type="text" name="Thoughts" placeholder='Share Your Thoughts' />
                            </div>
                            <Button name={"Submit"} link={"#"} className={"contactSubmit"}/>
                        </form>
                        
                        
                    </div>
                    <div className='contactHeader'>
                        <h2 className='contactMainName'>Contacts</h2>
                        <h1 className='contactSubName'>Want to work together?</h1>
                        <p className='contactInfo'>I am looking for Software Engineer Internships, Web Developer Internships, Software Developer Internships, Full-Stack Developer Internships. I am pleased to show you my website and would love to connect. You can send me a email at alcosfrancis@gmail.com or you can click one of the social media platforms I have and connect!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;