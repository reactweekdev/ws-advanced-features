import { FC } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { InputField } from 'components/InputField'
import { LoginFormData } from 'lib/types'

interface Props {
    onFormSubmit: (data: LoginFormData) => void
}

const LoginForm: FC<Props> = ({ onFormSubmit }) => {
    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        //TODO: You can have here more form data validation
        const { value } = event.target
        onFormSubmit(value)
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
