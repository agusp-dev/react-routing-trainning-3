import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../helper/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest} 
      render={ props => auth.isAuthenticated() ? <Component {...props} /> : <Redirect to='/'/> } 
    />
  )
}

export { PrivateRoute }