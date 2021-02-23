import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( {id, title, url} ) => {
    //console.log(imagen);
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

