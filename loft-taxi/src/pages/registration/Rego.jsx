import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export function Rego(props) {
    const { setPage } = props
    const navigate = useNavigate() 

    return (
        <>
            <form onSubmit={() => setPage('map')}>
                <input name='name' />
                <button type='submit'>Зарегистрироваться</button>
            </form>
            <Link to='/'>Back</Link>
            <button onClick={() => navigate('/')}>Go Back</button>
        </>
    )
}