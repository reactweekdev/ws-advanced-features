import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { InputField } from 'components/InputField'

interface Props {}

const LoginForm = (props: Props) => {
    const history = useHistory()

    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        setTimeout(() => {
            history.push('/dashboard')
        }, 2000)
    }

    return (
        <form noValidate onSubmit={handleFormSubmit}>
            <InputField name="email" label="Email Address" autoComplete="email" />

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
                Sign In
            </Button>
        </form>
    )
}

export default LoginForm
