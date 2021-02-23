import React from 'react';
import { useFetchGifs, ESTADO_OK } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    
    const {data:imagenes,loading,estado:error} = useFetchGifs(categoria);

    return (
        <> 
            <h3>{ categoria }</h3>
            { loading && <p class='animate__animated animate__flash'>Cargando...</p> } 
            { error == ESTADO_OK ?
                <div className='card-grid'>
                {
                    imagenes.map(img => 
                        <GifGridItem key={ img.id } 
                                    { ...img } />)
                }
                </div> 
                :
                <p>{error}</p>
            }
        </>
    )
}
