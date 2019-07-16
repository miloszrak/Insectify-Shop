import React from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom"
import Button from '@material-ui/core/Button'

import LoginForm from '../pages/Login/LoginForm'
import RegisterForm from '../pages/Register/RegisterForm'
import Home from '../pages/Home'
import useStyle from './Layout.style'

function Layout() {

    const classes = useStyle()

    return(
        <Router>
            <div className={classes.header}>
                <ul>
                <Button href="/">Home</Button>
                <Button href="/login">Log In</Button>
                <Button href="/register">Register</Button>
                </ul>
            </div>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/register" component={RegisterForm}/>
            </div>
        </Router>
    )
}

export default Layout