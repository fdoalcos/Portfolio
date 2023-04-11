import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';


function Footer(props) {

    const footerRef = useRef();
    const [isVisible, setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting && window.scrollY != 0) {
                entry.target.classList.add("showElement")
                console.log("I am showing element")
            } 
        })
    })

    const elements = footerRef.current.querySelectorAll('.hiddenElement')
        elements.forEach(element => {
            observer.observe(element);
        })
    }, [])


    return (
        <div ref={footerRef}>
            <div className='footerContainer hiddenElement'>
                <div className='footerLogos'>
                    <a href="https://github.com/fdoalcos"><i class=" iTag bi bi-github footerGithub hiddenElement"></i></a>
                    <a href="https://www.linkedin.com/in/fdoalcos/"><i class=" iTag bi bi-linkedin footerLinkedin hiddenElement"></i></a>
                    <a href="https://twitter.com/fddddnic"><i class=" iTag bi bi-twitter footerTwitter hiddenElement"></i></a>
                    <a href="https://www.instagram.com/alcosfrancis/?next=%2Falecofrancis%2F&hl=en"><i class=" iTag bi bi-instagram footerInstagram hiddenElement"></i></a>
                    <a href="https://www.facebook.com/francis.alcos.1/"><i class=" iTag bi bi-facebook footerFacebook"></i></a>
                    <a href="mailto:alcosfrancis@gmail.com"><i class=" iTag bi bi-envelope footerEnvelope hiddenElement"></i></a>
                </div>
                <p className='footerDesign hiddenElement'>Designed and built by Francis</p>
                <p className='footerReserve hiddenElement'>All right reserved - Francis Alcos</p>

            </div>
        </div>
    );
}

export default Footer;