import React, { useState, useRef } from 'react';
import Button from './Button';
import GradientPurple from './GradientPurple';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';


function Contact(props) {
    const form = useRef();
    const [email, setEmail] = useState({firstName: '', nameEmail: '', commentInfo: ''})
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ksj9uhd', 'template_hqvg0me', form.current, 'ShCnZFyJ_5LypBCY2')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
          }, (error) => {
              console.log(error.text);
              console.log("message error");
        });
        
        document.getElementById("contactForm").reset();

      };


    const { ref: contactRef, inView: isContactVisible } = useInView();


    console.log("Contact is", isContactVisible)

    return (
        <div>
            <GradientPurple />
            <GradientPurple />
            

            {/* <div className='contactContainer'>
                <div className='contactColumns'>
                    <div className='contactInput'>
                        <form ref={form} onsubmit={sendEmail}>
                            <div className='contactBorderBottom'>
                                <input name="user_name" className='contactButton contactName' type="text" placeholder='Your Name' />
                            </div>
                            <div className='contactBorderBottom'>
                                <input name="user_email"  className='contactButton contactEmail' type="text" placeholder='Your Email' />
                            </div>
                            <div className='contactBorderBottom'>
                                <input name="message" className='contactButton contactThoughts' type="text" placeholder='Share Your Thoughts' />
                            </div>
                            <Button name={"Submit"} link={"#"} className={"contactSubmit"}  />
                            <input type="submit" value="Send" />
                        </form>
                        
                        
                    </div>
                    <div className='contactHeader'>
                        <h2 className='contactMainName'>Contacts</h2>
                        <h1 className='contactSubName'>Want to work together?</h1>
                        <p className='contactInfo'>I am looking for Software Engineer Internships, Web Developer Internships, Software Developer Internships, Full-Stack Developer Internships. I am pleased to show you my website and would love to connect. You can send me a email at alcosfrancis@gmail.com or you can click one of the social media platforms I have and connect!</p>
                    </div>
                </div>
            </div> */}
            <div ref={contactRef} className='contactContainer'>
                <div className='contactColumns'>
                    <div className='contactInput'>
                        <form id="contactForm" ref={form} onSubmit={sendEmail}>
                            <div className='contactBorderBottom'>
                                <input type="text" name="user_name" className='contactButton contactName' placeholder='Your Name' />
                            </div>
                            <div className='contactBorderBottom'>
                                <input type="email" name="user_email"  className='contactButton contactEmail' placeholder='Your Email' />
                            </div>
                            <div className='contactBorderBottom'>
                                <input name="message" className='contactButton contactThoughts' placeholder='Share Your Thoughts' />
                            </div>
                            <input type="submit" className='contactSubmit' value="Submit" />
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