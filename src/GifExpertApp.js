import React, { useState } from 'react';
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';




export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr/>
            <ol>
                { 
                    categorias.map( categoria => 
                        <GifGrid key={ categoria } 
                                 categoria={ categoria }/> 
                    )
                }
            </ol>
        </div>
          
    )
}
