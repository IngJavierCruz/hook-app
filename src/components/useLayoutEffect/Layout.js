import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './layout.css';

const Layout = () => {
    
    const { counter, increment } = useCounter(1);
    const api = `https://breakingbadapi.com/api/quotes/${counter}`;
    const { data } = useFetch(api);
    const { quote } = !!data && data[0];


    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    useLayoutEffect(() => {
        
        setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])


    return (
        <div className="m-4">
            <h1>Layout effect</h1>
            <hr />
            
                
            <blockquote className="blockquote text-right">
                <p className="mb-0" ref={ pTag }> { quote } </p>
            </blockquote>
            
            <pre>
                { JSON.stringify(boxSize, null, 5) }
            </pre>

            <button className="btn btn-primary" onClick={ increment }>Siguiente quote</button>
        </div>
    )
}

export default Layout;