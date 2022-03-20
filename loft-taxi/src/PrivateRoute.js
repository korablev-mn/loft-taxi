import React from "react";
import { Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

export const PrivateRoute = connect((state) => ({
    isLoggedIn: state.auth.isLoggedIn
}))(({ element: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={(props) => isLoggedIn ? <Component {...props} /> : <Navigate to='/' />}
    />
))

export const PrivatePage = ({component, flag}) => {
    return flag ? component : <Navigate to='/'/>
}