import { useState, useEffect, useRef } from 'react';


const useFetch = (api) => {
    
    const isMounted = useRef(true);
    
    const [state, setstate] = useState({
       data: null ,
       loading: true,
       error: null
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;    
        }
    }, [])  

    useEffect(() => {
        fetch(api)
            .then(resp => resp.json())
            .then(data => {

                // SIMULAR MAS TIEMPO EN LA API
                setTimeout(() => {
                    
                    if (isMounted.current) {

                        setstate({
                            loading: false,
                            error: false,
                            data: data
                        });

                    } else {
                        console.log('Se previno el set state');
                    }
                    
                }, 4000);

            });
    }, [api ]);


    return state;
}

export default useFetch;