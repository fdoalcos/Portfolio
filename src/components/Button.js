import React from 'react';

function Button({name, className, link}) {
    return (
        <div>
            <button className={className ? className : 'portfolioButton'}><a className='portfolioLink' href={link}>{name}</a></button>
        </div>
    );
}

export default Button;