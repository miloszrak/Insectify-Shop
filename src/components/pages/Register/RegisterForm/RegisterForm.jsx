import React, { useState } from 'react'
import { TextField, Button, } from '@material-ui/core'
import useStyle from './RegisterForm.style'
import http from '../../../../utils/http'

function RegisterForm() {

    const classes = useStyle()
    const [values, setValues] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        zipCode: '',
        city: '',
        region: '',
        country: '',
        houseNumber: '',
        flatNumber: '',
        street: '',
    })

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    async function submit(event) {
        event.preventDefault()
        const result = await http.post('/auth/register', values)
    }
    //add validation and communication with server
    return (
        <div className={classes.background}>
            <form className={classes.content}>
                <TextField name="email" value={values.email} onChange={handleChange} className={classes.input} type="email" label="username"/>
                <TextField name="password" value={values.password} onChange={handleChange} className={classes.input} type="password" label="password"/>
                <TextField name="firstName" value={values.firstName} onChange={handleChange} className={classes.input} type="text" label="first name"/>
                <TextField name="lastName" value={values.lastName} onChange={handleChange} className={classes.input} type="text" label="last name"/>
                <TextField name="zipCode" value={values.zipCode} onChange={handleChange} className={classes.input} type="text" label="zipCode"/>
                <TextField name="city" value={values.city} onChange={handleChange} className={classes.input} type="text" label="city"/>
                <TextField name="region" value={values.region} onChange={handleChange} className={classes.input} type="text" label="region"/>
                <TextField name="country" value={values.country} onChange={handleChange} className={classes.input} type="text" label="country"/>
                <TextField name="houseNumber" value={values.houseNumber} onChange={handleChange} className={classes.input} type="number" label="house number"/>
                <TextField name="flatNumber" value={values.flatNumber} onChange={handleChange} className={classes.input} type="number" label="flat number"/>
                <TextField name="street" value={values.street} onChange={handleChange} className={classes.input} type="text" label="street"/>
                <Button onClick={submit} type="submit">register</Button>
            </form>
        </div>
    )
}

export default RegisterForm