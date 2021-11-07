export default class User {
    id: number
    name: string
    username: string
    email: string
    address: any

    constructor(data: any) {
        this.id = data.id
        this.name = data.name || ''
        this.username = data.username
        this.email = data.email
        this.address = data.address
    }

    get fullAddress() {
        return this.address ? this.address.street + ', ' + this.address.city : 'n/a'
    }
}
