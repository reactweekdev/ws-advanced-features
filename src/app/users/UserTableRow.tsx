import { FC, memo } from 'react'
import User from 'lib/models/User'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

interface Props {
    user: User
}

const UserTableRow: FC<Props> = ({ user }) => (
    <TableRow>
        <TableCell component="th" scope="row">
            {user.id}
        </TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.fullAddress}</TableCell>
    </TableRow>
)

export default memo(UserTableRow)
