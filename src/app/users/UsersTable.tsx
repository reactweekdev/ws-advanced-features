import React, { memo } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import User from 'lib/models/User'
import UserTableRow from './UserTableRow'

interface Props {
    users: User[]
}

const UsersTable: React.FC<Props> = ({ users = [] }) => {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Full Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user: User) => (
                        <UserTableRow key={user.id} user={user} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default memo(UsersTable)
