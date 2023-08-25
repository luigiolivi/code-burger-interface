import PropTypes from 'prop-types'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes() {
  const user = localStorage.getItem('codeburger: userData')

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
