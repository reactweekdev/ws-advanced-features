import React from 'react'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

import LoginForm from './LoginForm'

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}))

const LoginPage = () => {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <Box display="flex" flexDirection="column" mt={8} alignItems="center">
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginForm />
            </Box>
        </Container>
    )
}

export default LoginPage
