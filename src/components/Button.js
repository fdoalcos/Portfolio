import React from 'react';

function Button({name, link}) {
    return (
        <div>
            <button className='portfolioButton'><a className='portfolioLink' href={link}>{name}</a></button>
        </div>
    );
}

export default Button;