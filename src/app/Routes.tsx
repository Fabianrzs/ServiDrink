import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Loading from '../components/common/Loading'

export const Home = lazy(() => import('../pages/home/home'))
export const Login = lazy(() => import('../pages/login/Login'))
export const SingUp = lazy(() => import('../pages/signUp/SignUp'))
export const Profile = lazy(() => import('../pages/profile/Profile'))
export const Configuracion = lazy(() => import('../pages/configuracion/configuracion'))
export const Historial = lazy(() => import('../pages/historial/historial'))
export const Inventario = lazy(() => import('../pages/inventario/inventario'))
export const Pedidos = lazy(() => import('../pages/pedidos/pedidos'))
export const Usuarios = lazy(() => import('../pages/usuarios/usuarios'))

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/'
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
            path='/usuarios'
            element={<Usuarios />}
          />
          <Route
            path='/pedidos'
            // {user.isLoggedIn ? <Redirect to="/" /> : <Login />}
            element={<Pedidos />}
          />
          <Route
            path='/inventario'
            // {user.isLoggedIn ? <Redirect to="/" /> : <SingUp />}
            element={<Inventario />}
          />
          <Route
            path='/historial'
            element={<Historial />}
          />
          <Route
            path='/configuracion'
            element={<Configuracion />}
          />
        </Switch>
      </Router>
    </Suspense>
  )
}
