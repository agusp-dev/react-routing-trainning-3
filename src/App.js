import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './components'
import Login from  './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Protected React Router APP</h1>
        <Switch>
          <PrivateRoute exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/' component={ Login } />
          <Route path='*' component={ () => '404 NOT FOUND' } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
