import { useCallback, useState } from 'react'
import { Box, CssBaseline, makeStyles } from '@material-ui/core'

import NavigationDrawer from 'app/navigation/NavigationDrawer'
import TopAppBar from 'app/appbar/TopAppBar'

import MainRoutes from './MainRoutes'

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
}))

const Main = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(true)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = useCallback(() => {
        setOpen(false)
    }, [])

    return (
        <Box display="flex">
            <CssBaseline />
            <TopAppBar onDrawerOpen={handleDrawerOpen} open={open} />
            <NavigationDrawer onDrawerClose={handleDrawerClose} open={open} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <MainRoutes />
            </main>
        </Box>
    )
}

export default Main
