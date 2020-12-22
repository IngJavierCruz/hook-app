import React, { useState} from 'react'

const CounterApp = () => {

    const [{ counterA, counterB }, setCounter] = useState({
        counterA: 10,
        counterB: 20
    });

    return (
        <>
            <p>{ counterA }</p>
            <p>{ counterB }</p>
            <button 
                className="btn btn-primary"
                onClick={ () => setCounter(({counterA}) => ({ counterA: counterA + 1, counterB } ))}
            >
                +1
            </button>
        </>
    )
}

export default CounterApp;