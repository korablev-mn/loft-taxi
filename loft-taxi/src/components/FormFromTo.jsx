import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { routeRequest } from "../actions";

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
      <>
      <pre>route: {route}</pre>
      <Form onSubmit={this.orderTaxi} 
      // validate={values => {}}
      >
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>From</label>
              <Field
                name="From"
                component="select"
                validate={validate}
              >
                <option></option>
                {this.props.mapA.mapAddress.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </Field>
            </div>
            <div>
              <label>То</label>
              <Field
                name="To"
                component="select"
                validate={validate}
              >
                <option></option>
                {this.props.mapA.mapAddress.reverse().map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </Field>
            </div>
            <button type="submit" disabled={submitting}>
              Заказать
            </button>
          </form>
        )}
      </Form>
      </>
    );
  }
}

export const FormFromTo = connect((state) => ({ mapA: state.address , route: state.route.data}), 
{routeRequest})(FormFromToComponent);
