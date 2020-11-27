import React, { Fragment } from 'react'
import auth from '../helper/auth'
import { withRouter } from 'react-router-dom'

const Dashboard = ({ history }) => {
  
  const onHandleLogout = () => {
    auth.logout(() => {
      navigateTo('/')
    })
  }

  const navigateTo = path => {
    history.push(path)
  }
  
  return (
    <Fragment>
      <h2>Dashboard Page</h2>
      <button 
        onClick={ onHandleLogout }
        >Logout
      </button>
    </Fragment>
  )
}

export default withRouter( Dashboard ) 
