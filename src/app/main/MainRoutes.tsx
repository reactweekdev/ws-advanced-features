import { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'

const UsersPage = lazy(() => import('app/users/UsersPage'))
const DashboardPage = lazy(() => import('app/dashboard/DashboardPage'))

const MainRoutes = () => (
    <Switch>
        <Suspense fallback={<CircularProgress color="secondary" />}>
            <Route path="/users" component={UsersPage} />
            <Route exact path="/" component={DashboardPage} />
        </Suspense>
    </Switch>
)

export default MainRoutes
