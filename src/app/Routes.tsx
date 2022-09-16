import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Loading from '../components/common/Loading'
import NavBar from '../components/template/navBar/NavBar'

export const Home = lazy(() => import('../Pages/home/home'))
export const Login = lazy(() => import('../components/template/user/login/Login'))
export const SingUp = lazy(() => import('../components/template/user/signUp/SignUp'))
export const Profile = lazy(() => import('../components/template/user/profile/Profile'))

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
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
        </Switch>
      </Router>
    </Suspense>
  )
}
