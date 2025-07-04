import userAuthStore from '@/store/authStore'
import React, { type JSX, type ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({element}:{element:JSX.Element}) => {
    const {isAuthenticated} = userAuthStore((state)=>state)
  if(!isAuthenticated)return<Navigate to='/signin'  />
  else return element
}

export default PrivateRoute
