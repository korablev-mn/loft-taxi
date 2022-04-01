import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { routeRequest } from "../actions";

const validate = (value) => (value ? undefined : "Required");

const orderTaxi = async values => {
  // values.preventDefault();
  console.log('orderTaxi: ');
  // console.log(values);
  // this.props.routeRequest(values.From, values.To)
};

class FormFromToComponent extends Component {

  render() {
    return (
      <Form onSubmit={orderTaxi} 
      // validate={values => {}}
      >
        {({ handleSUbmit, values, submitting }) => (
          <form onSubmit={handleSUbmit}>
            <div>
              <label>From</label>
              <Field
                name="From"
                component="select"
                validate={validate}
                placeholder="Откуда"
              >
                {this.props.mapA.mapAddress.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </Field>
            </div>
            <div>
              <label>То</label>
              <Field
                name="То"
                component="select"
                validate={validate}
                placeholder="Куда"
              >
                {this.props.mapA.mapAddress.reverse().map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </Field>
            </div>
            <button type="submit" disabled={submitting}>
              Заказать
            </button>
          </form>
        )}
      </Form>
    );
  }
}

export const FormFromTo = connect((state) => ({ mapA: state.address }), {
  routeRequest
})(FormFromToComponent);
