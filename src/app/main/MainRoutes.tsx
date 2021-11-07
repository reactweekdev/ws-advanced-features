import { Switch, Route } from 'react-router-dom'

import DashboardPage from '../dashboard/DashboardPage'

const MainRoutes = () => (
    <Switch>
        <Route path="/dashboard">
            <DashboardPage />
        </Route>
    </Switch>
)

export default MainRoutes
