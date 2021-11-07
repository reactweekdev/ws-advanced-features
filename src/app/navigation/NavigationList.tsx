import { FC } from 'react'
import { NavLink as Link } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'

const NavigationList: FC<{}> = () => (
    <List>
        <ListItem button component={Link} activeClassName="Mui-selected" to="/">
            <ListItemIcon>
                <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} activeClassName="Mui-selected" to="/users">
            <ListItemIcon>
                <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem>
    </List>
)

export default NavigationList
