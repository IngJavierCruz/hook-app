import React, { useState } from 'react';
import MultipleHooks from '../examples/MultipleHooks';
import '../useEffect/effects.css';


const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real example useRef</h1>
            <hr />
            

            { show && <MultipleHooks />  }

            <button 
                className="btn btn-primary"
                onClick={ ()=> setShow(!show) }
            >
                Show/hide
            </button>

        </div>
    )
}

export default RealExampleRef;