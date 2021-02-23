import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';


export const ESTADO_OK = 'OK';
export const useFetchGifs = ( categoria ) => {
    const estadoInicial = {data:[], loading:true, estado:ESTADO_OK};
    const [estado, setEstado] = useState(estadoInicial);

    useEffect( () => {
        getGifs('https://api.giphy.com/v1/gifs/search', 
                '7fu47BcWMQD2SA8XzBFSGVZiqNByFauK', 
                10, 
                categoria)
                .then( gifs => {
                    if (gifs.length == 0)
                        throw new Error('No se encontraron GIF con el criterio usado')
                    setEstado( {data:gifs, 
                                           loading:false, 
                                           estado:ESTADO_OK} )
                    })
                .catch( err => setEstado( {data:[], 
                                           loading:false, 
                                           estado:err.message} ));
    },[ categoria ]);

    return estado;
}

export default useFetchGifs;