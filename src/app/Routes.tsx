import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Loading from '../components/common/Loading'

export const Home = lazy(() => import('../pages/home/home'))
export const Login = lazy(() => import('../pages/login/Login'))
export const SingUp = lazy(() => import('../pages/signUp/SignUp'))
export const Profile = lazy(() => import('../pages/profile/Profile'))
export const PerfilUsuario = lazy(() => import('../pages/profile/Profile'))

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            // {user.isLoggedIn ? <Redirect to="/" /> : <Login />}
            element={<Login />}
          />
          <Route
            path='/singUp'
            // {user.isLoggedIn ? <Redirect to="/" /> : <SingUp />}
            element={<SingUp />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='/pp'
            element={<PerfilUsuario />}
          />
        </Switch>
      </Router>
    </Suspense>
  )
}
