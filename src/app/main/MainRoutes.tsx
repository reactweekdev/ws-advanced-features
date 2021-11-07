import { Switch, Route } from 'react-router-dom'

import LoginPage from '../auth/LoginPage'
import DashboardPage from '../dashboard/DashboardPage'

const MainRoutes = () => (
    <Switch>
        <Route path="/dashboard">
            <DashboardPage />
        </Route>
        <Route exact path="/">
            <LoginPage />
        </Route>
    </Switch>
)

export default MainRoutes
