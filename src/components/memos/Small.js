import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Renderizado');
    return (
        <small>
            { value }
        </small>
    )
});
