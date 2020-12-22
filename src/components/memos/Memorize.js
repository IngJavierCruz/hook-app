import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter';

import '../useEffect/effects.css';
import { Small } from './Small';


const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize: 
                <Small value={ counter } />
            </h1>
            <hr />

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

export default Memorize;