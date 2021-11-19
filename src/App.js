import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@/utils/loadable'
const Login = loadable(() => import('@/views/Login'))
// 公用模块组件
const PublicLayout = loadable(() => import('@/container/Layout'))
const View404 = loadable(() => import('@/views/Other/404'))
const View500 = loadable(() => import('@/views/Other/500'))

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />}></Route>
        <Route path="/404" component={View404}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/500" component={View500}></Route>
        <Route component={PublicLayout}></Route>
      </Switch>
    </Router>
  )
}
