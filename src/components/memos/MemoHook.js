import React, { useMemo, useState } from 'react'
import useCounter from '../../hooks/useCounter';
import procesoIterativo from '../../helpers/procesoIterativo';

import '../useEffect/effects.css';

const MemoHook = () => {

    const { counter, increment } = useCounter(2400);
    const [show, setShow] = useState(true);
    const memoEjecutarProceso = useMemo(() => procesoIterativo(counter), [counter])

    return (
        <div>
            <h3>MemoHook: 
                <small>{ counter }</small>
            </h3>
            <hr />

            <p>{ memoEjecutarProceso }</p>

            <button 
                className='btn btn-primary m-2'
                onClick={ increment }
            >
                +1
            </button>


            <button 
                className="btn btn-primary" 
                onClick={ () => setShow(!show) }
            >
                Show/Hde -- { JSON.stringify(show) }
            </button>
        </div>
    )
}

export default MemoHook;