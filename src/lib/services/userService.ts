import { API } from 'lib/api'
import User from 'lib/models/User'

class UserService {
    private readonly url = {
        users: '/users',
    }

    async fetchUsers() {
        const usersData = await API.get<User[]>(this.url.users)
        console.log(`users`, usersData)

        const users = usersData.map((user: any) => new User(user))
        console.log(`users`, users)

        return users
    }
}

export const userService = new UserService()
