import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../auth/LoginPage'
import DashboardPage from '../dashboard/DashboardPage'

interface Props {}

const Main = (props: Props) => {
    return (
        <Switch>
            <Route path="/dashboard">
                <DashboardPage />
            </Route>
            <Route exact path="/">
                <LoginPage />
            </Route>
        </Switch>
    )
}

export default Main
