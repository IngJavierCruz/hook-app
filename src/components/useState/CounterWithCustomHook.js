import React from 'react';
import useCounter from  '../../hooks/useCounter';


const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <div className="m-auto">
            <button className="btn btn-danger" onClick={decrement}>-1</button>
            <span className="p-3 mx-3">Counter with hook: {state}</span>
            <button className="btn btn-success" onClick={increment}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterWithCustomHook;