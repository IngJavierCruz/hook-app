import React, { Fragment, useEffect } from "react"
import useForm from '../../hooks/useForm';

const FormCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        password: '',
        email: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Hey');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Custom hook effect</h1>
            <hr />

            <div className="form-group">
                <input 
                    name='name' 
                    type="text" 
                    autoComplete="off"
                    className='form-control'
                    placeholder='Your name'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input 
                    name='password' 
                    type="password" 
                    autoComplete="off"
                    className='form-control'
                    placeholder='********'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
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

            <button type='submit' className="btn btn-success">Enviar</button>
        </form>
    )
}

export default FormCustomHook;