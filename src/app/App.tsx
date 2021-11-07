import BackdropLoader from 'components/BackdropLoader'
import './App.css'
import { useAuthState } from './auth/auth-context'
import { AuthProvider } from './auth/AuthProvider'
import LoginPage from './auth/LoginPage'
import Main from './main/Main'

const AppMain = () => {
    const { authenticated, loading } = useAuthState()
    return (
        <>
            <BackdropLoader isLoading={loading} />
            {authenticated ? <Main /> : <LoginPage />}
        </>
    )
}

const App = () => (
    <AuthProvider>
        <AppMain />
    </AuthProvider>
)

export default App
