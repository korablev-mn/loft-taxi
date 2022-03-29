import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'

const onSubmit=()=> {

}

const validate = () => {

}

export class FormFromTo extends Component {
    render() {
        // const {values, errors } = this.state
        return(
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name='FirstName' label='FirstName'/>
                    <Field name='LastName' label='LastName'/>
                </form>
            )}
        />)
    }
}
