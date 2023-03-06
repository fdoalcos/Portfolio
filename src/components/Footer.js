import React from 'react';

function Footer(props) {
    return (
        <div>
            <div className='footerContainer'>
                <div className='footerLogos'>
                    <i class=" iTag bi bi-github footerGithub"></i>
                    <i class=" iTag bi bi-linkedin footerLinkedin"></i>
                    <i class=" iTag bi bi-twitter footerTwitter"></i>
                    <i class=" iTag bi bi-instagram footerInstagram"></i>
                    <i class=" iTag bi bi-facebook footerFacebook"></i>
                    <i class=" iTag bi bi-envelope footerEnvelope"></i>
                    
                </div>
                <p className='footerDesign'>Designed and built by Francis</p>
                <p className='footerReserve'>All right reserved - Francis Alcos</p>

            </div>
        </div>
    );
}

export default Footer;