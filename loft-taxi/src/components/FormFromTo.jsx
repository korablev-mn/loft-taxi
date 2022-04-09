import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { routeRequest } from "../actions";
import style from './form.module.css'

const validate = (value) => (value ? undefined : "Required");

// const orderTaxi = async values => {
//   console.log('orderTaxi: ');
//   console.log(values.To);
//   console.log(values.From);
//   console.log(routeRequest(values));
//   routeRequest(values)
// };

class FormFromToComponent extends Component {

  orderTaxi = async values => {
    console.log('orderTaxi: ');
    this.props.routeRequest(values)
  };

  render() {
    const { route } = this.props
    return (
      <div>
      <Form onSubmit={this.orderTaxi} 
      // validate={values => {}}
      >
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className={style.block}>
            <div className={style.formInput}>
            <label>From</label>
              <Field
                name="From"
                component="select"
                validate={validate}
                className={style.inputProp}
                placeholder='Откуда'
              >
                <option defaultValue=''></option>
                {this.props.mapA.mapAddress.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </Field>
            </div>
            <div className={style.formInput}>
              <label>To</label>
              <Field
                name="To"
                component="select"
                validate={validate}
                className={style.inputProp}
              >
                <option value='' defaultValue='' disabled selected>Куда</option>
                {this.props.mapA.mapAddress.reverse().map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </Field>
            </div>
            <button type="submit" disabled={submitting} className={style.btnSubmit}>
              Заказать
            </button>
          </form>
        )}
      </Form>
      </div>
    );
  }
}

export const FormFromTo = connect((state) => ({ mapA: state.address , route: state.route.data}), 
{routeRequest})(FormFromToComponent);
