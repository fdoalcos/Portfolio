import React from 'react';

function Button({name, className, padding, link}) {
    return (
        <div className={padding}>
            <button className={className ? className : 'portfolioButton'}><a className='portfolioLink' href={link}>{name}</a></button>
        </div>
    );
}

export default Button;