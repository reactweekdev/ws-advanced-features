import Axios from 'axios'
import { storage } from 'lib/storage'

export async function authErrorHandler(err: any) {
    const { status } = err.response
    if ([401, 403].includes(status)) {
        // auto logout if 401 Unauthorized
        storage.clear()

        return Promise.reject(err)
    }

    return Promise.reject(err)
}

export async function errorHandler(err: any) {
    try {
        const { status, data, statusText } = err.response

        console.log(err, err.response)

        if (Axios.isCancel(err)) {
            return Promise.reject()
        }

        if (status === 500) {
            return Promise.reject('Unable to complete request!')
        }

        let error = data.message || statusText
        if (typeof error !== 'string') {
            error = 'Unable to complete request'
        }
        return Promise.reject(error)
    } catch (e) {
        return Promise.reject('Unable to complete request')
    }
}
