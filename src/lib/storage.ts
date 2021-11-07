import { Base64 } from 'js-base64'

export enum KEYS {
    TOKEN = 'token',
    USER = 'token',
}

class Storage {
    save(key: KEYS, value: string | number | boolean | Object) {
        try {
            const encodedData = Base64.encode(JSON.stringify(value))
            sessionStorage.setItem(key, encodedData)
        } catch (error) {
            // Error saving data
            console.error('storage', error)
            sessionStorage.removeItem(key)
        }
    }

    load(key: KEYS) {
        try {
            const data = window.sessionStorage.getItem(key)
            if (!data) {
                return null
            }

            // We have data!!
            const baseData = Base64.decode(data)
            return JSON.parse(baseData)
        } catch (error) {
            console.error('storage', error)
            sessionStorage.removeItem(key)
        }
    }

    remove(key: KEYS) {
        try {
            sessionStorage.removeItem(key)
        } catch (error) {
            console.error('storage', error)
        }
    }

    clear() {
        sessionStorage.clear()
        localStorage.clear()
    }
}

export const storage = new Storage()
