import React from 'react';
import { useInView } from 'react-intersection-observer';


function Footer(props) {

    const { ref: footerRef, inView: isFooterRef } = useInView();


    console.log("Footer is", isFooterRef)

    return (
        <div ref={footerRef}>
            <div className='footerContainer'>
                <div className='footerLogos'>
                    <a href="https://github.com/fdoalcos"><i class=" iTag bi bi-github footerGithub"></i></a>
                    <a href="https://www.linkedin.com/in/fdoalcos/"><i class=" iTag bi bi-linkedin footerLinkedin"></i></a>
                    <a href="https://www.facebook.com/francis.alcos.1/"><i class=" iTag bi bi-twitter footerTwitter"></i></a>
                    <a href="#"></a><i class=" iTag bi bi-instagram footerInstagram"></i>
                    <a href="https://twitter.com/fddddnic"><i class=" iTag bi bi-facebook footerFacebook"></i></a>
                    <a href="mailto:alcosfrancis@gmail.com"><i class=" iTag bi bi-envelope footerEnvelope"></i></a>
                    
                </div>
                <p className='footerDesign'>Designed and built by Francis</p>
                <p className='footerReserve'>All right reserved - Francis Alcos</p>

            </div>
        </div>
    );
}

export default Footer;