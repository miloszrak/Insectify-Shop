import React from 'react'
import { Route } from "react-router-dom"

import LoginForm from '../Login/LoginForm'
import RegisterForm from '../Register/RegisterForm'
import Home from '../Home'

function UnauthorizedRoots() {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
        </div>
    )
}

export default UnauthorizedRoots