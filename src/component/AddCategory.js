import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length < 3) {
            console.error('Para ingresar un nuevo elemento debe tener al menos 3 caracteres de largo');
            return;
        }
        setCategorias( categorias => [inputValue, ...categorias] ); 
        setInputValue('');
    }

    return (
        <form onSubmit={ handleSubmit }>
          <input type='text'
                 value={ inputValue }
                 onChange={ handleInputChange }/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}
