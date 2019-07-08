import React, { useState } from 'react'
import { TextField, Button, } from '@material-ui/core'
import useStyle from './LoginForm.style'

function LoginForm() {

    const classes = useStyle()
    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    function submit(event) {
        event.preventDefault()
        console.log(values)
    }

    return (
        <div className={classes.background}>
            <div className={classes.content}>
                <form>
                    <TextField name="username" onChange={handleChange} className={classes.input} type="string" label="username"/>
                    <TextField name="password" onChange={handleChange} className={classes.input} type="password" label="password"/>
                    <Button onClick={submit} type="submit">Go!</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm