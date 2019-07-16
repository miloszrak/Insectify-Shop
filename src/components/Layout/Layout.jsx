import React, { useContext } from 'react'
import { BrowserRouter as Router, Link} from "react-router-dom"

import useStyle from './Layout.style'
import AuthContext from '../../services/Auth/AuthContext';
import AuthorizedRoots from '../pages/AuthorizedRoots'
import UnauthorizedRoots from '../pages/UnauthorizedRoots'

function Layout() {

    const {user, setUser} = useContext(AuthContext)

    const classes = useStyle()

    return(
        <Router>
            <div className={classes.header}>
                <ul>
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
                </ul>
            </div>
            <div>
                {user ? (
                    <AuthorizedRoots/>
                ) : (
                    <UnauthorizedRoots/>
                )}
            </div>
        </Router>
    )
}

export default Layout