import EmptyView from 'components/EmptyView'
import PageLayout from 'components/PageLayout'
import { Title, TypoTitle } from 'components/UI'
import User from 'lib/models/User'
import { userService } from 'lib/services/userService'
import { useState } from 'react'
import { useMount } from 'react-use'
import UsersTable from './UsersTable'

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([])

    useMount(async () => {
        try {
            const users = await userService.fetchUsers()
            setUsers(users)
            console.log(`users`, users)
        } catch (error) {}
    })

    return (
        <PageLayout titleComponent={<TypoTitle variant="h3">Users</TypoTitle>}>
            {!!users.length ? (
                <UsersTable users={users} />
            ) : (
                <EmptyView title="No users here" />
            )}
        </PageLayout>
    )
}

export default UsersPage
