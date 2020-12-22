import React from 'react'

const ShowIncrement = React.memo(({ incrementar }) => {

    console.log('Renderizado nuevamente');
    return (
        <button 
            onClick={ () => incrementar(7) }
            className="btn btn-primary"
        >
            Incrementar
        </button>
    )

});

export default ShowIncrement;
