import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'

const showResult = async values => {
    console.log(values);
}

const validate = value => (value ? undefined : 'Required')

export class FormFromTo extends Component {
    render() {
        // const {values, errors } = this.state
        return(
        <Form onSubmit={showResult} 
        // validate={values => {}}
        >
            {({handleSUbmit, submitting}) => <form onSubmit={handleSUbmit}>
                <div>
                    <label>From</label>
                    <Field name='From' 
                    component='select'
                    validate={validate}
                    placeholder='Откуда'>
                        <option>Электроник</option>
	                    <option>Сыроежкин</option>
	                    <option>Чижиков</option>
	                    <option>Кукушкина</option>
                    </Field>
                </div>
                <div>
                    <label>То</label>
                    <Field name='То' 
                    component='select' 
                    validate={validate}
                    placeholder='Куда'>
                        <option>Электроник</option>
	                    <option>Сыроежкин</option>
	                    <option>Чижиков</option>
	                    <option>Кукушкина</option>
                    </Field>
                </div>
                <button type='submit' disabled={submitting}>Заказать</button>
            </form>}
        </Form>
        )
    }
}

export const FormFromToAuth = connect(
    null, { }
  )(FormFromTo)
