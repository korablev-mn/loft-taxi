import React from 'react'
import { Link } from 'react-router-dom';

export function Rego(props) {
    const { setPage } = props

    return (
        <>
            <form onSubmit={() => setPage('map')}>
                <input name='name' />
                <button type='submit'>Зарегистрироваться</button>
            </form>
            <Link to='/'>Back</Link>
        </>
    )
}