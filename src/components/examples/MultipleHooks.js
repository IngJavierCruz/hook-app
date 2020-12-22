import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const MultipleHooks = () => {
    
    const { counter, increment } = useCounter(1);
    const api = `https://breakingbadapi.com/api/quotes/${counter}`;
    const { loading, data } = useFetch(api);
    const { author, quote } = !!data && data[0];


    return (
        <div className="m-4">
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                loading ? 
                (
                    <div className="alert alert-info text-center">
                        loading...
                    </div>
                ) :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0"> { quote } </p>
                        <footer className="blockquote-footer"> { author } </footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={ increment }>Siguiente quote</button>
        </div>
    )
}

export default MultipleHooks;