import React, { Fragment, useEffect, useState } from 'react'
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value
        });
    }

    useEffect(() => {
        console.log('Hey');
    }, []);

    return (
        <Fragment>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    name='name' 
                    type="text" 
                    autoComplete="off"
                    className='form-control'
                    placeholder='Your name:'
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input 
                    name='email' 
                    type="text" 
                    autoComplete="off"
                    className='form-control'
                    placeholder='Your email:'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name && <Message />}

        </Fragment>
    )
}

export default SimpleForm;