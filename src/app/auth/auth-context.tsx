import { createContext, useContext } from 'react'

import { AuthDispatch, AuthState } from './authActions'

export const AuthStateCtx = createContext<AuthState | undefined>(undefined)
export const AuthDispatchCtx = createContext<AuthDispatch | undefined>(undefined)

export const useAuthState = (): AuthState => {
    const ctx = useContext(AuthStateCtx)
    if (ctx === undefined) {
        throw Error('useAuthState must be used within a AuthProvider')
    }

    return ctx
}

export const useAuthDispatch = (): AuthDispatch => {
    const ctx = useContext(AuthDispatchCtx)
    if (ctx === undefined) {
        throw Error('useAuthDispatch must be used within a AuthProvider')
    }

    return ctx
}
