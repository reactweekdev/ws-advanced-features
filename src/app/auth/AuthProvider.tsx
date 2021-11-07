import React, { useReducer } from 'react'

import * as authActions from './authActions'
import { AuthDispatchCtx, AuthStateCtx } from './auth-context'
import { useMount } from 'react-use'
import { authService } from 'lib/services/authService'

export const AuthProvider: React.FC = ({ children }) => {
    const { defaultAuthState, authReducer } = authActions
    const [state, dispatch] = useReducer(authReducer, defaultAuthState)

    useMount(() => {
        setTimeout(() => {
            const authenticated = authService.isAuthenticated()
            dispatch(authActions.setAuthenticated(authenticated))
        }, 2000)
    })

    return (
        <AuthStateCtx.Provider value={state}>
            <AuthDispatchCtx.Provider value={dispatch}>
                {children}
            </AuthDispatchCtx.Provider>
        </AuthStateCtx.Provider>
    )
}
