import EmptyView from 'components/EmptyView'
import PageLayout from 'components/PageLayout'
import { Title } from 'components/UI'
import { userService } from 'lib/services/userService'
import { useState } from 'react'
import { useMount } from 'react-use'
import { UsersTable } from './UsersTable'

export const UsersPage = () => {
    const [users, setUsers] = useState([])

    useMount(async () => {
        try {
            const users = await userService.fetchUsers()
            setUsers(users)
            console.log(`users`, users)
        } catch (error) {}
    })

    return (
        <PageLayout titleComponent={<Title>Users</Title>}>
            {!!users.length ? (
                <UsersTable users={users} />
            ) : (
                <EmptyView title="No users here" />
            )}
        </PageLayout>
    )
}
