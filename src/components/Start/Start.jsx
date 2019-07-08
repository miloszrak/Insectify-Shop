import React from 'react'

import LoginForm from './LoginForm'
import useStyle from './Start.style'

function Start() {

    const classes = useStyle()

    return(
        <div>
            <LoginForm/>
        </div>
    )
}

export default Start