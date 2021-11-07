import { UsersPage } from 'app/users/UsersPage'
import { Switch, Route } from 'react-router-dom'

import DashboardPage from '../dashboard/DashboardPage'

const MainRoutes = () => (
    <Switch>
        <Route path="/users" component={UsersPage} />
        <Route exact path="/" component={DashboardPage} />
    </Switch>
)

export default MainRoutes
