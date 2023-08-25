import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/cadastro"></Route>
      </Switch>
    </Router>
  )
}

export default Routes
