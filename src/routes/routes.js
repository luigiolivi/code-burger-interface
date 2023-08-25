import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoutes from './PrivateRoutes'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/cadastro"></Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
