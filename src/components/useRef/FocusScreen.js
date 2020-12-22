import React, { useRef } from 'react';
import './../useEffect/effects.css';

const FocusScreen = () => {


    const inputRef = useRef()

    const handleClick = (e) => {
        console.log(inputRef)
        document.querySelector('input').select();  
    };

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />
            <input 
                className="form-control" 
                placeholder="Su nombre" 
                ref={ inputRef }    
            />

            <button onClick={handleClick}>Focus</button> 

        </div>
    )
}

export default FocusScreen;