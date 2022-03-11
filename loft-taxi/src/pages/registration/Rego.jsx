import React from 'react'

export function Rego(props) {
    const { setPage } = props

    return (
        <form onSubmit={() => setPage('map')}>
            <input name='name'/>
            <button type='submit'>Зарегистрироваться</button>    
        </form>
    )
}