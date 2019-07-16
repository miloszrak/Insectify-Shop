import React, { useState, useContext } from 'react'
import { TextField, Button, } from '@material-ui/core'
import useStyle from './LoginForm.style'
import http from '../../../../utils/http'
import AuthContext from '../../../../services/Auth/AuthContext'

function LoginForm() {

    const {user, setUser} = useContext(AuthContext)

    const classes = useStyle()
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    async function submit(event) {
        event.preventDefault()

        console.log(user, setUser)
        const result = await http.post('/login', values)
        http.defaults.headers.common['Authorization'] = `Bearer ${result.token}`
        if (Boolean(result.user)) {
            //setUser(user)
            setUser({
                firstName: 'Bartosz',
                lastName: 'Rak',
                email: 'rak.bartosz98@gmail.com',
                zipCode: '11-666',
            })
        }
    }

    return (
        <div className={classes.background}>
            <form className={classes.content}>
                <TextField name="email" onChange={handleChange} className={classes.input} type="email" label="username"/>
                <TextField name="password" onChange={handleChange} className={classes.input} type="password" label="password"/>
                <Button onClick={submit} type="submit">Go!</Button>
            </form>
        </div>
    )
}

export default LoginForm