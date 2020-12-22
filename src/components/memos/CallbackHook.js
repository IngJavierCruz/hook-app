import React, { useCallback, useState } from 'react'
import Incrementar from './ShowIncrement';
import '../useEffect/effects.css';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (num) => {
            setCounter( counter => counter + num);
        },
        [setCounter]
    )

    return (
        <div>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <Incrementar incrementar={ increment } />
        </div>
    )
}

export default CallbackHook;