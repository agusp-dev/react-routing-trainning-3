import React, { Fragment } from 'react'
import auth from '../helper/auth'
import { withRouter } from 'react-router-dom'

const Login = ({ history }) => {

  console.log('history', history)

  const onHandleLogin = () => {
    auth.login(() => {
      navigateTo('/dashboard')
    })
  }

  const navigateTo = path => {
    history.push(path)
  }

  
  return (
    <Fragment>
      <h2>Login Page</h2>
      <button 
        onClick={ onHandleLogin }
      >Login
      </button>
    </Fragment>
  )
}

export default withRouter( Login )