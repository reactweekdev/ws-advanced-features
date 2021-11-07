import React, { useReducer } from 'react'

import * as authActions from './authActions'
import { AuthDispatchCtx, AuthStateCtx } from './auth-context'

export const AuthProvider: React.FC = ({ children }) => {
    const { defaultAuthState, authReducer } = authActions
    const [state, dispatch] = useReducer(authReducer, defaultAuthState)

    return (
        <AuthStateCtx.Provider value={state}>
            <AuthDispatchCtx.Provider value={dispatch}>
                {children}
            </AuthDispatchCtx.Provider>
        </AuthStateCtx.Provider>
    )
}
